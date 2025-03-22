
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
    // Intenta usar Supabase primero
    const { supabase } = await import('@/integrations/supabase/client');
    
    // Insertar datos en Supabase
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
      // Si falla Supabase, intentar con la API PHP de respaldo
      return await submitViaPhp(data);
    }
    
    return {
      success: true,
      message: 'Registro creado con éxito'
    };
  } catch (error) {
    console.error('Error en submitRegistro:', error);
    // Si hay un error con Supabase, intentar con la API PHP de respaldo
    return await submitViaPhp(data);
  }
};

// Función auxiliar para enviar datos a través de la API PHP
const submitViaPhp = async (data: RegistroData): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch('/api/registro.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
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
    // Intenta usar Supabase primero
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
      // Si falla Supabase, intentar con la API PHP de respaldo
      return await getRegistrosViaPhp();
    }
    
    // Transformar datos para mantener compatibilidad con el formato existente
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
    // Si hay un error con Supabase, intentar con la API PHP de respaldo
    return await getRegistrosViaPhp();
  }
};

// Función auxiliar para obtener registros a través de la API PHP
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

// Función auxiliar para obtener el nombre completo de la especialidad
const getEspecialidadNombre = (id: string): string => {
  const especialidades: Record<string, string> = {
    'informatica': 'Técnico en Informática',
    'administracion': 'Técnico en Administración',
    'contaduria': 'Técnico en Contaduría',
    'mercadotecnia': 'Técnico en Mercadotecnia Digital'
  };
  return especialidades[id] || id;
};
