import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmiljenaHranaComponent } from './omiljena-hrana.component';

describe('OmiljenaHranaComponent', () => {
  let component: OmiljenaHranaComponent;
  let fixture: ComponentFixture<OmiljenaHranaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmiljenaHranaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmiljenaHranaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
