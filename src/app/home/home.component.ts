import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  headerName= "Welcome to Maja World";
  colorName= "red";
  font="40px"
  salary =1000;
  salaryPercent =0.35;
  isDisabled = true;
  classname = "test-ngclass"
  stylevalue ={"color": "blue", "font-weight": '800'};

  colors= ["red", "green", "yellow", "black"];
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
