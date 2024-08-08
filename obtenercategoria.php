<?php
$servername = "localhost";
$username = "root";
$password = "123456"; 
$database = "entregable";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $conn->prepare("SELECT * FROM categoria");
    $stmt->execute();

    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    header('Content-Type: application/json');
    echo json_encode($data);
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
$conn = null;
?>
