import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-items',
  templateUrl: './navigation-items.component.html',
  styleUrls: ['./navigation-items.component.scss']
})
export class NavigationItemsComponent implements OnInit {

  public bands: string[]

  constructor() { }

  ngOnInit(): void {
    this.bands = ['The Rolling Stones', 'Led Zeppelin', 'Queen', 'Pink Floyd', 'Deep Purple', 'AC/DC', 'The Ramones', 'Kiss']
  }


}
