import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { skip, take } from 'rxjs/operators';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.css']
})
export class SkipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source$ = interval(1000);

    source$.pipe(skip(5), take(5)).subscribe(value => {
      console.log(value);
    });
  }

}
