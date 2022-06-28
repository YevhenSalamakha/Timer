import { Component } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TimerTask';
  sub: Subscription;
  counter = 0;

  constructor() {}

  start() {
    const intervalStream$ = interval(1000);

    this.sub = intervalStream$.subscribe(() => {
      this.counter += 1;
    });
  }

  stop() {
    this.sub.unsubscribe();
  }

  reset() {
    this.sub.unsubscribe();
    this.counter = 0;
    setTimeout(() => {
      this.start();
    }, 300);
  }
}
