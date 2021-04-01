import { Component, OnInit } from '@angular/core';
import {Departmentmodel} from '../departmentmodel';
import {DepartmentserviceService} from '../departmentservice.service';
import {Router} from '@angular/router';
import {Doctors} from '../doctors';
import {DoctorsService} from '../doctors.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

    doctorsList: Doctors[] = [];

    constructor(private doctorsService: DoctorsService, private router: Router) {
    }

    ngOnInit() {
        const obs = this.doctorsService.getDoctorsDetails();
        obs.subscribe(beRes => {
            this.doctorsList = beRes;
        });
    }

    onAddDoctors() {
        this.router.navigate(['/departments/adddoctors']);
    }

    onDelDoctors(id) {
        const obs = this.doctorsService.delDoctors(id);
        obs.subscribe(beRes => {
            this.doctorsList = beRes;
        });
    }

    onEditDoctors(id: number) {
        this.router.navigate(['/departments/editdoctors/' + id]);
    }

    doctors() {
        this.router.navigate(['/departments/doctors']);
    }
}
