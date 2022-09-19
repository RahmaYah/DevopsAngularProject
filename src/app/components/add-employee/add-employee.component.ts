import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee=new Employee() ;
  submitted = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  saveEmployee(emp:Employee): void {
   /* const data = {
      nom: this.employee.nom,
      prenom: this.employee.prenom
    };*/
    console.log(emp);
    this.employeeService.create(emp)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

}
