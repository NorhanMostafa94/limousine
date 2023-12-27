import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactUsPayload } from '../../models/contact-us-payload';
import { HomeService } from '../../services/home.service';
import { SnackbarService } from 'src/app/shared/components/snackbar/snackbar.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  contactUsForm!: FormGroup;

  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private homeService: HomeService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.initContactUsForm();
  }

  initContactUsForm(): void {
    this.contactUsForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }

  submit(): void {
    const payload: ContactUsPayload = {
      emailType: 'Contact With Us',
      contactUsDto: this.contactUsForm.value,
    };

    this.loading = true;
    this.homeService.contactUs(payload).subscribe(
      (res) => {
        this.loading = false;
        this.contactUsForm.reset();
        this.snackbarService.openSnackBarSuccess(
          'Thank you for your email. We received your Contact info Our Team will contact with you soon'
        );
      },
      (err) => {
        this.loading = false;
        this.snackbarService.openSnackBarFailure(
          'we cannot receive your information now kindly contact with us on WhatsApp'
        );
      }
    );
  }
}
