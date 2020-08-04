import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  someRandomVariable = false
  data = [
    {
      lang: 'JavaScript',
      usedOn: 'web'
    },
    {
      lang: 'Swift',
      usedOn: 'ios'
    }
  ]
  constructor() {
    setInterval(() => {
      this.someRandomVariable = !this.someRandomVariable
    }, 1000)
  }
}
