import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { skipWhile } from 'rxjs/operators';

@Component({
  selector: 'app-skip-while',
  templateUrl: './skip-while.component.html',
  styleUrls: ['./skip-while.component.css']
})
export class SkipWhileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source$ = of(1, 2, 3, 4, 5, 6, 4, 3, 2, 1);

    source$.pipe(skipWhile(value => value <= 5)).subscribe(value => {
      console.log(value);
    });
  }

}
