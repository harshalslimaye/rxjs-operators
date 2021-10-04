import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeUntilUsecaseComponent } from './take-until-usecase.component';

describe('TakeUntilUsecaseComponent', () => {
  let component: TakeUntilUsecaseComponent;
  let fixture: ComponentFixture<TakeUntilUsecaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeUntilUsecaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeUntilUsecaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
