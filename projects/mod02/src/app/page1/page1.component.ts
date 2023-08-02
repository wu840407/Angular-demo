import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styles: [
  ]
})
export class Page1Component implements OnInit, OnDestroy {
  data: string = "";
  constructor(private router: Router) { }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  ngOnInit(): void {

  }
  open() {

    // this.router.parseUrl("/p1");
    this.router.navigate(["/"]).finally(()=>this.router.navigate(["p1"]));
    
  }
}
