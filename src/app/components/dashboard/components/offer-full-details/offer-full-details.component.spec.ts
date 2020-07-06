import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferFullDetailsComponent } from './offer-full-details.component';

describe('OfferFullDetailsComponent', () => {
  let component: OfferFullDetailsComponent;
  let fixture: ComponentFixture<OfferFullDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferFullDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferFullDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
