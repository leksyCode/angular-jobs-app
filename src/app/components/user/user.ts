import { ElementRef } from '@angular/core';

export class User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    country: string;
    city: string;
    summaryHtml: string;  

    constructor(id:number, name: string, email: string,  password: string,  city: string,  country: string,  summaryHtml: string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.city = city;
        this.country = country;
        this.summaryHtml = summaryHtml;
    }
}