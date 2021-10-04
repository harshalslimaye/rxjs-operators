import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  operators: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.operators = [
      'take',
      'takeUntil',
      'takeLast',
      'takeWhile',
      'skip',
      'skipWhile',
      'skipUntil',
      'skipLast',
      'buffer'
    ];
  }

}
