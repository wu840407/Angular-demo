import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: [
  ]
})
export class StudentComponent implements OnInit {

  constructor(private router: Router) { }
  passDataByResolve() {
    this.router.navigate(['/student/subject', '101']);
  }


  ngOnInit(): void {
  }

}
