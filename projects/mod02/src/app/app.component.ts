import { Component } from '@angular/core';
import { ActivationEnd, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'mod02';
  showLoading = true;
  showError = false;
  constructor(private router: Router) {

    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.showLoading = true;
        this.showError = false;
        console.log(event.url);
      }
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError)
        this.showLoading = false;
      if (event instanceof NavigationError)
        this.showError = true;
      if (event instanceof ActivationEnd)
      {
        console.log("ActivationEnd");
        console.log(event.snapshot.component?.name);
      }
        
    });
  }

}
