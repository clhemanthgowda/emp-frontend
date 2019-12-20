import { TokenService } from './../service/token.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  errorMessage :String;
  loginForm:FormGroup;

  constructor(private service : EmployeeService,
     private router : Router,
      private formbuild:FormBuilder, private tokenService : TokenService) { 
    
  }


  ngOnInit() {
    this.init();

  }
  
  init(){
    this.loginForm = this.formbuild.group({
      username :["" , Validators.required],
      password : ["" , Validators.required]
    
    })
  }
  
  login(){
    this.service.loginAdmin(this.loginForm.value).subscribe(users=>{
        console.log(users);
        this.tokenService.SetToken(users.token);
        this.loginForm.reset();
        this.router.navigate(['adminhome']);
      
    }, (err) => {
      if(err.error.msg){
        this.errorMessage = err.error.msg[0].message;
      }
      if(err.error.msg){
        this.errorMessage = err.error.message;
      }
    })
  }


}
