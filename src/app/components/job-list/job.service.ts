import { Injectable } from '@angular/core';

import { Job } from './job';
import { Jobs } from './job-data';

@Injectable()
export class JobService {

  constructor() {
    // set how many days have passed since publication
    Jobs.forEach(job => {
      job.postedAgo = Math.floor((new Date().getTime() - job.postTime.getTime()) / 1000 / 60 / 60 / 24);
    });
  }

  getJobById(id: number): Job {
    return Jobs.find(job => job.id === id);
  }

  getJob(jobTitle: string): Job {
    return Jobs.find(job => job.jobTitle === jobTitle);
  }

  getJobsByName(search: string): Job[] {
    return Jobs.filter((job => job.jobTitle.toLowerCase().includes(search.toLowerCase())));
  }

  getJobsByCompany(search: string): Job[] {
    return Jobs.filter((job => job.company.toLowerCase().includes(search.toLowerCase())));
  }

  getMostPayedJobs(): Job[] {
    return Jobs.sort((a, b) => b.sallary - a.sallary);
  }

  getResentlyJobs(): Job[] {
    return Jobs.sort((a, b) =>  a.postedAgo - b.postedAgo);
  }

  getMostRatedJobs(): Job[] {
    return Jobs.sort((a, b) => b.stars - a.stars);
  }
}