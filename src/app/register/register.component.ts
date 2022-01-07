import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @ViewChild('f') userForm!: NgForm;

  onSubmit() {
    console.log(this.userForm.value);
    console.log(this.userForm);
  }

  resetGender() {
    this.userForm.form.patchValue({gender: null})
  }
}
