export interface Address {
  state?: string;
  country: string;
  city: string;
  street: string;
  houseNumber: number;
  zip: number;
}

export interface CustomersInterface {
  _id?: string;
  idCard?: number;
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
