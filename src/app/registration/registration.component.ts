import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Customer } from 'src/Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private customerService:CustomerService) { }

  userId:string;
  userName:string;
  password:string;
  address:string;
  zipcode:string;
  email:string;
  mobile:string;
  errorMsg:string;
  successMsg:string;

  ngOnInit(): void {
    document.getElementById("errorMsg").style.display="none"
    document.getElementById("successMsg").style.display="none"
  }

  registerCustomer(){
    this.userId=undefined;
    var customer = new Customer(this.userId,this.userName,this.address,this.zipcode,this.email,this.mobile)
    this.customerService.addCustomer(customer).pipe(catchError((error : HttpErrorResponse) =>{
      this.errorMsg=error.error.text
      document.getElementById("errorMsg").style.display="block"
      document.getElementById("successMsg").style.display="none"
      return throwError(error)
    })).subscribe(data =>{
      console.log(data);
      this.successMsg="Registered Successfully [ USER ID : "+data.userId+" ]"
      document.getElementById("errorMsg").style.display="none"
      document.getElementById("successMsg").style.display="block"
    });
  }
}
