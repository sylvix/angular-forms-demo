// validate-password.directive.ts

import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Directive } from '@angular/core';

export const passwordValidator = (control: AbstractControl): ValidationErrors | null => {
  // control.value
  const hasLetter = /[a-zA-Z]/.test(control.value);
  const hasNumber = /[0-9]/.test(control.value);

  if (hasNumber && hasLetter) {
    return null;
  }

  return {password: true};
};

@Directive({
  selector: '[appPassword]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ValidatePasswordDirective,
    multi: true
  }]
})
export class ValidatePasswordDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return passwordValidator(control);
  }
}
