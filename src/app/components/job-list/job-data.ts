import { Job } from './job';
 
export let Jobs: Job[] = [
  {
    id: 1,
    jobTitle: '.Net Back-end developer',
    sallary: 2500, 
    workType: 'full-time',
    country: 'Bulgaria',
    city: 'Plovdiv',
    company: 'CodeCoda ltd',
    description: 'This time we are looking for a Junior .NET Developer for a Billing Integration Team. Our client is a Ukrainian product company, a hi-tech R&D center which is a part of the global gaming holding.',
    minimumExperience: 2,
    postTime: new Date("11/07/2020"),
    postedAgo: null,
    isComments: false,
    comments: ["guys don't go here", "will you feed me free burgers"],
    stars: 13
  },
  {
    id: 2,
    jobTitle: 'Angular Front-end developer',
    sallary: 3500, 
    workType: 'remote',
    country: 'Ukraine',
    city: 'Odessa',
    company: 'Apastera',
    description: 'This time we are looking for a Junior .NET Developer for a Billing Integration Team. Our client is a Ukrainian product company, a hi-tech R&D center which is a part of the global gaming holding.',
    minimumExperience: 3,
    postTime: new Date("11/05/2020"),
    postedAgo: null,
    isComments: false,
    comments: ["guys don't go here", "will you feed me free burgers"],
    stars: 6
  },
  {
    id: 3,
    jobTitle: '.Net Core / Angular full-stack developer',
    sallary: 3200, 
    workType: 'part-time',
    country: 'Bulgaria',
    city: 'Plovdiv',
    company: 'HYS Enterprise',
    description: 'This time we are looking for a Junior .NET Developer for a Billing Integration Team. Our client is a Ukrainian product company, a hi-tech R&D center which is a part of the global gaming holding.',
    minimumExperience: 1,
    postTime: new Date("11/01/2020"),
    postedAgo: null,
    isComments: false,
    comments: ["guys don't go here", "will you feed me free burgers"],
    stars: 11   
  },
  {
    id: 4,
    jobTitle: 'React Front-end developer',
    sallary: 64000, 
    workType: 'full-time',
    country: 'New-York',
    city: 'United States',
    company: 'Facebook',
    description: 'This time we are looking for a Junior .NET Developer for a Billing Integration Team. Our client is a Ukrainian product company, a hi-tech R&D center which is a part of the global gaming holding.',
    minimumExperience: 7,
    postTime: new Date("11/07/2020"),
    postedAgo: null,
    isComments: false,
    comments: ["guys don't go here", "will you feed me free burgers"],
    stars: 34
  }
];