import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-take-until-usecase',
  templateUrl: './take-until-usecase.component.html',
  styleUrls: ['./take-until-usecase.component.css']
})
export class TakeUntilUsecaseComponent implements OnInit, OnDestroy {

  onDestroy$: Subject<any> = new Subject<any>();

  constructor() { }

  ngOnInit(): void {
    const source1$ = interval(500);
    const source2$ = interval(1000);
    const source3$ = interval(1500);
    const source4$ = interval(2000);
    source1$.pipe(takeUntil(this.onDestroy$)).subscribe(count => {
      console.log(count);
    });
    source2$.pipe(takeUntil(this.onDestroy$)).subscribe(count => {
      console.log(count);
    });
    source3$.pipe(takeUntil(this.onDestroy$)).subscribe(count => {
      console.log(count);
    });
    source4$.pipe(takeUntil(this.onDestroy$)).subscribe(count => {
      console.log(count);
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
