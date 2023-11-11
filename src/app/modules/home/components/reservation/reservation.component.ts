import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      time: ['11:11 am', [Validators.required]],
      location: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
    });
  }

  submit(): void {
    console.log(this.userInfoForm.value);
    console.log(this.pickupForm.value);
  }
}
