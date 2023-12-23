import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HomeService } from '../../services/home.service';
import { ReservationPayload } from '../../models/reservation-payload';

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

  travelTypes: any[] = [
    {
      id: 'hourly',
      name: 'Hourly',
    },
    {
      id: 'pickup-dropoff',
      name: 'Pick up/Drop off',
    },
  ];

  constructor(private fb: FormBuilder, private homeService: HomeService) {}

  ngOnInit(): void {
    this.initUserInfoForm();
    this.initPickupForm();
  }

  initUserInfoForm(): void {
    this.userInfoForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required]],
    });
  }

  initPickupForm(): void {
    this.pickupForm = this.fb.group({
      categoryType: ['', Validators.required],
      travelDate: ['', [Validators.required]],
      travelTime: ['11:11 AM', [Validators.required]],
      pickupLocation: [''],
      differentDropoff: [false],
      dropoffLocation: [''],
      travelType: ['', [Validators.required]],
      hours: [],
      notes: [''],
      numberOfPassengers: [1, [Validators.required]],
    });
  }

  getControl(formGroup: FormGroup, control: string): string {
    return formGroup.get(control)?.value;
  }

  hourlyValueChanges(id: string): void {
    debugger;
    if (id === 'hourly') {
      this.pickupForm.get('hours')?.patchValue('');
      this.pickupForm.get('hours')?.setValidators([Validators.required]);

      this.pickupForm.get('pickupLocation')?.patchValue('');
      this.pickupForm
        .get('pickupLocation')
        ?.removeValidators([Validators.required]);
    } else {
      this.pickupForm.get('hours')?.patchValue('');
      this.pickupForm.get('hours')?.setValidators(null);

      this.pickupForm.get('pickupLocation')?.patchValue('');
      this.pickupForm
        .get('pickupLocation')
        ?.setValidators([Validators.required]);
    }
    this.pickupForm.get('hours')?.updateValueAndValidity();
    this.pickupForm.get('pickupLocation')?.updateValueAndValidity();
  }

  differentLocationToggle(checked: boolean) {
    this.pickupForm.get('dropoffLocation')?.patchValue('');
    if (checked) {
      this.pickupForm
        .get('dropoffLocation')
        ?.setValidators([Validators.required]);
    } else {
      this.pickupForm.get('dropoffLocation')?.setValidators(null);
    }
    this.pickupForm.get('dropoffLocation')?.updateValueAndValidity();
  }

  submit(): void {
    console.log(this.userInfoForm.value);
    console.log(this.pickupForm);

    const reservationPayload: ReservationPayload = {
      emailType: 'Reservation',
      reservationDto: {
        travelInfo: this.pickupForm.value,
        personalInfo: this.userInfoForm.value,
      },
    };
    this.homeService.reserve(reservationPayload).subscribe((res) => {
      console.log(res);
    });
  }
}
