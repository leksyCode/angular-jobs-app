export class Job {
    id: number;
    jobTitle: string;
    sallary: number;
    remote: boolean;
    country: string;
    city: string;
    company: string;
    description: string;
    minimumExperience: number;
    postTime: Date;
    postedAgo: number;
    isComments: boolean;
    comments: string[];
}