import { Component, OnInit } from '@angular/core';
// import { of } from 'rxjs';
import { interval } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const source$ = of(1, 2, 3, 4, 5);

    // source$.pipe(first()).subscribe(value => {
    //   console.log(value);
    // });

    const source$ = interval(1000);

    source$.pipe(first()).subscribe(count => {
      console.log(count);
    });
  }

}
