import { Component, OnInit } from '@angular/core';
import {InstrumentService} from '../shared/instrument-service/instrument.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ArtistsService} from '../shared/artists-service/artists.service';
import {ResearchService} from '../shared/research-service/research.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {HttpErrorResponse} from '@angular/common/http';

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

  private _researchDescription: any;

  private _isEdit: boolean;

  private _id: any;

  private _researchInstruments: any[];

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

  /**
   * Returns private property _researchDescription
   *
   * @returns {any}
   */
  get researchDescription(): any {
    return this._researchDescription;
  }

  constructor(private _instrumentService: InstrumentService, private _artistService: ArtistsService,
              private _researchService: ResearchService, private _route: Router, private _router: ActivatedRoute) {
    this._instruments = [];
    this._form = this._buildForm();
    this._researchDescription = {};
    this._isEdit = false;
    this._id = {};
    this._researchInstruments = [];
  }

  ngOnInit() {
    this._instrumentService
      .fetch()
      .subscribe((instruments: any[]) => this._instruments = instruments);
    Observable
      .merge(
        this._router.params
          .filter(params => !!params['id'])
          .flatMap(params => this._researchService.fetchOne(params['id']))
      )
      .subscribe((research: any) => {
        this._researchDescription = research.description;
        this._isEdit = true;
        this._id = research.id;
        this._researchInstruments = research.instruments;
      });
  }

  submitForm(form: any) {
    if (!this._isEdit) {
      this._artistService
        .fetch()
        .subscribe((artist: any) => {
          for (let i = 0; i < form.instruments.length; i++) {
            for (const instrument of this._instruments) {
              if (instrument.name === form.instruments[i]) {
                form.instruments[i] = instrument.id;
              }
            }
          }
          form.band = artist[8].band; // test
          this._researchService
            .create(form)
            .subscribe((_: any[]) => this._route.navigate(['/home']));
        });
    } else {
      this._artistService
        .fetch()
        .subscribe((artist: any) => {
          form.instruments = this._researchInstruments;
          form.band = artist[8].band; // test
          console.log(form);
          this._researchService
            .update(this._id, form)
            .subscribe((_: any[]) => this._route.navigate(['/home']));
        });
    }
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

  isEdit(): boolean {
    return this._isEdit;
  }
}
