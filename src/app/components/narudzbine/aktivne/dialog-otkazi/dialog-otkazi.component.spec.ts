import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOtkaziComponent } from './dialog-otkazi.component';

describe('DialogOtkaziComponent', () => {
  let component: DialogOtkaziComponent;
  let fixture: ComponentFixture<DialogOtkaziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogOtkaziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOtkaziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
