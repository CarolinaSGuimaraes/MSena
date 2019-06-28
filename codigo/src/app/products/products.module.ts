import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { NgForm} from '@angular/forms';



@NgModule({
  declarations: [
  ProductsComponent
  ],

  imports: [
    NgModule,
    NgForm,
    CommonModule,
    FormsModule,
    ProductsRoutingModule,

  ],

  exports: [
    ProductsComponent
  ],

  providers: [],


})
export class ProductsModule { }
