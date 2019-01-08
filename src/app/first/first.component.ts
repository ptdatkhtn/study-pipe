import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  @Input() number: number;
  @Output() decrease = new EventEmitter<number>();
  constructor() {
  }

  ngOnInit() {
  }
  decreaseNumber() {
    this.decrease.emit(this.number);
  }

}
