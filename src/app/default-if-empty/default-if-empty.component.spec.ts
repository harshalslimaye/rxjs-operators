import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultIfEmptyComponent } from './default-if-empty.component';

describe('DefaultIfEmptyComponent', () => {
  let component: DefaultIfEmptyComponent;
  let fixture: ComponentFixture<DefaultIfEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultIfEmptyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultIfEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
