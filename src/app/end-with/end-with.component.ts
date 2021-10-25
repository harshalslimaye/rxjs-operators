import { Component, OnInit } from '@angular/core';
// import { of } from 'rxjs';
import { interval } from 'rxjs';
import { endWith, take } from 'rxjs/operators';

@Component({
  selector: 'app-end-with',
  templateUrl: './end-with.component.html',
  styleUrls: ['./end-with.component.css']
})
export class EndWithComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const source$ = of(1, 2, 3, 4, 5);

    // source$.pipe(endWith(99)).subscribe(value => {
    //   console.log(value);
    // });

    const source$ = interval(1000);

    source$.pipe(take(5), endWith(999)).subscribe(count => {
      console.log(count);
    });
  }

}
