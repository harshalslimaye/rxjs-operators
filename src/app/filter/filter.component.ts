import { Component, OnInit } from '@angular/core';
// import { interval } from 'rxjs';
import { filter } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const source$ = interval(1000);

    // source$.pipe(filter(value => {
    //   return value % 2 === 0;
    // })).subscribe(value => {
    //   console.log(value);
    // });
    const cities = [
      {
        name: 'Bangalore',
        country: 'India'
      },
      {
        name: 'Mumbai',
        country: 'India'
      },
      {
        name: 'Kathmandu',
        country: 'Nepal'
      },
      {
        name: 'Pokhara',
        country: 'Nepal'
      }
    ];

    const source$ = from(cities);

    source$.pipe(filter(value => {
      return value.country === 'India';
    })).subscribe(value => {
      console.log(value);
    });
  }

}
