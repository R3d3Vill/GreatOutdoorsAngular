import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CustomerService } from '../customer.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router,private customerService:CustomerService) { }

  userName:string;
  password:string;
  errorMsg:string;
  ngOnInit(): void {
    document.getElementById("errorMsg").style.display="none"
  }

  authenticate(){
    this.loginService.authenticate(this.userName,this.password).pipe(catchError((error:HttpErrorResponse) =>{
      this.errorMsg="Invaid Credentials!.."
      document.getElementById("errorMsg").style.display="block"
      return throwError(error);
    })).subscribe(data =>{
      console.log(data);
      if(data.role=="ROLE_CUSTOMER")
      {
        this.customerService.userId=data.userId;
        console.log(this.customerService.userId);
        this.router.navigateByUrl("home")
      }
    })
  }

}
