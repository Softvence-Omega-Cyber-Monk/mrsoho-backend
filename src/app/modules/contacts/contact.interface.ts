export interface IContact {
  name: string;
  email: string;
  phone?: string;
  business?: string;
  address?: string;
  subject?: string;
  message: string;
  howDidYouHearAboutUs?: string;
  createdAt?: Date;
}
