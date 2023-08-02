import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStep, MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-stepper-page',
  templateUrl: './stepper-page.component.html',
  styles: [
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {
        displayDefaultIndicatorType: false,
        showError: true
      }
    }
  ]
})
export class StepperPageComponent implements OnInit {
  @ViewChild(MatStepper) stepper: MatStepper | any;

  signUpForm: FormGroup;

  constructor() {
    this.signUpForm = new FormGroup({
      "userName": new FormControl('', Validators.required),
      "phone": new FormControl('', Validators.required),
      "password": new FormControl('', Validators.required),
    });

  }

  ngOnInit(): void {
  }
  SetNext(){
    this.stepper.selected.completed = true;
    this.stepper.selected.editable =false;
    this.stepper.next();
  }
  checkPassword(confirmPWDValue: string) {
    let pwd = this.signUpForm.get("password")?.value;
    if (pwd === confirmPWDValue) {
      this.stepper.selected.hasError=false;
      this.SetNext();
      this.SetFinally();      
    }
    else{
      this.stepper.selected.hasError=true;
    }
    console.log(`password=${pwd}, confirmPWD=${confirmPWDValue}`)
  }

  SetFinally(){
    this.stepper.steps.forEach( (step: MatStep) => {
      step.editable=false;
    });
  }
  stepperReset(){
    this.stepper.steps.forEach( (step: MatStep) => {
      step.editable=true;
    });
    this.stepper.reset();
  }

}
