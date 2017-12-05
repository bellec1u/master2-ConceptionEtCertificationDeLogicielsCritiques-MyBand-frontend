import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // private property to store view value
  private _view: string;

  /**
   * Returns private property _view
   *
   * @returns {string}
   */
  get view(): string {
    return this._view;
  }

  /**
   * Component constructor
   */
  constructor() {
    this._view = 'connection';
  }

  /**
   * Function to switch view
   */
  switchView() {
    this._view = (this._view === 'connection') ? 'connected' : 'connection';
  }
}
