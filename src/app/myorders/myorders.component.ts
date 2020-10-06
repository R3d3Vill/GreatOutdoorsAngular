import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  constructor(public orderService:OrderService,public userService:CustomerService) { }

  ngOnInit(): void {
    this.orderService.getOrdersForUser(this.userService.userId);
  }

  viewOrder(orderId:string)
  {
    this.orderService.getProductsInOrder(orderId);
  }

}
