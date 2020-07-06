import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstarpFormsComponent } from './bootstarp-forms.component';

describe('BootstarpFormsComponent', () => {
  let component: BootstarpFormsComponent;
  let fixture: ComponentFixture<BootstarpFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstarpFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstarpFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
