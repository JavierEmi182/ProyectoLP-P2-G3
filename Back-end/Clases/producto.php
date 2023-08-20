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
          $this->id_vendedor =$id_producto;
      }
      function get_id_producto() {
          return $this->id_producto;
      }
}
?>