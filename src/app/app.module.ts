import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginModule} from './login/login.module';
import {RouterModule, Routes} from '@angular/router';
import {LoginlistComponent} from './login/loginlist/loginlist.component';
import {DepartmentsModule} from './departments/departments.module';
import {HttpClientModule} from '@angular/common/http';


const routes: Routes = [
{ path: '', component: LoginlistComponent },
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, LoginModule, RouterModule.forRoot(routes), DepartmentsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
