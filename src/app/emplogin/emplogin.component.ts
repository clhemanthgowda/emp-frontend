import { TokenService } from './../service/token.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent implements OnInit {

  errorMessage :String;
  loginForm:FormGroup;
  user :any[]=[]


  constructor(
    private service : EmployeeService, 
    private router : Router, 
    private formbuild:FormBuilder,
    private tokenService:TokenService) { 
    
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
    this.service.loginUser(this.loginForm.value).subscribe(users =>{
        console.log(users);
        this.tokenService.SetToken(users.token);
        this.loginForm.reset();
        this.router.navigate(['emphome']);
      
    }, (err) => {
      console.log(err.message);
      this.errorMessage = err.error.message;
      // if(err.error.msg){

      //   this.errorMessage = err.error.msg[0].message;
      // }
      // if(err.error.msg){
      //   this.errorMessage = err.error.message;
      // }
    })
  }


}
