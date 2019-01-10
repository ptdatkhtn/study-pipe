import { Component } from '@angular/core';
import { LoggingService } from './services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public content: string = `Very application starts out with what seems like a simple task: get data, transform them, and show them to users.
                            Getting data could be as simple as creating a local variable or as complex as streaming data over a WebSocket.
                            Once data arrives, you could push their raw toString values directly to the view, but that rarely makes for a good user experience. `;
  public title: string = 'study angular-pipe';
  public money: number = 100.00;
  public today: Date = new Date();
  public amount: number = 0;

  constructor(private _decreaseAmount: LoggingService) {

  }
  onClick(number) {
    this.amount = this._decreaseAmount.logging(number);
  }
}
