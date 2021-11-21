import { Component, OnInit } from '@angular/core';
// import { of } from 'rxjs';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const source$ = of(1, 2, 3);

    // source$.pipe(map(value => {
    //   return value * 10;
    // })).subscribe(value => {
    //   console.log(value);
    // });

    const users = [
      { id: 1, firstName: 'John', lastName:'Doe' },
      { id: 2, firstName: 'Jane', lastName:'White' },
      { id: 3, firstName: 'Foo', lastName:'Bar' },
      { id: 4, firstName: 'Mike', lastName:'Moon' },
    ];

    const source$ = from(users);

    source$.pipe(map(value => {
      return {
        id: value.id,
        fullName: `${value.firstName} ${value.lastName}`
      }
    })).subscribe(value => {
      console.log(value);
    });
  }

}
