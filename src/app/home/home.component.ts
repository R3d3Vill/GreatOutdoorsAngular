import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public productService:ProductService,public router:Router) { }

  ngOnInit(): void {
    this.productService.getHomePageItems();
  }

  viewProduct(productid:String)
  { console.log(productid);
    this.productService.setLocalProductById(productid);
    console.log(this.productService.product);
    this.router.navigateByUrl("/product-info");
  }

}
