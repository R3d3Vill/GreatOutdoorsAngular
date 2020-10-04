import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import {Product} from '../Product';
import { Wish } from '../Wish';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  productArr:Product[]=[];
  wish:Wish;
  response:string;
  index:number;
  constructor(private wishlistService:WishlistService) { }

  ngOnInit(): void {
    this.findAllProductsInUserWishlist('U10001');
  }

  findAllProductsInUserWishlist(userId:string)
  {
    this.wishlistService.findAllProductsInUserWishlist(userId).subscribe(data=>
      {
        this.productArr=data;
      })
  }
  removeProductFromWishlist(productId:string)
  {
    this.wishlistService.removeProductFromWishlist('U10001',productId).subscribe(data=>
      {
        this.response=data;
        console.log(this.response);
        for(this.index=0;this.index<this.productArr.length;this.index++)
        {
          if(this.productArr[this.index].productId==productId)
          {
            this.productArr.splice(this.index,1);
          }
        }
      });
  }

}
