import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Stopwatch';
  
  interval;
  timer = new Date(null);
  isRunning = false;


  startTimer(){
    if (!this.isRunning) {
      this.interval = setInterval(() => {
        this.timer.setSeconds(this.timer.getSeconds() + 1)
      })
    }
      else {
      clearInterval(this.interval);
      this.timer.setTime(0);
    }
    this.isRunning = !this.isRunning;
  }

  pauseTimer() {
    if (this.isRunning) {
      clearInterval(this.interval);
      this.isRunning = !this.isRunning;
    }
  }

  resetTimer() {
    this.timer.setTime(0);
  }
}