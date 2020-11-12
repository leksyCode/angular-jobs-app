import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../job-list/job';
import { JobService } from '../job-list/job.service';

@Component({
  selector: 'job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit, OnDestroy {
  id: number;
  job: Job;
  private sub;
  
  constructor(private route: ActivatedRoute, private jobService: JobService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];       
   });
   this.job = this.jobService.getJobById(this.id);
  }

  ngOnDestroy(): void {
   this.sub.unsubscribe();
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
}
