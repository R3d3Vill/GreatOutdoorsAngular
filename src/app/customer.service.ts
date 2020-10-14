import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Customer } from 'src/app/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  userId:string=null;
  constructor(private httpClient:HttpClient) { }

  private customerApiUrl = "http://localhost:7070/customerApi"
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json')};

  addCustomer(customer:Customer):Observable<Customer>{
    return this.httpClient.post<Customer>(this.customerApiUrl+'/addCustomer',JSON.stringify(customer),this.options);
  }

  getCustomerByUserId(userId:string):Observable<Customer>{
    return this.httpClient.get<Customer>(this.customerApiUrl+'/getCustomerByUserId/'+userId,this.options);
  }

  updateCustomer(customer:Customer):Observable<Customer>{
    return this.httpClient.put<Customer>(this.customerApiUrl+'/updateCustomer',JSON.stringify(customer),this.options);
  }

}
