import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart, CartId } from './Cart';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems:Cart[]=[];
  products:any=[];
  cartValue:number;

  url:string="http://localhost:7171/user/";

  constructor(private http:HttpClient,private productService:ProductService) {
   }

   getCartItems(userId:string)
   {
     this.http.get(this.url+"cart/"+userId).subscribe((data:any)=>{
       this.cartItems=data;

       this.products=[];
       for(let item of this.cartItems)
       {
         this.productService.getProductById(item.cartId.productId).subscribe((data:any)=>{
           this.products.push(data.productName);
 
         })
       
       }
     })
   }

   getCartValueForUser(userId:string)
   {
     this.http.get(this.url+"cartValue/"+userId).subscribe((data:any)=>{
       this.cartValue=data;
     })
   }



   deleteCartItem(userId:string,productId:string)
   {
     this.http.post(this.url+"/cart/",new CartId(userId,productId)).subscribe((data:any)=>{
      alert("Item deleted successfully");
      window.location.reload();
     });
   }

   addToCart(userId:string ,productId:string, quantity:number)
   {
     this.http.post(this.url+"cart/addItem",new Cart(new CartId(userId,productId),quantity)).subscribe((data:any)=>{
     });
   }



}
