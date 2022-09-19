import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

const baseUrl = 'http://192.168.107.204:9901/employeeProject/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(baseUrl);
  }

  get(id: any): Observable<Employee> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data:Employee): Observable<Employee> {
    return this.http.post(baseUrl, data);
  }

  /*update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }*/

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }




}
