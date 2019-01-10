import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  @Input() number: number;
  @Output() decrease = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  decreaseNumber() {
    this.decrease.emit(this.number);
  }

}
