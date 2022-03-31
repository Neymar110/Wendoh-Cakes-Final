import { Component, Input } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { CategoryModel } from '../../../../shared/models/category';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent{
  categories$:any;
  @Input("category") category : any;

  constructor(categoryService : CategoryService) {
    this.categories$ = categoryService.getCategories().subscribe(data => {
      this.categories$ = data.map(values => {
        return {
          $key: values.key,
          ...values.payload.val() as CategoryModel
        }
      })
    });
   }

   get categoriesLength(){
     return this.categories$.length
   }
}
