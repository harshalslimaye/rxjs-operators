import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { defaultIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-default-if-empty',
  templateUrl: './default-if-empty.component.html',
  styleUrls: ['./default-if-empty.component.css']
})
export class DefaultIfEmptyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source$: Observable<any> = of();

    source$.pipe(defaultIfEmpty(100)).subscribe(value => {
      console.log(value);
    })
  }

}
