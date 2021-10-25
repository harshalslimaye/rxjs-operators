import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { bufferCount } from 'rxjs/operators';

@Component({
  selector: 'app-buffer-count',
  templateUrl: './buffer-count.component.html',
  styleUrls: ['./buffer-count.component.css']
})
export class BufferCountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source$ = interval(1000);

    source$.pipe(bufferCount(4)).subscribe(value => {
      console.log(value);
    });
  }

}
