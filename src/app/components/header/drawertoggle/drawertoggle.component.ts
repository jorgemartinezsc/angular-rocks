import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drawertoggle',
  templateUrl: './drawertoggle.component.html',
  styleUrls: ['./drawertoggle.component.scss']
})
export class DrawertoggleComponent implements OnInit {

  @Output()
  clicked: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  openModal(): void {
    this.clicked.emit();
  }
}
