import { Component, OnInit } from '@angular/core';
import { ConnToWebAPIService, User } from 'mod03-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(private connToAPI : ConnToWebAPIService) {    
  }
  user: Observable<User> | undefined;
  GetUser() {
    this.user = this.connToAPI.GetUser(101); 
  }


  ngOnInit(): void {
  }

}
