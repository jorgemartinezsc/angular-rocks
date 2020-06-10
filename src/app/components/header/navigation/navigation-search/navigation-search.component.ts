import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { BandsService } from 'src/app/services/bands.service';

@Component({
  selector: 'app-navigation-search',
  templateUrl: './navigation-search.component.html',
  styleUrls: ['./navigation-search.component.scss']
})
export class NavigationSearchComponent implements OnInit, OnChanges {

  public textToSearch: string;

  constructor(
    private bandsService: BandsService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.onSubmit();
  }

  onSubmit(): void {
    this.bandsService.filterBands(this.textToSearch)
  }
}
