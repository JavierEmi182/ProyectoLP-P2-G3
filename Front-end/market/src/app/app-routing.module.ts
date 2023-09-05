import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { LoadcartComponent } from './components/loadcart/loadcart.component';
const routes: Routes = [
  {path:'carrito/:id',component:CarritoComponent},
  {path:'producto/:id',component:ProductoComponent},
  {path:'cargaCarrito',component:LoadcartComponent},
  {path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
