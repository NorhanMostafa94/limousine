export interface ContactUsPayload {
  emailType: string;
  contactUsDto: {
    name: string;
    email: string;
    message: string;
  };
}
