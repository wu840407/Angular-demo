import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styles: [
  ]
})
export class Demo4Component implements OnInit {
  time: any;
  rptTime:any;
  readonly rootUrl = "https://mod08api.azurewebsites.net";
 start117() {
    //this.time= this.http.get(`${this.rootUrl}/WeatherForecast/Get117`, { responseType: 'text' })

    this.rptTime= interval(1000).subscribe({
      next: () =>
     this.time= this.http.get(`${this.rootUrl}/WeatherForecast/Get117`, { responseType: 'text' })
    });

 }
 stop117() { 
  this.rptTime.unsubscribe();
}

  constructor(private http : HttpClient ) { }

  ngOnInit(): void {
  }

}
