import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login } from 'data-type';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public data:any
  public password:any
  constructor(private router:Router,private auth:AuthService,private http:HttpClient){}
  ngOnInit(): void {
   
  }
  onlogin(){
     const loginData: login = {
      userName: this.data,
      password: this.password
    };
    this.auth.userLogin(loginData).subscribe((response)=>{
      if(response == true){
        this.router.navigate(['\home']);
      }else{
        alert("Login failed");
      }
    })
  }
  


}
