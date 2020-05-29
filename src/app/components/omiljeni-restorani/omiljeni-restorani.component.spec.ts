import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmiljeniRestoraniComponent } from './omiljeni-restorani.component';

describe('OmiljeniRestoraniComponent', () => {
  let component: OmiljeniRestoraniComponent;
  let fixture: ComponentFixture<OmiljeniRestoraniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmiljeniRestoraniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmiljeniRestoraniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
