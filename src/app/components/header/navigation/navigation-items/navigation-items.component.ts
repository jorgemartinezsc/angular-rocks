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
  public loading: boolean;

  @Output() close: EventEmitter<any> = new EventEmitter;

  constructor(
    private bandsService: BandsService
  ) { }

  ngOnInit(): void {
    this.loading = false
    this.bandsService.fetchBands();
    this.subscribeBands();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  subscribeBands(): void {
    this.loading = true;
    this.subscription = this.bandsService.bandsChanged.subscribe((bands: Band[]) => {
      this.bands = bands;
      this.loading = false;
    });
  }
}
