import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private cookieService : CookieService) { }

  SetToken(token){
    this.cookieService.set('auth_token', token);
  }
  GetToken(){
    return this.cookieService.get('auth_token');
  }
  DeleteToken(){
    this.cookieService.delete('auth_token');
  }

}


