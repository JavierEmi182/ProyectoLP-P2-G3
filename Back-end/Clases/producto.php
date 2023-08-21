<?php 
class Producto{
    public $id;
    public $nombre;
    public $precio;
    public $stock;
    public $imageURL;
    public $descripcion;
    public $categoria;
    
    //constructor
    public function __construct($id,$nombre, $precio,$stock,$imageURL,$descripcion, $categoria){
        $this->id = $id;
        $this->nombre = $nombre;
        $this->precio = $precio;
        $this->stock = $stock;
        $this->imageURL = $imageURL;
        $this->descripcion = $descripcion;
        $this->categoria = $categoria;
    }

    //setters y getters
    function set_name($nombre) {
        $this->nombre = $nombre;
      }
      function get_name() {
        return $this->nombre;
      }
      function set_cat($cat) {
        $this->categoria = $cat;
      }
      function get_cat() {
        return $this->categoria;
      }
      function set_precio($precio) {
        $this->precio = $precio;
      }
      function get_precio() {
          return $this->precio;
      }
      function set_descripcion($descripcion) {
          $this->descripcion =$descripcion;
      }
      function get_descripcion() {
        return $this->descripcion;
      }
      function set_id_producto($id_producto) {
          $this->id_producto =$id_producto;
      }
      function get_id_producto() {
          return $this->id_producto;
      }

      //Agregar en json
      public function addProducts(){
        $jsonContent = file_get_contents('../Datos/Productos.json');
        $productos = json_decode($jsonContent,true);
        $productos[] = array(
          "id"=> $this->id,
          "nombre"=> $this->nombre,
          "precio"=> $this->precio,
          "stock"=> $this->stock,
          "imageURL"=> $this->imageURL,
          "categoria" => $this->categoria,
          "descripcion"=>$this->descripcion
        );
        $archivo = fopen("../Datos/Productos.json", "w");
        fwrite($archivo, json_encode($productos));
        fclose($archivo);
        $fileContent = file_get_contents("../Datos/Productos.json");
        echo $fileContent;
      }

      //Leer json
      public static function readProducts(){
        $fileContent = file_get_contents("../Datos/Productos.json");
        echo $fileContent;
      }
      //Leer producto especifico por ID
      public static function getProducto($id){
        $fileContent = file_get_contents("../Datos/Productos.json");
        $productos = json_decode($fileContent,true);
        
        for ($idx = 0; $idx < count($productos); $idx++){
          $id_tmp_prod = $productos[$idx]["id"];
          if($id_tmp_prod == $id){
            echo json_encode($productos[$idx],true);
            return 0;
          }
  
        }
        echo "Producto no encontrado.";
        return -1;
        
      }
}
?>