import { User } from './user';
 
export let Users: User[] = [
  {
    id: 1,
    name: 'Aleksey Nikolaev',
    email: 'nikolaev.profent@gmail.com', 
    password: 'password',
    country: 'Bulgaria',
    city: 'Plovdiv',
    role: 'user',
    summaryHtml: 'I am loking for payed work in role of .net back-end developer.'
  },
  {
    id: 2,
    name: 'Google Inc',
    email: 'google@gmail.com', 
    password: 'password',
    country: 'United States',
    city: 'New-York',
    role: 'company',
    summaryHtml: '<h1>Google is the biggest company in IT sphere</h1>',
  }
];