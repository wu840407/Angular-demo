import { Component, OnInit } from '@angular/core';
import { Cities, CityBy7Days } from '../service/city-by7-days';
import { CwbodService } from '../service/cwbod.service';

@Component({
  selector: 'app-weekly-weather',
  templateUrl: './weekly-weather.component.html',
  styles: [
  ]
})
export class WeeklyWeatherComponent implements OnInit {
  weatherData: CityBy7Days[] | null =null;
  cities = Cities;
  searchCity: string = "";
  constructor(private service: CwbodService) {

   }


  searchChanged(city:string) {
   this.service.get7Days(city).subscribe(
    result=> this.weatherData=result
   );
  }


  ngOnInit(): void {
  }

}
