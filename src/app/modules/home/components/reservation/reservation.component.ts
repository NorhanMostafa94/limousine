import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {
  userInfoForm!: FormGroup;
  pickupForm!: FormGroup;

  states: any[] = [
    {
      id: '1',
      name: 'USA',
    },
  ];

  cities: any[] = [
    {
      id: '1',
      name: 'USA',
    },
  ];

  serviceTypes: any[] = [
    {
      id: '1',
      name: 'Point-to-Point',
    },
    {
      id: '2',
      name: 'From Airport',
    },
    {
      id: '3',
      name: 'To Airport',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initUserInfoForm();
    this.initPickupForm();
  }

  initUserInfoForm(): void {
    this.userInfoForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required]],
    });
  }

  initPickupForm(): void {
    this.pickupForm = this.fb.group({
      serviceType: ['', Validators.required],
      date: ['', [Validators.required]],
      time: ['11:11 AM', [Validators.required]],
      location: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      differentDropoff: [false],
      dropoffLocation: [''],
      dropoffState: [''],
      dropoffCity: [''],
      numberOfPassengers: [1, [Validators.required]],
    });
  }

  getControl(formGroup: FormGroup, control: string): string {
    return formGroup.get(control)?.value;
  }

  differentLocationToggle(checked: boolean) {
    if (checked) {
      this.pickupForm
        .get('dropoffLocation')
        ?.setValidators([Validators.required]);
      this.pickupForm.get('dropoffState')?.setValidators([Validators.required]);
      this.pickupForm.get('dropoffCity')?.setValidators([Validators.required]);
    } else {
      this.pickupForm.get('dropoffLocation')?.setValidators(null);
      this.pickupForm.get('dropoffState')?.setValidators(null);
      this.pickupForm.get('dropoffCity')?.setValidators(null);

      this.pickupForm.get('dropoffLocation')?.patchValue('');
      this.pickupForm.get('dropoffState')?.patchValue('');
      this.pickupForm.get('dropoffCity')?.patchValue('');
    }
    this.pickupForm.updateValueAndValidity();
  }

  submit(): void {
    console.log(this.userInfoForm.value);
    console.log(this.pickupForm.value);
  }
}
