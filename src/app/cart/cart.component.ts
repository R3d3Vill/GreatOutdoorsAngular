import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { CustomerService } from '../customer.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cartService:CartService,private customerService:CustomerService,private orderService:OrderService,private router:Router) { }

  updatedQuantity:any;
  productId:any;

  ngOnInit(): void {
    this.cartService.getCartItems(this.customerService.userId);
    this.cartService.getCartValueForUser(this.customerService.userId);
  }

  update(productId:string,quantity)
  { this.productId=productId;
    this.updatedQuantity=quantity;
  }
  onSave(){
    this.cartService.addToCart(this.customerService.userId,this.productId,this.updatedQuantity);
    window.location.reload();

  }

  delete(productId:string)
  {
    this.cartService.deleteCartItem(this.customerService.userId,productId);
    // window.location.reload();
  }

  placeOrder()
  {
    this.orderService.placeOrder().subscribe((data:any)=>{
      alert("Order Placed");
      this.router.navigateByUrl('myorders');
    });;
    
  }

}
