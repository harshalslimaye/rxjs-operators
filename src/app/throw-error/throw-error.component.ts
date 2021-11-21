import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.html',
  styleUrls: ['./throw-error.component.css']
})
export class ThrowErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source$ = throwError('Oops! Something went wrong.');

    source$.subscribe(value => {
      console.log(value);
    }, err => {
      console.log(err);
      // some other action
    })
  }

}
