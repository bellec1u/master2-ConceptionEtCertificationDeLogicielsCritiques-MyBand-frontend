import { Component, OnInit } from '@angular/core';
import {InstrumentService} from '../shared/instrument-service/instrument.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ArtistsService} from '../shared/artists-service/artists.service';
import {ResearchService} from '../shared/research-service/research.service';

@Component({
  selector: 'app-research-creator',
  templateUrl: './research-creator.component.html',
  styleUrls: ['./research-creator.component.css']
})
export class ResearchCreatorComponent implements OnInit {
  // private property to store instruments value
  private _instruments: any[];
  // private property to store form value
  private _form: FormGroup;

  private _idBand: any;

  /**
   * Returns private property _instruments
   *
   * @returns {any[]}
   */
  get instruments(): any[] {
    return this._instruments;
  }

  /**
   * Returns private property _form
   *
   * @returns {FormGroup}
   */
  get form(): FormGroup {
    return this._form;
  }

  constructor(private _instrumentService: InstrumentService, private _artistService: ArtistsService,
              private _researchService: ResearchService) {
    this._instruments = [];
    this._form = this._buildForm();
  }

  ngOnInit() {
    this._instrumentService
      .fetch()
      .subscribe((instruments: any[]) => this._instruments = instruments);
  }

  submitForm(form: any) {
    this._artistService
      .fetch()
      .subscribe((artist: any) => {
        form.band = artist[8].band;
        console.log(form);
        console.log(this._researchService.create(form));
      });
  }

  /**
   * Function to build our form
   *
   * @returns {FormGroup}
   *
   * @private
   */
  private _buildForm(): FormGroup {
    return new FormGroup({
      description: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(2)
      ])),
      instruments: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(1)
      ])),
    });
  }
}
