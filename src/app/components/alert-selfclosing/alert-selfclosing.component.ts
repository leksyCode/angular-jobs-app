import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'alert-apply',
  templateUrl: './alert-selfclosing.html'
})
export class NgbdAlertSelfclosing implements OnInit {
  private _success = new Subject<string>();

  successMessage:any = '';

  ngOnInit(): void {
    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = '');
  }

  public changeSuccessMessage() {
    this._success.next('You successfully applied');
  }
}