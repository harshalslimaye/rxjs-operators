import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source$ = interval(250);

    source$.pipe(take(10)).subscribe(value => {
      console.log(value);
    });
  }

}
