import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ArtistsService} from '../shared/artists-service/artists.service';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _router: Router, private _artistService: ArtistsService) {
  }

  ngOnInit() {
  }
}
