import { Component, OnInit } from '@angular/core';
import { Band } from 'src/app/models/band.model';
import { BandsService } from '../../../services/bands.service';

@Component({
  selector: 'app-band-form',
  templateUrl: './band-form.component.html',
  styleUrls: ['./band-form.component.scss']
})
export class BandFormComponent implements OnInit {

  public newBand: Band

  constructor(
    private bandsService: BandsService
  ) { }

  ngOnInit(): void {
    this.newBand = {name: "", description: "", videoUrl: "https://www.youtube.com/embed/"};
  }

  onSubmit(): void {
    this.bandsService.postBand(this.newBand);
  }

}
