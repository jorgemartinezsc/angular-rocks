import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Band } from '../models/band.model';

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  private urlGet: string
  private urlGetById: string
  private urlPost: string
  private urlDelete: string

  constructor(
    private http: HttpClient
  ) {
    this.urlGet = `${environment.apiUrl}bands.json`;
    this.urlGetById = `${environment.apiUrl}bands/`;
    this.urlPost = `${environment.apiUrl}bands.json`;
    this.urlDelete = `${environment.apiUrl}bands/`;
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
  }

  getBandById(id) {
    return this.http.get(this.urlGetById + id + '.json')
      .pipe(map(responseData => {
        return responseData as Band
      }))
  }

  postBand(band: Band) {
    return this.http.post(this.urlPost, band);
  }

  removeBand(bandId: string) {
    return this.http.delete(this.urlDelete + bandId + '.json');
  }
}
