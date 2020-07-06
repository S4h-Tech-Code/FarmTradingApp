import { Component, OnInit } from '@angular/core';
import { ProductFilterService } from './product-filter.service';

import { products } from '../../interfaces/product'

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  public products = [];
  public filterData = [];
  slectedProduct: Number;

  constructor(private _productFilterService: ProductFilterService) { }

  ngOnInit() {
    this._productFilterService.getProducts()
    .subscribe(
      (data: products[]) => 
      {
        console.log("response data: ", data);
        this.products = data;
      }
    );
  }

  onProductSelect(slectedProductId:any):void{
    this._productFilterService.getProductsByIdParams(slectedProductId)
    .subscribe(
      (data: products[]) => 
      {
        console.log("flitered response data by id : ", data);
        this.filterData = data;
      }
    );
  }
}
