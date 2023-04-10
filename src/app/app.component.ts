import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck  {

  constructor(private route: Router) {

  }
  title = 'angular14';
  isMenuVisible= true;

  ngDoCheck(): void {
    const currentRoute = this.route.url;
    console.warn('currentRoute', currentRoute);
    if(currentRoute === '/login') {
      this.isMenuVisible = false;
    } else {
      this.isMenuVisible = true;
    }
    /* 
    below will let the code throw an error
    throw new Error('Method not implemented');
    */
  }
  
}
