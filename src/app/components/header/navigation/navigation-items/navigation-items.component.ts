import { Component, OnInit } from '@angular/core';
import { BandsService } from '../../../../services/bands.service';
import { Band } from '../../../../models/band.model';

@Component({
  selector: 'app-navigation-items',
  templateUrl: './navigation-items.component.html',
  styleUrls: ['./navigation-items.component.scss']
})
export class NavigationItemsComponent implements OnInit {

  public loadedBands: Band[];

  constructor(
    private bandsService: BandsService
  ) { }

  ngOnInit(): void {
    this.loadedBands = [];
    this.getBands();
  }

  getBands():void {
    this.bandsService.fetchBands().subscribe(bands => {
      this.loadedBands = bands;
    });
  }
}
