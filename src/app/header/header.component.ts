
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { from } from 'rxjs';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  auth:any;
  token : any;
  constructor( private tokenService : TokenService, 
    private router : Router, 
    private service : EmployeeService) { }
  
  logout(){
    this.tokenService.DeleteToken();
    this.router.navigate(['/homebody'])
  }

  ngOnInit() {
  }

  get isLoggedIn() {
    return this.service.isLoggedIn();
  }

}
