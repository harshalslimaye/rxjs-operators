import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
  styleUrls: ['./take-while.component.css']
})
export class TakeWhileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source$ = of(1, 2, 3, 4, 5, 6, 1, 2, 3, 4);

    source$
      .pipe(takeWhile(value => value <= 4, true))
      .subscribe(value => {
        console.log(value);
      });
  }

}
