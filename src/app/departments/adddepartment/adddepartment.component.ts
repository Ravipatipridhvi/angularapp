import { Component, OnInit } from '@angular/core';
import {Departmentmodel} from '../departmentmodel';
import {DepartmentserviceService} from '../departmentservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.css']
})
export class AdddepartmentComponent implements OnInit {
   deptModel: Departmentmodel = new Departmentmodel()
  constructor(private deptService: DepartmentserviceService, private router: Router) { }

  ngOnInit() {
  }

  onSaveDept() {
    const obs = this.deptService.addDepartment(this.deptModel);
    obs.subscribe(beRes => {
      this.router.navigate(['/departments/doctors']);
    });
  }
}
