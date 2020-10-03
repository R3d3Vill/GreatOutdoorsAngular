import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import {Product} from '../Product';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  productArr:Product[]=[];
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

}
