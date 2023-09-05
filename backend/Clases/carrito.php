<?php
class Carrito
{
    public $stringProductos;
    public $cedula;

    public function __construct($cedula, $stringProductos)
    {
        $this->cedula = $cedula;
        $this->stringProductos = $stringProductos;
    }

    public static function getCarrito($id){
        $fileContent = file_get_contents("../Datos/carrito.json");
        $carritos = json_decode($fileContent,true);
        for ($idx = 0; $idx < count($carritos); $idx++){
          $carritoid = $carritos[$idx]["cedula"];
          if($carritoid == $id){
            echo json_encode($carritos[$idx],true);
            return 0;
          }
        }
        echo "Producto no encontrado.";
        return -1;
        
    }

    public function updateCarrito($id){

        $fileContent = file_get_contents("../Datos/carrito.json");
        $carritos = json_decode($fileContent,true);
        $carrito = array(
          "cedula" => $this->cedula,
          "productos" => $this->stringProductos
        );
        $indice =  Carrito::findID($carritos,$id);
        $carritos[$indice] = $carrito;
        $file = fopen("../Datos/carrito.json", 'w');
        fwrite($file,json_encode($carritos));
        fclose($file);
        $fileContent = file_get_contents("../Datos/carrito.json");
        echo $fileContent;

    }
    
      public static function findID($arr, $id){
        for($ind = 0; $ind<count($arr);$ind++){
          $array = $arr[$ind];
          if($array["cedula"] == $id){
            return $ind;
          }
        }
  
      }
}
