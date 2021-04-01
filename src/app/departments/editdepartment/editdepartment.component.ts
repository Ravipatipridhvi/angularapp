import { Component, OnInit } from '@angular/core';
import {Departmentmodel} from '../departmentmodel';
import {DepartmentserviceService} from '../departmentservice.service';
import {ActivatedRoute, Router} from '@angular/router';
import {placeholdersToParams} from '@angular/compiler/src/render3/view/i18n/util';
import {DoctorsService} from '../doctors.service';

@Component({
  selector: 'app-editdepartment',
  templateUrl: './editdepartment.component.html',
  styleUrls: ['./editdepartment.component.css']
})
export class EditdepartmentComponent implements OnInit {

    deptModel: Departmentmodel = new Departmentmodel();
  constructor(private deptService: DepartmentserviceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        const id = +params.id;
        const obs = this.deptService.getDepartment(id);
        obs.subscribe(beRes => {
          this.deptModel = beRes;
        });
    });
  }

  onEditeDept() {
    const obs = this.deptService.editDepartment(this.deptModel);
    obs.subscribe(beRes => {
      this.router.navigate(['/departments/departlist']);
    });
  }
}
