import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {Route, RouterModule} from '@angular/router';

const routes: Route[] = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'form', component: FormComponent},
  {path: 'form/:id', component: FormComponent},
  {path: 'auth/:operation', component: LoginComponent },
  {path: 'profile', component: ProfileComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
