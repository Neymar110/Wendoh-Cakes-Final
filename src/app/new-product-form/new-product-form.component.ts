import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrls: ['./new-product-form.component.css']
})
export class NewProductFormComponent{
  categories$:any;
  constructor(private router : Router, private productService : ProductService, categoryService : CategoryService) { 
    categoryService.getCategories().subscribe( data => {
      this.categories$ = data.map(x => {
        return x.payload.val();
      });
    })
  }

  product = {
    price: 0,
    title: "",
    imageUrl: "",
    category: "",
    $key : ""
  };
  id:any;

  save(product:object){

    if(this.id){
      this.productService.update(this.id, product)
    }

    else {
      this.productService.create(product);
    }

    this.router.navigate(["/admin/products"]);
  }

  delete() {
    if (!confirm("Are you sure you want to delete this product?")) return; 
      
      this.productService.delete(this.id);
      this.router.navigate(["/admin/products"]);
      
  }

}
