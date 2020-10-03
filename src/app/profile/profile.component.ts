import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Customer } from 'src/Customer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private customerService:CustomerService) { }

  userId:string;
  userName:string;
  address:string;
  zipcode:string;
  email:string;
  mobile:string;
  ngOnInit(): void {
    this.userId='U10001';
    this.customerService.getCustomerByUserId(this.userId).pipe(catchError((error : HttpErrorResponse) =>{
      console.log(error)
      return throwError(error.error.message);
    })).subscribe(data => {
        this.userName=data.userName;
        this.address=data.address;
        this.zipcode=data.zipcode;
        this.email=data.email;
        this.mobile=data.mobile;
      });
  }

  updateCustomer(){
    var customer = new Customer(this.userId,this.userName,this.address,this.zipcode,this.email,this.mobile);
    this.customerService.updateCustomer(customer).subscribe(data =>{
      console.log(data);
    })
  }
}
