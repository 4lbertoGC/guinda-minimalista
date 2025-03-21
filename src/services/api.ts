
/**
 * API service for interacting with the PHP backend
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
 * Sends registration data to the PHP backend
 */
export const submitRegistro = async (data: RegistroData): Promise<{ success: boolean; message: string }> => {
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
    console.error('Error submitting registration:', error);
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
    const response = await fetch('/api/registros.php');
    
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching registrations:', error);
    return [];
  }
};
