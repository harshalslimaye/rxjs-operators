import { Component, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.css']
})
export class TakeUntilComponent implements OnInit {

  switchOff$: Subject<any> = new Subject<any>();

  constructor() { }

  ngOnInit(): void {
    const source$ = interval(1000);

    // source$.pipe(takeUntil(this.switchOff$)).subscribe(count => {
    //   console.log(count);
    // });
  }

  stop(): void {
    this.switchOff$.next();
  }
}
