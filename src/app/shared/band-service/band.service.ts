import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/defaultIfEmpty';
import 'rxjs/add/operator/filter';

@Injectable()
export class BandService {

  // private property to store all backend URLs
  private _backendURL: any;

  constructor(private _http: HttpClient) {
    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
  }


  /**
   * Function to return list of bands
   *
   * @returns {Observable<any[]>}
   */
  fetch(): Observable<any[] | ArrayBuffer> {
    return this._http.get(this._backendURL.allBand, this._options())
      .filter(_ => !!_)
      .defaultIfEmpty([]);
  }

  /**
   * Function to return one random band from bands list
   *
   * @returns {Observable<any>}
   */
  fetchRandom(): Observable<any> {
    return this._http.get(this._backendURL.randomBands, this._options())
      .filter(_ => !!_)
      .defaultIfEmpty({});
  }

  /**
   * Function to return one band for current id
   *
   * @param id
   *
   * @returns {Observable<any>}
   */
  fetchOne(id: string): Observable<any> {
    return this._http.get(this._backendURL.oneBand.replace(':id', id), this._options());
  }

  /**
   * Function to create a new band
   *
   *
   * @returns {Observable<any>}
   * @param band
   */
  create(band): Observable<any> {
    return this._http.post(this._backendURL.allBands, band, this._options());
  }

  /**
   * Function to update one band
   *
   *
   * @returns {Observable<any>}
   * @param band
   */
  update(band: any): Observable<any> {
    return this._http.put(this._backendURL.oneBand.replace(':id', band.id), band, this._options());
  }

  /**
   * Function to delete one band for current id
   *
   * @param id
   *
   * @returns {Observable<any[]>}
   */
  delete(id: string): Observable<any[] | ArrayBuffer> {
    return this._http.delete(this._backendURL.oneBand.replace(':id', id), this._options())
      .filter(_ => !!_)
      .defaultIfEmpty([]);
  }

  /**
   * Function to return request options
   *
   * @returns {any}
   */
  private _options(headerList: Object = {}): any {
    const headers = new HttpHeaders(Object.assign({ 'Content-Type': 'application/json' }, headerList));
    return { headers };
  }

}
