import { Address } from 'src/app/pages/customers/customers-interface';
export interface ContactInterface {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt?: any;
  address: Address;
  notes?: string;
  birthDay?: any;
}
