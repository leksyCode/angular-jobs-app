import { Jobs } from './job-data';

import { Component, OnInit, Input } from '@angular/core';
import { JobService } from './job.service';
import { Job } from './job';
import { setClassMetadata } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'jobItem',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})

export class JobComponent implements OnInit {
  Jobs: Job[] = [];
  searchLabel: string = "";

  // JSONDatas = [
  //   {"id": "Open"},
  //   {"id": "OpenNew", "label": "Open New"},
  //   {"id": "ZoomIn", "label": "Zoom In"},
  //   {"id": "ZoomOut", "label": "Zoom Out"},
  //   {"id": "Find", "label": "Find..."},
  //   {"id": "FindAgain", "label": "Find Again"},
  //   {"id": "Copy"},
  //   {"id": "CopyAgain", "label": "Copy Again"},
  //   {"id": "CopySVG", "label": "Copy SVG"},
  //   {"id": "ViewSVG", "label": "View SVG"}
  // ];

  constructor(private jobService: JobService) {
    
  }

  ngOnInit() {
    this.Jobs = this.jobService.getJobs();
  }

  
  addComment(comment, id) {
    // localStorage.setItem("datas", JSON.stringify(this.JSONDatas));
    // let data = JSON.parse(localStorage.getItem("datas"));
    var job = this.jobService.getJobById(id);
    job.comments.unshift(comment);

    return false;
  }

  showComments(id) {
    var job = this.jobService.getJobById(id); 
    job.isComments = !job.isComments;
  }

  filter(search) {
    this.searchLabel = search;
    this.Jobs = this.jobService.getJobsByName(search);
    
  }



}








// type JobsArray = Array<{id: number, jobTitle:string, sallary:number,  remote:boolean, country:string,  city:string, company: string, 
//   description:string, minimumExperience:number, postTime:Date, postedAgo:number, isComments:boolean, comments:string[]}>;

// for (let i = 0; i < 6; i++) {
  
//   const jobs: JobsArray = [
//     {id: i, jobTitle: 'Junior Full-stack .NET developer', sallary: 1000, remote: true, country: 'Bulgaria', city: 'Plovdiv', company: 'CodeCoda ltd',
//    description: 'This time we are looking for a Junior .NET Developer for a Billing Integration Team. Our client is a Ukrainian product company, a hi-tech R&D center which is a part of the global gaming holding.',
//    minimumExperience: 3, isComments: false, comments: ["guys don't go here", "will you feed me free burgers"], postTime: this.postTime, 
//    postedAgo: Math.floor((this.DateTimeNow.getTime() - this.postTime.getTime()) / 1000 / 60 / 60 / 24)},
// ];
// }
