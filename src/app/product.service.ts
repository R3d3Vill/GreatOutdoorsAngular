import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, retry } from 'rxjs/operators';
import { ImageService } from './image.service';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  localurl1:string="  http://localhost:8087/productList";
  localurl2:string="  http://localhost:8087/products/search";
 
  product:Product;
  productSearch:Product[]=[];
  images:any[]=[];

  base64Data: any;
  retrievedImage: any;

  constructor(private http:HttpClient,public imgService:ImageService) { }
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  }

  getProducts():Observable<Product>
  {
    return this.http.get<Product>(this.localurl1);
  }

  getProductByProductName(productName:String):Observable<Product>
  {
    return this.http.get<Product>(this.localurl2+"?productName="+productName);
  }

  setLocalProductById(productId:String)
  {
  this.http.get<Product>(" http://localhost:8087/product/"+productId).subscribe( (resp:any)=> {
      this.product=resp;
     this.retrievedImage='';
      this.imgService.getImageByProductId(this.product.productId).subscribe((data:any)=>{
        this.base64Data=data.image;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      });
    });
  }

  getProductById(productId:string)
  {
    return this.http.get<Product>(" http://localhost:8087/product/"+productId);
  }

  getSearchItems(productName:String)
  {
    this.getProductByProductName(productName).pipe(retry(0), catchError((error: HttpErrorResponse) => {
      window.alert(error.error);
      return throwError('Error fetching data from serve');
    })).subscribe((resp:any)=>{
       
        this.productSearch=resp;
        this.images=[];
        for(let product of this.productSearch)
        {
          this.imgService.getImageByProductId(product.productId).subscribe((data:any)=>{
            this.base64Data=data.image;
            this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
            this.images.push(this.retrievedImage);
          });
        }
    
      

    });

  }


  getHomePageItems()
  {
    this.getProductByProductName("").pipe(retry(0), catchError((error: HttpErrorResponse) => {
      window.alert(error.error);
      return throwError('Error fetching data from serve');
    })).subscribe((resp:any)=>{
      this.productSearch=resp.slice(-3);
    
       
        this.images=[];
        for(let product of this.productSearch)
        {
          this.imgService.getImageByProductId(product.productId).subscribe((data:any)=>{
     
            
            this.base64Data=data.image;
            this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
            this.images.push(this.retrievedImage);
            
          });
        }
        
    
      

    });

  }
   

}
