import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  constructor() { }
  logging(amount: number) {
    return amount + 10;
  }

}
