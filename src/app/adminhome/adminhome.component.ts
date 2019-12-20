import { User } from './../service/Model/user.model';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';
 
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  users:any[] = [];
  edit:any[] = [];


constructor( private employeeService : EmployeeService,
   private router:Router ){
    this.employeeService.empdetails().subscribe(data=>{
      console.log(data);
      this.users=data;
 })
}

deleteData(post){
  this.employeeService.deleteUser(post).subscribe(data => {
    let index = this.users.indexOf(post);
    this.users.splice(index, 1);
  })
}

editData(post) {
  this.employeeService.getEmp(post).subscribe(data => {
  console.log(data);
  })
}



  ngOnInit() {
    this.resetForm();
    this.refreshuserlist()
  }

  resetForm(form? : NgForm){
    if(form)
    form.reset();
    this.employeeService.selectedUser = {
      _id : "",
      firstname : "",
      lastname: "",
       department: "",
       grade: "",
       designation: ""
    }
  }
  onSubmit(form: NgForm ) {
  
      this.employeeService.updateUser(form.value).subscribe(res => {
        this.resetForm(form);
        this.refreshuserlist();
        alert('updated successfully');
      })
    
  }
  refreshuserlist(){
    this.employeeService.empdetails().subscribe(res => {
      this.employeeService.users = res as User[];
    })
  }
  onEdit(u : User){
    this.employeeService.selectedUser = u;
  }

}
