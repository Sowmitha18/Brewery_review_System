import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/authservice.service';
import { HttpClient } from '@angular/common/http';
import { signup } from 'data-type';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  data: signup = {
    userName: "",
    password: "",
    email: "",
    mobile:""
  };
  confirmPassword = "";
  constructor(private router:Router,private auth:AuthService,private http: HttpClient){
    
  }
  ngOnInit(): void {
  }
  onSignup():void{
    if(this.data.password != this.confirmPassword){
      alert("Confirm password should be same");
    }else{
      this.auth.usersignUp(this.data).subscribe((response)=>{
        if(response == true){
          this.router.navigate(['\home']);
        }else{
          alert("User already exists");
        }
      })
    }

  }
  

}
