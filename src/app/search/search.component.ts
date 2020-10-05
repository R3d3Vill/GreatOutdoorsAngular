import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from '../image.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public productService:ProductService,public router:Router,public imageService:ImageService) { }

  ngOnInit(): void {
  }

  viewProduct(productid:String)
  { console.log(productid);
    this.productService.setLocalProductById(productid);
    console.log(this.productService.product);
    this.imageService.getImageByProductId(productid);
    this.router.navigateByUrl("/product-info");
  }

}
