import { HeaderComponent } from './header/header.component';
import { AuthorizedGuard } from './service/authorized.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component,  } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomebodyComponent } from './homebody/homebody.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EmploginComponent } from './emplogin/emplogin.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { EmphomeComponent } from './emphome/emphome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ContactComponent } from './contact/contact.component';


import { from } from 'rxjs';
import { FilterPipe } from './filter.pipe';
import { CookieService } from 'ngx-cookie-service';
import { UpdateComponent } from './update/update.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomebodyComponent,
    AdminloginComponent,
    EmploginComponent,
    AboutComponent,
    RegisterComponent,
    EmphomeComponent,
    AdminhomeComponent,
    ContactComponent,
    PagenotfoundComponent,
    FilterPipe,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : '' , component:HomebodyComponent},
      {path : 'adminlogin',component:AdminloginComponent},
      {path : 'homebody', component:HomebodyComponent},
      {path : 'emplogin' , component:EmploginComponent},
      {path : 'register' , component:RegisterComponent},
      {path : 'about', component:AboutComponent},
      {path : 'contact', component:ContactComponent},
      {path : 'update', component : UpdateComponent,  canActivate :[AuthorizedGuard]},
      {path : 'emphome' , component:EmphomeComponent, canActivate :[AuthorizedGuard]},
      {path : 'adminhome' , component:AdminhomeComponent,canActivate :[AuthorizedGuard]},
      {path : '**' , component:PagenotfoundComponent}
    ])
  ],
  providers: [CookieService, EmploginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
