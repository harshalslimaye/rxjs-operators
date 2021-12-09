import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { timestamp } from 'rxjs/operators';

@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.css']
})
export class TimestampComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source$ = interval(1000);

    source$.pipe(timestamp()).subscribe(value => {
      console.log(value);
    });
  }

}
