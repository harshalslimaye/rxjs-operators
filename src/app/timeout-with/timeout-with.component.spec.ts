import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeoutWithComponent } from './timeout-with.component';

describe('TimeoutWithComponent', () => {
  let component: TimeoutWithComponent;
  let fixture: ComponentFixture<TimeoutWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeoutWithComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeoutWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
