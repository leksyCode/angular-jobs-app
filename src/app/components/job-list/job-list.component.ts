import { Jobs } from './job-data';

import { Component, OnInit, Input } from '@angular/core';
import { JobService } from './job.service';
import { Job } from './job';

@Component({
  selector: 'jobItem',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})

export class JobComponent implements OnInit {
  Jobs: Job[] = [];
  searchLabel: string = "";
  constructor(private jobService: JobService) {

  }

  ngOnInit() {
    this.Jobs = this.jobService.getResentlyJobs();
  }


  addComment(comment, id) {
    var job = this.jobService.getJobById(id);
    job.comments.unshift(comment);

    return false;
  }

  showComments(id) {
    var job = this.jobService.getJobById(id);
    job.isComments = !job.isComments;
  }

  filter(search, sortBy) {
    this.searchLabel = search;

    switch (sortBy) {
      case 'recent':
        this.Jobs = this.jobService.getResentlyJobs();
        break;
      case 'rated':
        this.Jobs = this.jobService.getMostRatedJobs();
        break;
      case 'paid':
        this.Jobs = this.jobService.getMostPayedJobs();
        break;
      default:
        this.Jobs = this.jobService.getResentlyJobs();
        break;
    }

    if (this.searchLabel != '') {
      this.Jobs = this.jobService.getJobsByName(search).concat(this.jobService.getJobsByCompany(search));
    }
  }
}
