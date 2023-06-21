import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';


import * as alertify from 'alertifyjs';

 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  // imports: [CommonModule, MaterialModule, FormsModule],
  styleUrls: ['./register.component.css']
}) 
export class RegisterComponent implements OnInit {

  constructor(private route: Router, private service: UserService) { }

  ngOnInit(): void {
  }

  respData: any;

  loginUser(): void {
    this.route.navigate(['login']);
  }

  reactiveForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    password: new FormControl('', Validators.required),
  })

  addStaticData(data: any): void {
    return {
      ...data,
      "dob": "2020-08-24", 
      "phone": "08074551280",
    }
  };

  

  // saveUser() {
  //   console.warn('saveUser', this.reactiveForm.value);
  //   if (this.reactiveForm.valid) { 
  //     console.warn('this.reactiveForm.value', this.reactiveForm.value);
      
  //       const serverData: any = this.addStaticData(this.reactiveForm.value);
  //       this.service.initiateRegister(serverData).subscribe({
  //         next: (data: any) => {
  //           console.warn('next-data', data);
  //           alert('check your mail to verify use and use postman')
  //           this.route.navigate(['login']);
  //         },
  //         error: (error: any) =>{},
  //         complete: () => console.info('complete') 
  //       }) 
  //   }

    
  // }

    saveUser() {
      if(this.reactiveForm.valid) {
        const serverData: any = this.addStaticData(this.reactiveForm.value);
        this.service.initiateRegister(serverData).subscribe(
        {next: (data: any) => {
                    console.warn('next-data', data);
                    alertify.success("check your mail to verify use and use postman")
                    this.route.navigate(['login']);
                  },
                  error: (error: any) =>{ 
                    alertify.error(error?.error?.error?.message)
                    console.error('error', error?.error?.error?.message);
                  },
                  complete: () => console.info('complete') 
                }
        );
      }
    }


}