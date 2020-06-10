import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Band } from '../models/band.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  bandsChanged = new Subject<Band[]>();
  private urlGet: string
  private urlGetById: string
  private urlPost: string
  private urlDelete: string
  public loadedBands: Band[]


  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.urlGet = `${environment.apiUrl}bands.json`;
    this.urlGetById = `${environment.apiUrl}bands/`;
    this.urlPost = `${environment.apiUrl}bands.json`;
    this.urlDelete = `${environment.apiUrl}bands/`;
    this.loadedBands = [];
  }

  fetchBands() {
    return this.http.get(this.urlGet)
      .pipe(map(responseData => {
        const bandsArray: Band[] = [];
        for (const key in responseData) {
          bandsArray.push({ ...responseData[key], id: key } as Band)
        }
        return bandsArray
      }))
      .subscribe(bands => {
        this.loadedBands = bands;
        this.bandsChanged.next(this.loadedBands.slice())
      })
  }

  getBandById(id) {
    return this.http.get(this.urlGetById + id + '.json')
      .pipe(map((responseData: Band) => {
        return responseData
      }))
  }

  filterBands(searchStr) {
    const filteredBands = this.loadedBands.filter(band => band.name.toLowerCase().includes(searchStr.toLowerCase()));
    this.bandsChanged.next(filteredBands);
  }

  postBand(band: Band) {
    this.http.post(this.urlPost, band).subscribe(
      (responseData: any) => {
        this.fetchBands();
        this.router.navigate(['/band/' + responseData.name]);
      }
    );
  }

  removeBand(bandId: string) {
    this.http.delete(this.urlDelete + bandId + '.json').subscribe(
      responseData => {
        this.fetchBands();
        this.router.navigate(['/']);
      }
    );
  }
}
