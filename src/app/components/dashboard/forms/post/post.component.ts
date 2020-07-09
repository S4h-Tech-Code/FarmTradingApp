import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from 'src/app/interfaces/post';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public post = [];
  postDetails:FormGroup;
  constructor( private fb:FormBuilder) { }

  ngOnInit() {
    this.postDetails = this.fb.group({
      category: [''],
      commodity: [''],
      variety: [''],
      expectedQuantity: [''],
      expectedDate: [''],
      organic: [''],
      quantity: [''],
      qtyUOM: [''],
      price: [''],
      priceUOM: [''],
      freight: [''],
      movement: [''],
      location: [''],
      text: [''],
    });
  }
  onPost(){
   console.log('btn clicked');
   console.log('postDetails',this.postDetails.value);
 }
}
