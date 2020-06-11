import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BandsService } from '../../../../services/bands.service';
import { Band } from '../../../../models/band.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation-items',
  templateUrl: './navigation-items.component.html',
  styleUrls: ['./navigation-items.component.scss']
})
export class NavigationItemsComponent implements OnInit {

  subscription: Subscription;
  public bands: Band[];

  @Output() close: EventEmitter<any> = new EventEmitter;

  constructor(
    private bandsService: BandsService
  ) { }

  ngOnInit(): void {
    this.bandsService.fetchBands();
    this.subscription = this.bandsService.bandsChanged.subscribe((bands: Band[]) => {
      this.bands = bands;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
