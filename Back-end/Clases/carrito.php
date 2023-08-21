<?php
class Carrito
{
    public $listaProductos;
    public $cantidadArticulos;
    public $precioTotal;


    public function __construct($listaProductos, $cantidadArticulos, $precioTotal)
    {
        $this->listaProductos = $listaProductos;
        $this->cantidadArticulos = $cantidadArticulos;
        $this->precioTotal = $precioTotal;
    }

    //setters y getters
    function setListaProductos($listaProductos)
    {
        $this->listaProductos = $listaProductos;
    }
    function getListaProductos()
    {
        return $this->listaProductos;
    }

    function setCantidadArticulos($cantidadArticulos)
    {
        $this->$cantidadArticulos;
    }

    function getCantidadArticulos()
    {
        return $this->cantidadArticulos;
    }

    function setPrecioTotal($precioTotal)
    {
        $this->$precioTotal;
    }

    function getPrecioTotal()
    {
        return $this->precioTotal;
    }


    function agregarProducto($producto)
    {
        array_push($this->listaProductos, $producto);
    }

    function removerProducto($producto)
    {
        for ($i = 0; $i < $this->cantidadArticulos; $i++) {
            if ($this->listaProductos[$i]["id"] == $producto["id"]) {
                unset($this->listaProductos[$i]);
                return true;
            }
        }
        return false;
    }

    function calcularPrecioTotal(){
        $this->precioTotal = 0;
        for ($i = 0; $i < $this->cantidadArticulos; $i++){
            $this->precioTotal += $this->listaProductos[$i]["precio"]; 
        }
    }
}
