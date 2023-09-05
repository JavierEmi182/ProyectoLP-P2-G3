<?php

 if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    header('Access-Control-Allow-Headers: token, Content-Type');
    header('Access-Control-Max-Age: 1728000');
    header('Content-Length: 0');
    header('Content-Type: text/plain');
    die();
}

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
include_once("../Clases/carrito.php");

switch($_SERVER['REQUEST_METHOD']){
    case 'POST':
        $_POST = json_decode(file_get_contents('php://input'),true); //obtiene en json format
        $jsonContent = file_get_contents('../Datos/carrito.json');
        $productos = json_decode($jsonContent,true);
        $productos[] = array(
        "cedula"=> $_POST ["cedula"],
        "productos" => $_POST["productos"]
        );
        $archivo = fopen("../Datos/carrito.json", "w");
        fwrite($archivo, json_encode($productos ));
        fclose($archivo);
        $fileContent = file_get_contents("../Datos/carrito.json");
        echo $fileContent;
        break;
    case "PUT":
        if (isset($_GET['id'])) {
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $carrito = new Carrito($_PUT['cedula'],$_PUT['productos']);
            $carrito->updateCarrito($_GET['id']);
        }
        break;

    //se obtiene todos los carritos
    case  'GET':
        if (isset($_GET['id'])){
            //mostrar carrito por id
            Carrito::getCarrito($_GET['id']);

        }

        else{

            $fileContent = file_get_contents("../Datos/carrito.json");
            echo $fileContent;
        }

        break;
    

}
?>