import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private actualAmountUSD = 50
  INR = true

  get amount(){
    return this.INR ? this.actualAmountUSD * 75 : this.actualAmountUSD
  }

  get format(){
    return this.INR ? 'INR' : 'USD'
  }

  toggleCurrency(){
    this.INR = !this.INR
  }
}
