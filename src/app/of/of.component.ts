import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css']
})
export class OfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source$ = of({ name: 'Harshal' }, [1, 2, 3, 4], 'Hello World!');

    source$.subscribe(value => {
      console.log(value);
    });
  }

}
