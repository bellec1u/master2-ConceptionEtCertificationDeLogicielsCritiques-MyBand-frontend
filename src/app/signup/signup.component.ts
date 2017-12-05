import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {InstrumentService} from '../shared/instrument-service/instrument.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // private property to store instruments value
  private _instruments: any[];

  /**
   * Returns private property _instruments
   *
   * @returns {any[]}
   */
  get instruments(): any[] {
    return this._instruments;
  }

  constructor(private _router: Router, private _instrumentService: InstrumentService) {
    this._instruments = [];
  }

  ngOnInit() {
    this._instrumentService
      .fetch()
      .subscribe((instruments: any[]) => this._instruments = instruments);
  }
}
