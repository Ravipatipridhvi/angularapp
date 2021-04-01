import { Component, OnInit } from '@angular/core';
import {Departmentmodel} from '../departmentmodel';
import {Doctors} from '../doctors';
import {DepartmentserviceService} from '../departmentservice.service';
import {Router} from '@angular/router';
import {DoctorsService} from '../doctors.service';

@Component({
  selector: 'app-adddoctors',
  templateUrl: './adddoctors.component.html',
  styleUrls: ['./adddoctors.component.css']
})
export class AdddoctorsComponent implements OnInit {
  doctors: Doctors = new Doctors();
  // @ts-ignore
  constructor(private doctorsService: DoctorsService , private router: Router) { }

  ngOnInit() {
  }
  onSaveDept() {
    const obs = this.doctorsService.addDoctors(this.doctors);
    obs.subscribe(beRes => {
      this.router.navigate(['/departments/doctors']);
    });
  }
}


