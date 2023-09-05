import { Component } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productos : any[]=[]
  selected='Productos';
  stringProds= ''
  prods:string[]=[]
  cant:any[]=[]
constructor(private productSvc: ProductoService){
  this.obtenerDatosVista()
}


obtenerDatosVista(){
  if(this.selected=='Productos'){
    this.productSvc.getAllProducts().subscribe(res=>{
      console.log(res)
      this.productos=res as any[]
    })
  }else if(this.selected=='Fruta'){
    this.productSvc.getProductbyCategoria(this.selected).subscribe(res=>{
      this.productos= res as any[]
    })
  }else if(this.selected=='Carne'){
    this.productSvc.getProductbyCategoria(this.selected).subscribe(res=>{
      this.productos= res as any[]
    })
  }
}

agregarProducto(id:string){
  //ID:cantidad,ID:cantidad,ID:cantidad
  //a la final lo convierte en un string
  /*
  if(id in this.stringProds.keys){
    this.stringProds[id] +=1;
  }else{
    this.stringProds[id] = 1;
  }
  console.log(this.stringProds)*/
  if(this.prods.includes(id)){
      console.log("incluye")
      console.log(id)
    let i=0;
      while(true){
        if(id==this.prods[i]){
          console.log(i)
          this.cant[i]= this.cant[i]+1
          console.log(this.prods)
          console.log(this.cant)
          break;
          
        }
        i+=1;
      }
      
  }else{
    this.prods.push(id)
    this.cant.push(1)
    console.log(this.prods)
    console.log(this.cant)
  }

}

cargarCarrito(){
  for(let i=0;i<this.prods.length;i++){
    let p= this.prods[i].toString()
    let c= this.cant[i].toString()
    console.log(this.prods)
    let linea = p + ':' +c +','
    if(i==this.prods.length-1){
      linea=p+':'+c
    }
    
    this.stringProds+=linea
   

  }
  console.log(this.stringProds)
}

}


