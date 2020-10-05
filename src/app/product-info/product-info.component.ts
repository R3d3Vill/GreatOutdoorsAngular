import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  constructor(public productService:ProductService,public imageService:ImageService) { }

  
  ngOnInit(): void {
    
  }

 

 

}
