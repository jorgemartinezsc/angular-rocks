import { Component, OnInit, Input } from '@angular/core';
import { BandsService } from 'src/app/services/bands.service';

@Component({
  selector: 'app-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss']
})
export class NavigationItemComponent implements OnInit {
  @Input() name: string;
  @Input() id: string;

  constructor(
    private bandsService: BandsService
  ) { }

  ngOnInit(): void {
  }

  deleteBand(): void {
    console.log('Deleting band with Id: ' + this.id)
    //this.bandsService.removeBand(this.id).subscribe()
  }
}
