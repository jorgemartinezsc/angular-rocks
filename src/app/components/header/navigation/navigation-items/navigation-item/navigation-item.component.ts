import { Component, OnInit, Input } from '@angular/core';
import { BandsService } from 'src/app/services/bands.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss']
})
export class NavigationItemComponent implements OnInit {
  @Input() name: string;
  @Input() id: string;

  constructor(
    private bandsService: BandsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  deleteBand(): void {
    this.bandsService.removeBand(this.id).subscribe(responseData => {
      this.router.navigate(['/']);
    })
  }
}
