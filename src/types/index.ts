import {Urls} from '@constants';

// REQUESTS
export type TGenerateOptions = {
  method: 'POST' | 'GET' | 'PUT' | 'DELETE';
  url: Urls;
  data?: any;
  params?: any;
};

export type TFormatResponse = {
  data: any;
  status: number;
  statusText: string;
};
