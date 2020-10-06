import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from './customer.service';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GreatOutdoors';
  
  constructor(public productService:ProductService,public router:Router,public customerService:CustomerService)
  {

  }
    search:string="";

  searchProducts()
  { if(this.search.length==0)
    this.productService.getSearchItems("");
    else
    this.productService.getSearchItems(this.search);
    this.router.navigateByUrl("/search");
  }
}
