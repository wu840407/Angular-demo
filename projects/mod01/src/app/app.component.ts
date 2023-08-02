import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'mod01';
  mymail = ""
  send(event : string){
    alert(`傳送email: ${event}`);
  }
}
