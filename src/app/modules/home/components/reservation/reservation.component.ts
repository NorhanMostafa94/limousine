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

  categoryTypes: any[] = [
    {
      id: '1',
      name: 'Sedan',
    },
    {
      id: '2',
      name: 'SUV',
    },
    {
      id: '3',
      name: 'Luxury',
    },
  ];

  hourlyTypes: any[] = [
    {
      id: 'hourly',
      name: 'Hourly',
    },
    {
      id: 'pickup-dropoff',
      name: 'Pick up/Drop off',
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
      categoryType: ['', Validators.required],
      date: ['', [Validators.required]],
      time: ['11:11 AM', [Validators.required]],
      location: ['', [Validators.required]],
      differentDropoff: [false],
      dropoffLocation: [''],
      hourlyType: ['', [Validators.required]],
      hours: [1],
      notes: [''],
      numberOfPassengers: [1, [Validators.required]],
    });
  }

  getControl(formGroup: FormGroup, control: string): string {
    return formGroup.get(control)?.value;
  }

  hourlyValueChanges(id: string): void {
    if (id === 'hourly') {
      this.pickupForm.get('hours')?.setValidators([Validators.required]);
      this.pickupForm.get('location')?.setValidators(null);
      this.pickupForm.get('state')?.setValidators(null);
      this.pickupForm.get('city')?.setValidators(null);
    } else {
      this.pickupForm.get('hourly')?.setValidators(null);
      this.pickupForm.get('location')?.setValidators([Validators.required]);
      this.pickupForm.get('state')?.setValidators([Validators.required]);
      this.pickupForm.get('city')?.setValidators([Validators.required]);
    }
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
