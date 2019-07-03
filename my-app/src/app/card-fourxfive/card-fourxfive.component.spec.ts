import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFourxfiveComponent } from './card-fourxfive.component';

describe('CardFourxfiveComponent', () => {
  let component: CardFourxfiveComponent;
  let fixture: ComponentFixture<CardFourxfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFourxfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFourxfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
