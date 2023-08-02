import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styles: [
  ]
})
export class AbcComponent implements OnInit {

  data: any;
  constructor(private router: Router) {
     if (this.router.getCurrentNavigation()?.extras.state) {
       this.data = this.router.getCurrentNavigation()?.extras.state?.['data'];
     }
   }
 

  ngOnInit(): void {
  }

}
