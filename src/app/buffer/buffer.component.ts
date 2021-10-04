import { Component, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { buffer, map } from 'rxjs/operators';

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
  styleUrls: ['./buffer.component.css']
})
export class BufferComponent implements OnInit {

  switch$: Subject<any> = new Subject();

  constructor() { }

  ngOnInit(): void {
    const source$ = interval(250);

    source$.pipe(
      buffer(this.switch$),
      map(values => {
        return values.reduce((val, sum) => val + sum, 0)
      })
    ).subscribe(value => {
      console.log(value);
    });
  }

  release(): void {
    this.switch$.next();
  }

}
