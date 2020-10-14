import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Customer } from 'src/app/Customer';

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
  errorMsg:string;
  successMsg:string;
  ngOnInit(): void {
    document.getElementById("errorMsg").style.display="none"
    document.getElementById("successMsg").style.display="none"
    this.userId=this.customerService.userId;
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
    this.customerService.updateCustomer(customer).pipe(catchError((error : HttpErrorResponse) =>{
      this.errorMsg=error.error.text
      document.getElementById("errorMsg").style.display="block"
      document.getElementById("successMsg").style.display="none"
      return throwError(error);
    })).subscribe(data =>{
      console.log(data);
      this.successMsg="Details Updated Successfully"
      document.getElementById("errorMsg").style.display="none"
      document.getElementById("successMsg").style.display="block"
    });
}}
