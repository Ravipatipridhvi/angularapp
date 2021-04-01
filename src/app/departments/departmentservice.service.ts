import { Injectable } from '@angular/core';
import {Departmentmodel} from './departmentmodel';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentserviceService {

  constructor(private htttpClient: HttpClient) { }
  getDepartmentDetails(){
    const obs = this.htttpClient.get<Departmentmodel[]>('/api/departments/');
    return obs;
}
  addDepartment(departmentModel){
    const obs = this.htttpClient.post<Departmentmodel[]>('/api/departments/', departmentModel);
    return obs;
  }

  delDepartmentDetails(id) {
    // @ts-ignore
    const obs = this.htttpClient.delete<Departmentmodel[]>('/api/departments/' + id);
    return obs;
   }
  getDepartment(id) {
    // @ts-ignore
    const obs = this.htttpClient.get<Departmentmodel>('/api/departments/' + id);
    return obs;
  }


  editDepartment(deptModel: Departmentmodel) {
    const obs = this.htttpClient.put<Departmentmodel[]>('/api/departments/', deptModel);
    return obs;
  }
}
