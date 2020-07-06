import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../../../product-list/product-list.service';
import { productList } from 'src/app/interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.css']
})
export class ResponsesComponent implements OnInit {
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
  onReviewOffer(){
   this.router.navigateByUrl('/offer-full-details');
  }
  onEdit(){
    this.router.navigateByUrl('/post');
  }

}
