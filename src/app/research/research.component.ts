import { Component, OnInit } from '@angular/core';
import {BandService} from '../shared/band-service/band.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {InstrumentService} from '../shared/instrument-service/instrument.service';
import {ResearchService} from '../shared/research-service/research.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  // private property to store research value
  private _research: any;
  // private property to store band value
  private _band: any;
  // private property to store member value
  private _instruments: any[];

  constructor(private _instrumentService: InstrumentService, private _bandService: BandService,
              private _searchService: ResearchService, private _router: ActivatedRoute, private _route: Router) {
    this._research = {};
    this._band = {};
    this._instruments = [];
  }

  /**
   * Returns private property _research
   *
   * @returns {any}
   */
  get research(): any {
    return this._research;
  }
  /**
   * Returns private property _band
   *
   * @returns {any}
   */
  get band(): any {
    return this._band;
  }

  /**
   * Returns private property _instruments
   *
   * @returns {any[]}
   */
  get instruments(): any[] {
    return this._instruments;
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    Observable
      .merge(
        this._router.params
          .filter(params => !!params['id'])
          .flatMap(params => this._searchService.fetchOne(params['id']))
      )
      .subscribe((research: any) => {   this._research = research;
        this.extractInstruments(research.instruments); this.extractBand(research.band); });
  }

  /**
   * Extract all instruments of the research
   *
   * @param {any[]} idInstruments
   */
  private extractInstruments(idInstruments: any[]) {
    for (const id of idInstruments) {
      this._instrumentService
        .fetchOne(id)
        .subscribe((instrument: any[]) => this._instruments.push(instrument));
    }
  }

  /**
   * Extract the research band
   *
   * @param {any[]} idBand
   */
  private extractBand(idBand: any) {
      this._bandService
        .fetchOne(idBand)
        .subscribe((band: any) => this._band = band);
  }

  submit() {
  }

  isOwner(): boolean {
    return true;
  }

  delete() {
    console.log(this._research.id);
    this._searchService
      .delete(this._research.id)
      .subscribe((research: any[]) => this._route.navigate(['/home']));
  }

}
