import { Component, OnInit } from '@angular/core';
import { BandsService } from 'src/app/services/bands.service';

@Component({
  selector: 'app-navigation-search',
  templateUrl: './navigation-search.component.html',
  styleUrls: ['./navigation-search.component.scss']
})
export class NavigationSearchComponent implements OnInit {

  public textToSearch: string;

  constructor(
    private bandsService: BandsService
  ) { }

  ngOnInit(): void {
  }

  search(): void {
    this.bandsService.filterBands(this.textToSearch)
  }
}
