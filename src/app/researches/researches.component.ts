import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ResearchService} from '../shared/research-service/research.service';

@Component({
  selector: 'app-researches',
  templateUrl: './researches.component.html',
  styleUrls: ['./researches.component.css']
})
export class ResearchesComponent implements OnInit {

  private _researches: any[];

  constructor(private _router: Router, private _researchService: ResearchService) {
    this._researches = [];
  }

  /**
   * Returns private property _artists
   *
   * @returns {any[]}
   */
  get researches(): any[] {
    return this._researches;
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this._researchService
      .fetch()
      .subscribe((researches: any[]) => { this._researches = researches; });
  }

  /**
   * Function to navigate to current research
   *
   * @param research
   */
  navigate(research) {
    this._router.navigate(['/research', research.id]);
  }

}
