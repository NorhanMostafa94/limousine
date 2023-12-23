import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { ContactUsPayload } from '../models/contact-us-payload';
import { ReservationPayload } from '../models/reservation-payload';

@Injectable({
  providedIn: 'root',
})
export class HomeService extends HttpService {
  constructor(private http: HttpClient) {
    super(http);
  }

  reserve(reservationPayload: ReservationPayload): Observable<any> {
    return this.post('Email/Send', reservationPayload);
  }

  contactUs(ContactUsPayload: ContactUsPayload): Observable<any> {
    return this.post('Email/Send', ContactUsPayload);
  }
}
