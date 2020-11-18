import { Router } from '@angular/router';
import { UserService } from './../user/user.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../user/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('summary') summaryDiv: ElementRef;

 
  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
  }

  signUp(name: string, email: string,  password: string,  city: string,  country: string) {
    let id = this.userService.genereteNewId();
    let summaryHtml = this.summaryDiv.nativeElement.innerHTML;
    let user = new User(id, name, email, password, city, country, summaryHtml);
    this.userService.registerAccount(user);
    this.route.navigate(['/profile']);
  }
}

