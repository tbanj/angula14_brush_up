import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/Material-Module';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  /* 
  since the login component is standalone we don't need to
  import it at the app.module.ts file of the import section
  
  But if it's not standalone we need to import it into
    app.module.ts file of the import section
  */
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService, private route: Router ) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  respData: any;

  proceedLogin(loginData: any): void {
    console.warn(loginData.valid);
    console.warn('proceedLogin', loginData.value);
    if (loginData.valid) {
      this.service.proceedLogin(loginData.value).subscribe((item)=>{
        this.respData = item;
        console.warn('server data', this.respData);
        if (this?.respData != null) {
          console.warn('server data', this.respData);
            localStorage.setItem('token', this.respData?.data?.token);
            this.route.navigate(['home']);
        }
        // else {
        //   // console.warn('error', this.respData);
        //   // const {message} = this.respData?.error;
        //     alert("failed");
        // }
        
      }, (error) => {
        // console.log(error.response);
        console.log('data', error.error.error.message);
        alert(error.error.error.message);
      })
    }
  }


  registerUser(): void {
    this.route.navigate(['access/register']);
  }
}
