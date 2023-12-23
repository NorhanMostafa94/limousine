import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactUsPayload } from '../../models/contact-us-payload';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  contactUsForm!: FormGroup;

  constructor(private fb: FormBuilder, private homeService: HomeService) {}

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

    this.homeService.contactUs(payload).subscribe((res) => {
      console.log(res);
    });
  }
}
