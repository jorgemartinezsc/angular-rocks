import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BandsService } from 'src/app/services/bands.service';

@Component({
  selector: 'app-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss']
})
export class NavigationItemComponent implements OnInit {
  @Input() name: string;
  @Input() id: string;
  @Output() close: EventEmitter<any> = new EventEmitter;

  constructor(
    private bandsService: BandsService
  ) { }

  ngOnInit(): void {
  }

  deleteBand(): void {
    this.bandsService.removeBand(this.id)
  }
}
