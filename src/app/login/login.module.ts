import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginlistComponent } from './loginlist/loginlist.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [LoginlistComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LoginModule { }
