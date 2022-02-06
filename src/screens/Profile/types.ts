import {Owner} from '@reducers/posts/types';

export type FullOwner = Owner & {
  dateOfBirth: string;
  email: string;
  gender: 'male' | 'female' | 'other' | '';
  location: Location;
  phone: string;
};

type Location = {
  city: string;
  country: string;
  state: string;
  street: string;
  timezone: string;
};
