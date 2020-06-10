import { Component, OnInit } from '@angular/core';
import { Band } from 'src/app/models/band.model';
import { BandsService } from '../../../services/bands.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-band-form',
  templateUrl: './band-form.component.html',
  styleUrls: ['./band-form.component.scss']
})
export class BandFormComponent implements OnInit {

  public newBand: Band

  constructor(
    private bandsService: BandsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.newBand = {name: "", description: "", videoUrl: "https://www.youtube.com/embed/"};
  }

  onSubmit(): void {
    this.bandsService.postBand(this.newBand).subscribe(responseData => {
      this.router.navigate(['/band/' + responseData.name]);
      console.log(responseData);
    });
  }

}
