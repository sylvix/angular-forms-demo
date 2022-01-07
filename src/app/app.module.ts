import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ValidatePasswordDirective } from './validate-password.directive';
import { ValidateIdenticalDirective } from './validate-identical.directive';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';

const ROUTES = [
  {path: '', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ValidatePasswordDirective,
    ValidateIdenticalDirective,
    ProfileComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
