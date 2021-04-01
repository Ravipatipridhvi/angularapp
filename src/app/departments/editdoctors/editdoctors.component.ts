import { Component, OnInit } from '@angular/core';
import {Departmentmodel} from '../departmentmodel';
import {DepartmentserviceService} from '../departmentservice.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Doctors} from '../doctors';
import {DoctorsService} from '../doctors.service';

@Component({
  selector: 'app-editdoctors',
  templateUrl: './editdoctors.component.html',
  styleUrls: ['./editdoctors.component.css']
})
export class EditdoctorsComponent implements OnInit {
  doctors: Doctors = new Doctors();
  constructor(private doctorsService: DoctorsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params.id;
      const obs = this.doctorsService.getDoctors(id);
      obs.subscribe(beRes => {
        this.doctors = beRes;
      });
    });
  }

  onEditeDept() {
    const obs = this.doctorsService.editDoctors(this.doctors);
    obs.subscribe(beRes => {
      this.router.navigate(['/departments/doctors']);
    });
  }

  onSaveDept() {
    const obs = this.doctorsService.editDoctors(this.doctors);
    obs.subscribe(beRes => {
      this.router.navigate(['/departments/doctors']);
    });
  }
  }

