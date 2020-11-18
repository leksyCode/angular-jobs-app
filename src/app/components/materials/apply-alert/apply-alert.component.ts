import { UserService } from './../../user/user.service';
import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'apply-alert',
  templateUrl: 'apply-alert.html'
})
export class ApplyJobAllert implements OnInit {
  private _success = new Subject<string>();

  successMessage:any = '';

  constructor(private userService: UserService, private route:Router){

  }

  ngOnInit(): void {
    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = '');
  }

  public changeSuccessMessage() {
   
    if(this.userService.getAuthenticatedUser() != null) {
      this._success.next('You successfully applied');
      // TODO: Send Data to company
      return;
    }
            
      this.route.navigate(['/login']);   
  
    
  }
}