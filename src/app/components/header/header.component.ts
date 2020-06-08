import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isModalOpen: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isModalOpen = false;
  }

  modalToggler(): void {
    this.isModalOpen = !this.isModalOpen;
  }
}
