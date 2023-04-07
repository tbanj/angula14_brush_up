import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/Material-Module';

@Component({
  selector: 'app-login',
  standalone: true,
  /* 
  since the login component is standalone we don't need to
  import it at the app.module.ts file of the import section
  
  But if it's not standalone we need to import it into
    app.module.ts file of the import section
  */
  imports: [CommonModule, MaterialModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
