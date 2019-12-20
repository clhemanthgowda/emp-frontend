import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { post } from 'selenium-webdriver/http';
import { User } from './Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedUser: User;
  users: User[]
  
    base_url = "http://localhost:3000";
    user:any[]=[];
    constructor(private http : HttpClient, private tokenService : TokenService) { }

    loginUser(body):Observable<any>{
      return this.http.post<any>(`${this.base_url}/register/emplogin`, body);
    }
    loginAdmin(body):Observable<any>{
      return this.http.post<any>(`${this.base_url}/login/adminlogin`, body);
    }
    empdetails():Observable<any>{
      return this.http.get<any>(`${this.base_url}/details`);
    }
    updateUser(body){
      return this.http.put<any>(`${this.base_url}/details/${body._id}`,body)
    }
    getEmp(body):Observable<any>{
      return this.http.get<any>(`${this.base_url}/details/${body._id}`,body);
    }
    
    deleteUser(body){
      return this.http.delete<any>(`${this.base_url}/details/${body._id}`,body)
    }

    createUser(body):Observable<any>{
      return this.http.post<any>(`${this.base_url}/register`, body);
    }

    isLoggedIn() {
      if(this.tokenService.GetToken()){
        return true;
      }
      return false;
    }
}
