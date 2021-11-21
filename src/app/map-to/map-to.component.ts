import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-map-to',
  templateUrl: './map-to.component.html',
  styleUrls: ['./map-to.component.css']
})
export class MapToComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source$ = of(1, 2, 3);

    source$.pipe(mapTo('a')).subscribe(value => {
      console.log(value);
    });
  }

}
