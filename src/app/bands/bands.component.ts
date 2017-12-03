import { Component, OnInit } from '@angular/core';
import {BandsService} from '../shared/bands-service/bands.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})
export class BandsComponent implements OnInit {
  // private property to store people value
  private _bands: any[];

  constructor(private _router: Router, private _bandsService: BandsService) {
    this._bands = [];
  }

  /**
   * Returns private property _bands
   *
   * @returns {any[]}
   */
  get bands(): any[] {
    return this._bands;
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this._bandsService
      .fetch()
      .subscribe((bands: any[]) => this._bands = bands);
  }

  /**
   * Function to navigate to current band
   *
   * @param band
   */
  navigate(band) {
    this._router.navigate(['/band', band.id]);
  }

}
