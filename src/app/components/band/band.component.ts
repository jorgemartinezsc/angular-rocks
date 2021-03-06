import { Component, OnInit } from '@angular/core';
import { BandsService } from '../../services/bands.service';
import { Band } from '../../models/band.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss']
})
export class BandComponent implements OnInit {

  public loadedBand: Band;
  public videoUrl: object;
  private routeSubscription: Subscription;
  public loading: boolean;

  constructor(
    private bandsService: BandsService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.loadedBand = {name: '', description: '', videoUrl: ''};
  }

  ngOnInit(): void {
    this.loading = false;
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      this.getBand(params['id']);
    })
  }

  getBand(id): void {
    this.loading = true;
    this.bandsService.getBandById(id).subscribe(band => {
      this.loadedBand = band;
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(band.videoUrl);
      this.loading = false;
    })
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
