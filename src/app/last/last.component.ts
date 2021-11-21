import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { last } from 'rxjs/operators';

@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.css']
})
export class LastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source$ = of(1, 2, 3, 5);

    source$.pipe(last(count => {
      return count % 2 === 0;
    }, 'No results found!')).subscribe(count => {
      console.log(count);
    });
  }

}
