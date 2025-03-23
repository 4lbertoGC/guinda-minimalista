
/**
 * API service for interacting with the backend
 */

export interface RegistroData {
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  boleta: string;
  email: string;
  promedio: string;
  especialidad: string;
}

/**
 * Sends registration data to the backend
 */
export const submitRegistro = async (data: RegistroData): Promise<{ success: boolean; message: string }> => {
  try {
    // Import supabase client
    const { supabase } = await import('@/integrations/supabase/client');
    
    // Check if the boleta already exists
    const { data: existingData } = await supabase
      .from('registros')
      .select('boleta')
      .eq('boleta', data.boleta)
      .single();
      
    if (existingData) {
      return {
        success: false,
        message: 'El número de boleta ya está registrado'
      };
    }
    
    // Insert data into Supabase
    const { error } = await supabase
      .from('registros')
      .insert([{
        nombre: data.nombre,
        apellido_paterno: data.apellidoPaterno,
        apellido_materno: data.apellidoMaterno,
        boleta: data.boleta,
        email: data.email,
        promedio: data.promedio,
        especialidad: data.especialidad
      }]);
    
    if (error) {
      console.error('Error Supabase:', error);
      // If Supabase fails, try with the PHP API as fallback
      return await submitViaPhp(data);
    }
    
    return {
      success: true,
      message: 'Registro creado con éxito'
    };
  } catch (error) {
    console.error('Error en submitRegistro:', error);
    // If there's an error with Supabase, try with the PHP API as fallback
    return await submitViaPhp(data);
  }
};

// Auxiliary function to send data through the PHP API
const submitViaPhp = async (data: RegistroData): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch('/api/registro.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    // First check if the response is OK
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    
    // Check content type to ensure we're getting JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.error('Non-JSON response from PHP API:', await response.text());
      throw new Error('El servidor devolvió un formato no válido');
    }
    
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting registration via PHP:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Error al enviar el registro',
    };
  }
};

/**
 * Retrieves all registrations from the backend (for admin panel)
 */
export const getRegistros = async (): Promise<any[]> => {
  try {
    // Import supabase client
    const { supabase } = await import('@/integrations/supabase/client');
    
    const { data, error } = await supabase
      .from('registros')
      .select(`
        id, 
        boleta, 
        nombre,
        apellido_paterno,
        apellido_materno,
        email,
        promedio,
        especialidad,
        created_at
      `)
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error Supabase:', error);
      // If Supabase fails, try with the PHP API as fallback
      return await getRegistrosViaPhp();
    }
    
    // Transform data to maintain compatibility with the existing format
    return data.map(registro => ({
      id: registro.id,
      boleta: registro.boleta,
      nombre: registro.nombre,
      apellido_paterno: registro.apellido_paterno,
      apellido_materno: registro.apellido_materno,
      nombre_completo: `${registro.nombre} ${registro.apellido_paterno} ${registro.apellido_materno}`,
      especialidad: getEspecialidadNombre(registro.especialidad),
      promedio: registro.promedio,
      fecha: new Date(registro.created_at).toISOString().split('T')[0]
    }));
  } catch (error) {
    console.error('Error en getRegistros:', error);
    // If there's an error with Supabase, try with the PHP API as fallback
    return await getRegistrosViaPhp();
  }
};

// Auxiliary function to get registrations through the PHP API
const getRegistrosViaPhp = async (): Promise<any[]> => {
  try {
    const response = await fetch('/api/registros.php');
    
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching registrations via PHP:', error);
    return [];
  }
};

// Helper function to get the full name of the specialty
const getEspecialidadNombre = (id: string): string => {
  const especialidades: Record<string, string> = {
    'informatica': 'Técnico en Informática',
    'administracion': 'Técnico en Administración',
    'contaduria': 'Técnico en Contaduría',
    'mercadotecnia': 'Técnico en Mercadotecnia Digital'
  };
  return especialidades[id] || id;
};
