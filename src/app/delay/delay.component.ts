import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.css']
})
export class DelayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source$ = of(1, 2);

    source$.pipe(delay(5000)).subscribe(value => {
      console.log(value);
    });
  }

}
