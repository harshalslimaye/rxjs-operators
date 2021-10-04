import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { skipLast } from 'rxjs/operators';

@Component({
  selector: 'app-skip-last',
  templateUrl: './skip-last.component.html',
  styleUrls: ['./skip-last.component.css']
})
export class SkipLastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

    source$.pipe(skipLast(4)).subscribe(value => {
      console.log(value);
    });
  }

}
