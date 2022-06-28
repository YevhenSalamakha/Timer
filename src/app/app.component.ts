import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TimerTask';
 

  constructor() {
  
  }
}
