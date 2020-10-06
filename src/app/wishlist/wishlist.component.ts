import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import {Product} from '../Product';
import { Wish } from '../Wish';
import { ProductService } from '../product.service';
import { ImageService } from '../image.service';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';


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
  constructor(private customerService:CustomerService,private wishlistService:WishlistService,public productService:ProductService,public imageService:ImageService,private router:Router) { }

  ngOnInit(): void {
    
    this.findAllProductsInUserWishlist(this.customerService.userId);
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
    this.wishlistService.removeProductFromWishlist(this.customerService.userId,productId).subscribe(data=>
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

  viewProduct(productid:String)
  {
    this.productService.setLocalProductById(productid);
    this.router.navigateByUrl("/product-info");
  }

}
