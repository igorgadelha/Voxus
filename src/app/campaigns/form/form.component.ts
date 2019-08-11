import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
import intlTelInput from 'intl-tel-input';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  state: String = 'inactive';
  buttonLabel: String = 'Experimentar gratuitamente';
  buttonState: boolean = false;
  showMask: boolean = false;
  mask = ['(', /[1-9]/, /\d/,  ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
        name: ['', Validators.required],
        phone: ['', [ Validators.required, Validators.minLength(15) ]],
        email: ['', [ Validators.required, Validators.email ]],
        company: ['', [Validators.required]],
        website: ['', Validators.required],
        budget: ['', Validators.required]
    })
  }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
    this.buttonState = this.buttonState === true ? false : true;
    this.buttonLabel = 'Obrigado!';
  }

  f() {
    console.log (this.form.controls);
    return this.form.controls;
  }

  onCountryChange(event) {
    console.log (event);
  }

  getNumber (event) {
    console.log (event);
  }

  hasError(event) {
    console.log (event);
  }

  onSubmit() {
    this.submitted = true;
    console.log (this.form);
    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
  }

}
