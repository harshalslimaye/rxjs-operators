import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs'

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const source$ = from([10, 20, 30]);

    // source$.subscribe(value => {
    //   console.log(value);
    // });

    // const source$ = from("Hello world!");

    // source$.subscribe(value => {
    //   console.log(value);
    // });

    const countries = new Map();

    countries.set('in', 'India');
    countries.set('np', 'Nepal');
    countries.set('jp', 'Japan');
    countries.set('br', 'Brazil');

    const source$ = from(countries);

    source$.subscribe(value => {
      console.log(value);
    });
  }

}
