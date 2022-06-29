import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TimerTask';
  sub: Subscription;
  counter: number;
  tick = 1000;

  constructor() {
    this.counter = 0;
  }

  startTimer() {
    this.sub = timer(this.counter, this.tick).subscribe(() => {
      this.counter += 1;
    });
  }

  stopTimer() {
    this.unsubscribeTimer();
    this.counter = 0;
  }

  waitTimer() {
    this.unsubscribeTimer();
  }

  resetTimer() {
    this.unsubscribeTimer();
    this.counter = 0;
    setTimeout(() => {
      this.startTimer();
    }, 300);
  }

  unsubscribeTimer() {
    this.sub.unsubscribe();
  }
}
