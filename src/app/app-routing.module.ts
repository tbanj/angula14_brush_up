import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';
import { AuthGuard } from './Guard/auth.guard';
import { UserComponent } from './user/user.component';

// routes use
const routes: Routes = [
  // without redirect
  // {path: "home", component: HomeComponent},

  // with redirect
  {path: "home", component: HomeComponent,canActivate:[AuthGuard]},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to

  {path: "about", component: AboutComponent, canActivate:[AuthGuard]},
  {path: "user", component: UserComponent, canActivate:[AuthGuard]},
  {path: "contact", component: ContactComponent, children: [
    {path: "add", component: AddcontactComponent},
    {path: "edit/:id", component: AddcontactComponent}
  ], canActivate:[AuthGuard]},
  // using lazy loading to load access Module Routes
  {path: "access", loadChildren: ()=>import('./access/access.module').then(opt=>opt.AccessModule)},
  {path: "login", loadComponent: ()=> import('./login/login.component').then(opt=>opt.LoginComponent)},
  {path: "**", component:StatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
