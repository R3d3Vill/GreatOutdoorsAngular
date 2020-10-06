import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerService } from './customer.service';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderList:any[];
  orderItems:any[]=[];
  products:any=[];

  constructor(private http:HttpClient,private productService:ProductService,private custService:CustomerService) { }
  url:string="http://localhost:8081/user/";

  getOrdersForUser(userId:string)
  {
    this.http.get(this.url+"orders/"+userId).subscribe((data:any)=>{
      this.orderList=data;
    });
  }

  getProductsInOrder(orderId:string)
  {
    this.http.get(this.url+"order/products/"+orderId).subscribe((data:any)=>{
      this.orderItems=[];
      console.log(data);
      
      this.orderItems=data;

      this.products=[];
      for(let item of this.orderItems)
      {
        this.productService.getProductById(item.order.productId).subscribe((data:any)=>{
          this.products.push(data.productName);

        })
      
      }
    });
  }

  placeOrder()
  {
    return this.http.post(this.url+"order/",this.custService.userId);
  }

}
