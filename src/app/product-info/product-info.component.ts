import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CustomerService } from '../customer.service';
import { ImageService } from '../image.service';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { WishlistService } from '../wishlist.service';
import { WishlistComponent } from '../wishlist/wishlist.component';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  constructor(private wishListService:WishlistService,
    private customerService:CustomerService,
    public productService:ProductService,
    public imageService:ImageService,
    private cartService:CartService) { }

  
  ngOnInit(): void {
    
  }

  addItemToCart(productId:string)
  {
    this.cartService.addToCart(this.customerService.userId,productId,1);
  }
 
  addToWishList(productId:string)
  {
    this.wishListService.addProductToWishlist(this.customerService.userId,productId).subscribe((data:any)=>{
      alert("Product added to wishList")
      
    });
  }
 

}
