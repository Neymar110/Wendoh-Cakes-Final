import { Component, Input } from '@angular/core';
import { CategoryModel } from 'src/app/shared/models/category';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'updated-product-filter',
  templateUrl: './updated-product-filter.component.html',
  styleUrls: ['./updated-product-filter.component.css']
})
export class UpdatedProductFilterComponent {

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
