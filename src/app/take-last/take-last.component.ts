import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { takeLast } from 'rxjs/operators';

@Component({
  selector: 'app-take-last',
  templateUrl: './take-last.component.html',
  styleUrls: ['./take-last.component.css']
})
export class TakeLastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

    source$.pipe(takeLast(4)).subscribe(count => {
      console.log(count);
    });
  }

}
