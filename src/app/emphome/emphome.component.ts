import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emphome',
  templateUrl: './emphome.component.html',
  styleUrls: ['./emphome.component.css']
})
export class EmphomeComponent implements OnInit {
 status=true;

 users:any[] = [];

 constructor( private service : EmployeeService,
    private router:Router ){
     this.service.empdetails().subscribe(data=>{
       console.log(data);
       this.users=data;
  })
 }

  ngOnInit() {
  }

}
