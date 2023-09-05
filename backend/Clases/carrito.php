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

    public static function updateCarrito($id){

        $fileContent = file_get_contents("../Datos/carrito.json");
        $carritos = json_decode($fileContent,true);
        $carrito = array(
          "cedula" => self::$cedula,
          "productos" => self::$stringProductos
        );
        $indice =  Carrito::encontrarArrID($carritos,$id);
        $carritos[$indice] = $carrito;
        $file = fopen("../data/vendedores.json", 'w');
        fwrite($file,json_encode($carritos));
        fclose($file);
        $fileContent = file_get_contents("../Datos/carritos.json");
        echo $fileContent;

    }

    
      public static function encontrarArrID($arreglo, $id){
        for($indice = 0; $indice<count($arreglo);$indice++){
          $array = $arreglo[$indice];
          if($array["id"] == $id){
            return $indice;
          }
        }
  
      }
}
