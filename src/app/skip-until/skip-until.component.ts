import { Component, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { skipUntil } from 'rxjs/operators';

@Component({
  selector: 'app-skip-until',
  templateUrl: './skip-until.component.html',
  styleUrls: ['./skip-until.component.css']
})
export class SkipUntilComponent implements OnInit {

  switchOn$: Subject<any> = new Subject<any>();

  count = 0;

  constructor() { }

  ngOnInit(): void {
    const source$ = interval(1000);

    source$.pipe(skipUntil(this.switchOn$)).subscribe(value => {
      this.count = value;
    });
  }

  on(): void {
    this.switchOn$.next();
  }

}
