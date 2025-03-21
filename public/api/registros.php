
<?php
// Configuración de CORS para permitir peticiones desde el frontend
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Si es una petición OPTIONS (preflight), terminar aquí
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Verificar que sea una petición GET
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
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
    
    // Preparar y ejecutar la consulta SQL para obtener todos los registros
    $stmt = $conn->prepare("SELECT id, 
                                   boleta, 
                                   nombre,
                                   apellido_paterno,
                                   apellido_materno,
                                   CONCAT(nombre, ' ', apellido_paterno, ' ', apellido_materno) as nombre_completo,
                                   CASE 
                                     WHEN especialidad = 'informatica' THEN 'Técnico en Informática'
                                     WHEN especialidad = 'administracion' THEN 'Técnico en Administración'
                                     WHEN especialidad = 'contaduria' THEN 'Técnico en Contaduría'
                                     WHEN especialidad = 'mercadotecnia' THEN 'Técnico en Mercadotecnia Digital'
                                     ELSE especialidad
                                   END as especialidad,
                                   promedio,
                                   DATE_FORMAT(fecha_registro, '%Y-%m-%d') as fecha
                            FROM registros
                            ORDER BY fecha_registro DESC");
    $stmt->execute();
    
    // Obtener todos los registros como un array asociativo
    $registros = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Devolver los registros en formato JSON
    echo json_encode($registros);
    
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Error en la base de datos: ' . $e->getMessage(),
        'registros' => []
    ]);
}
?>
