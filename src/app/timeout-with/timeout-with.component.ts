import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { timeoutWith } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-timeout-with',
  templateUrl: './timeout-with.component.html',
  styleUrls: ['./timeout-with.component.css']
})
export class TimeoutWithComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source$ = interval(1000);
    const alt$ = of('Hello World!');

    source$.pipe(timeoutWith(1200, alt$)).subscribe(value => {
      console.log(value);
    });
  }

}
