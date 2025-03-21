
<?php
// Configuración de CORS para permitir peticiones desde el frontend
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Si es una petición OPTIONS (preflight), terminar aquí
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Verificar que sea una petición POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

// Obtener los datos JSON del cuerpo de la petición
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Verificar que se hayan enviado todos los datos necesarios
if (!$data || 
    !isset($data['nombre']) || 
    !isset($data['apellidoPaterno']) ||
    !isset($data['apellidoMaterno']) || 
    !isset($data['boleta']) || 
    !isset($data['email']) || 
    !isset($data['promedio']) || 
    !isset($data['especialidad'])
) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Datos incompletos']);
    exit;
}

// Configuración de la conexión a la base de datos
$host = 'localhost';      // Reemplazar con el host de tu base de datos
$dbname = 'cecyt12';      // Reemplazar con el nombre de tu base de datos
$username = 'usuario';    // Reemplazar con tu nombre de usuario
$password = 'contraseña'; // Reemplazar con tu contraseña

try {
    // Crear conexión a la base de datos
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Preparar y ejecutar la consulta SQL para insertar el registro
    $stmt = $conn->prepare("INSERT INTO registros (nombre, apellido_paterno, apellido_materno, boleta, email, promedio, especialidad) 
                           VALUES (:nombre, :apellido_paterno, :apellido_materno, :boleta, :email, :promedio, :especialidad)");
    
    // Ejecutar la consulta con los valores recibidos
    $resultado = $stmt->execute([
        ':nombre' => $data['nombre'],
        ':apellido_paterno' => $data['apellidoPaterno'],
        ':apellido_materno' => $data['apellidoMaterno'],
        ':boleta' => $data['boleta'],
        ':email' => $data['email'],
        ':promedio' => $data['promedio'],
        ':especialidad' => $data['especialidad']
    ]);
    
    if ($resultado) {
        echo json_encode([
            'success' => true,
            'message' => 'Registro creado con éxito'
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Error al crear el registro'
        ]);
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Error en la base de datos: ' . $e->getMessage()
    ]);
}
?>
