import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-modal',
  templateUrl: './navigation-modal.component.html',
  styleUrls: ['./navigation-modal.component.scss']
})
export class NavigationModalComponent implements OnInit {

  @Output()
  clicked: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.clicked.emit();
  }
}
