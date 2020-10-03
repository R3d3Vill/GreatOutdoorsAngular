import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Product} from './Product';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  public url:string = "http://localhost:8085"

  constructor(private http:HttpClient) { }

  public findAllProductsInUserWishlist(userId:string):Observable<Product[]>
  {
    return this.http.get<Product[]>(this.url+'/allWishlistProducts/'+userId);
  }
}
