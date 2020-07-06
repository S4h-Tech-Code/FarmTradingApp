import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { productList } from 'src/app/interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  searchText: string;
  public productList = [];

  constructor(private _productListService: ProductListService,
              private router:Router) { }

  ngOnInit() {
    this._productListService.getProducts()
    .subscribe(
      (data: productList[]) => 
      {
        console.log("productList response data: ", data);
        this.productList = data;
      }
    );
  }
 
}
