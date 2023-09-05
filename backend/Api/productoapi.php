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

//echo "metodo http: ".$_SERVER['REQUEST_METHOD'];
//echo 'Informacion:' . file_get_contents('php://input'); //lee lo que mando el cliente
//indicar que estamos mandando un json
header('Content-Type: application/json; charset=utf-8'); //indico que le estoy mandando un json
include_once("../Clases/producto.php");

switch($_SERVER['REQUEST_METHOD']){
    //agregar productos
    case 'POST':
        $_POST = json_decode(file_get_contents('php://input'),true); //obtiene en json format

        $id_prod = $_POST['id'];
        
        $nombre_prod = $_POST['nombre'];
        $precio_prod = $_POST['precio'];
        $stock = $_POST['stock'];
        $imageURL = $_POST['imageURL'];
        $descr_prod = $_POST['descripcion'];
        $categoria = $_POST['categoria'];

        $producto = new Producto($id_prod, $nombre_prod, $precio_prod, $stock, $imageURL,  $descr_prod,  $categoria);
        $producto->addProducts();

        break;

    //obtener productos
    case 'GET':
        if (isset($_GET['id'])){
            //mostrar productos por id
            Producto::getProducto($_GET['id']);
            break;
        }
        if (isset($_GET["categoria"])){
            Producto::getProductoCategoria($_GET['categoria']);
            break;
        }
        
        else{
            //obtener todos los productos
            Producto::readProducts();
        }

        break;
   
}



?> 