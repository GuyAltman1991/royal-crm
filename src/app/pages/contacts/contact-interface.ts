import { Address } from 'src/app/pages/customers-page/customers-interface';
export interface ContactInterface {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt?: Date;
  address?: Address;
  notes?: string;
  birthDay?: Date;
  age?: number;
}
