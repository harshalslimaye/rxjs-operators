import { Component, OnInit } from '@angular/core';
// import { interval } from 'rxjs';
import { of } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.css']
})
export class StartWithComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const source$ = interval(1000);

    // source$.pipe(startWith(99)).subscribe(count => {
    //   console.log(count);
    // });
    const source$ = of(1, 2, 3, 4, 5);

    source$.pipe(startWith(-2)).subscribe(value => {
      console.log(value);
    });
  }

}
