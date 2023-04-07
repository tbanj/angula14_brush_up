import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  headerName= "Welcome to Maja World";
  salary =1000;
  salaryPercent =0.35;
  /* 
  pipes is use with interpolation for data  formatting in .html file
  pipes symbol is |
  e.g lowercase, uppercase
  */
  ngOnInit(): void {
  }

  FunctionClick(name: string): void {
    alert(`Testing function ${name}`);
  }

}
