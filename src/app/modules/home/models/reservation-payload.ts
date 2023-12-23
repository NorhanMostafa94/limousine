export interface ReservationPayload {
  emailType: string;
  reservationDto: {
    travelInfo: {
      categoryType: string;
      travelDate: string;
      travelTime: string;
      travelType: string;
      pickupLocation: string;
      dropoffLocation: string;
      numberOfPassengers: string;
      notes: string;
    };
    personalInfo: {
      firstName: string;
      lastName: string;
      email: string;
      mobileNumber: string;
    };
  };
}
