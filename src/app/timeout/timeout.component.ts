import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.css']
})
export class TimeoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source$ = interval(1000);

    source$.pipe(timeout(1200)).subscribe(value => {
      console.log(value);
    });
  }

}
