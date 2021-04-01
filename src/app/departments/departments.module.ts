import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartlistComponent } from './departlist/departlist.component';
import { DepartbaseComponent } from './departbase/departbase.component';
import { GeneralmedicineComponent } from './generalmedicine/generalmedicine.component';
import { PaediatrictsComponent } from './paediatricts/paediatricts.component';
import { CardiologyComponent } from './cardiology/cardiology.component';
import { OrthopedicsComponent } from './orthopedics/orthopedics.component';
import {RouterModule, Routes} from '@angular/router';
import { LoginlistComponent} from '../login/loginlist/loginlist.component';
import {DepartmentserviceService} from './departmentservice.service';
// @ts-ignore
import { AdddepartmentComponent } from './adddepartment/adddepartment.component';
import {FormsModule} from '@angular/forms';
import { EditdepartmentComponent } from './editdepartment/editdepartment.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AdddoctorsComponent } from './adddoctors/adddoctors.component';
import { EditdoctorsComponent } from './editdoctors/editdoctors.component';
// @ts-ignore
const routes: Routes = [
  {path: 'departments', component: DepartbaseComponent,
children: [
  { path: 'departlist' , component: DepartlistComponent},
  { path: 'generalmedicine' , component: GeneralmedicineComponent},
  { path: 'paediatricts' , component: PaediatrictsComponent},
  { path: 'cardiology' , component: CardiologyComponent},
  { path: 'orthopedics' , component: OrthopedicsComponent},
  { path: 'adddepartment' , component: AdddepartmentComponent},
  { path: 'editdepartment/:id' , component: EditdepartmentComponent},
  { path: 'doctors' , component: DoctorsComponent},
  { path: 'adddoctors' , component: AdddoctorsComponent},
  { path: 'editdoctors/:id' , component: EditdoctorsComponent},

]
  }
 ];
@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [DepartlistComponent, DepartbaseComponent, GeneralmedicineComponent, PaediatrictsComponent, CardiologyComponent, OrthopedicsComponent,  AdddepartmentComponent, EditdepartmentComponent, DoctorsComponent, AdddoctorsComponent, EditdoctorsComponent],
  imports: [
    CommonModule, RouterModule.forRoot(routes), FormsModule
  ],
  providers: [DepartmentserviceService]
})
export class DepartmentsModule { }
