import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      'displayName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.profileForm);
  }

  fieldHasError(fieldName: string, errorType: string) {
    const field = this.profileForm.get(fieldName);
    return field && field.touched && field.errors?.[errorType];
  }

  addHobby() {
    const hobbies = <FormArray>this.profileForm.get('hobbies');
    const control = new FormControl(null, Validators.required);
    hobbies.push(control);
  }

  getHobbiesControls() {
    return (<FormArray>this.profileForm.get('hobbies')).controls;
  }
}
