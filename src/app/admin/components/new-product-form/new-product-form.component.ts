import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { CategoryService } from '../../../shared/services/category.service';
import { Product } from '../../../shared/models/product';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrls: ['./new-product-form.component.css']
})
export class NewProductFormComponent{
    // The dollar sign indicates that this variable is an observable
    categories$:any;
    product = {
      price: 0,
      title: "",
      imageUrl: "",
      category: "",
      description : "",
      $key : ""
    };
    id:any;
  
    constructor(
  
      private router : Router,
      private route : ActivatedRoute,
      categoryService : CategoryService, 
      private productService : ProductService,) {
      
        categoryService.getCategories().subscribe( data => {
        this.categories$ = data.map(x => {
          return x.payload.val();
        });
      })    
  
      this.id = this.route.snapshot.paramMap.get("id");
      
      if (this.id) {
        this.productService.getProduct(this.id).pipe(take(1)).subscribe(p => this.product = p as Product)
      }
    }
  
    save(product:object){
  
      if(this.id){
        this.productService.update(this.id, product)
      }
  
      else {
        this.productService.create_product(product);
      }
  
      this.router.navigate(["/menu"]);
    }
  
    delete() {
      if (!confirm("Are you sure you want to delete this product?")) return; 
        
        this.productService.delete(this.id);
        this.router.navigate(["/menu"]);
        
    }
  
    
  
  
  }