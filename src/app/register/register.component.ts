import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder, MinLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../service/Model/user.model';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  text:string ="helllo...."

  errorMessage :String;
  
  registerForm:FormGroup;

  constructor(private service : EmployeeService, private router : Router, private formbuild:FormBuilder) { 
    
  }


  ngOnInit() {
    this.init();

  }
  get username(){
    return this.registerForm.get('username')
  }
  get firstname(){
    return this.registerForm.get('username')
  }
  init(){
    this.registerForm = this.formbuild.group({
      username :["" , Validators.required],
      firstname : ["" , Validators.required],
      imageurl : ["", Validators.required],
      lastname : ["" , Validators.required],
      department : ["" , Validators.required],
      grade : ["" , Validators.required],
      maritalstatus : ["" , Validators.required],
      password : ["" , Validators.required],
      password2 : ["" , Validators.required],
      designation:["" , Validators.required]
    }, {validator: this.checkPasswords })
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  let pass = group.controls.password.value;
  let confirmPass = group.controls.password2.value;
  return pass === confirmPass ? null : { notSame: true, }     
}
  
register(){
    this.service.createUser(this.registerForm.value).subscribe(users=>{
       console.log(users.message)
        this.registerForm.reset();
        this.router.navigate(['/emplogin']);
      
    },(err) => {
     console.log(err.message);
     this.errorMessage = err.error.message;
      // if(err.error.msg){
      //   this.errorMessage = err.error.msg[0].message;
      // }
      // if(err.error.errorMessage){
      //   this.errorMessage = err.error.errorMessage;
      //   console.log(this.errorMessage = err.error.errorMessage)
      // }
    })
  }
}


