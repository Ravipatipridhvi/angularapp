import { Component, OnInit } from '@angular/core';
import {DepartmentserviceService} from '../departmentservice.service';
import {Departmentmodel} from '../departmentmodel';
import {Route, Router} from '@angular/router';
@Component({
  selector: 'app-departlist',
  templateUrl: './departlist.component.html',
  styleUrls: ['./departlist.component.css']
})
export class DepartlistComponent implements OnInit {
  departlist: Departmentmodel[] = []

  constructor(private departservice: DepartmentserviceService, private router: Router) {
  }

  ngOnInit() {
    const obs = this.departservice.getDepartmentDetails();
    obs.subscribe(beRes => {
      this.departlist = beRes;
    });
  }

  onAddDepartment() {
    this.router.navigate(['/departments/adddepartment']);
  }

  onDelDepartment(id) {
    const obs = this.departservice.delDepartmentDetails(id);
    obs.subscribe(beRes => {
      this.departlist = beRes;
    });
  }

    onEditDepartment(id: number) {
        this.router.navigate(['/departments/editdepartment/' + id]);
    }

  doctors() {
    this.router.navigate(['/departments/doctors']);
  }
}
