import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Doctors} from './doctors';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private htttpClient: HttpClient) { }
  getDoctorsDetails() {
    return this.htttpClient.get<Doctors[]>('/api/doctors/');
  }
  addDoctors(doctors) {
    return this.htttpClient.post<Doctors[]>('/api/doctors/', doctors);
  }

  delDoctors(id) {
    // @ts-ignore
    return this.htttpClient.delete<Doctors[]>('/api/doctors/' + id);
  }
  getDoctors(id) {
    // @ts-ignore
    return this.htttpClient.get<Doctors>('/api/doctors/' + id);
  }
    editDoctors(doctors: Doctors) {
      return this.htttpClient.put<Doctors[]>('/api/doctors/', doctors);
    }
}

