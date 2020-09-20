import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOceniNarudzbinuComponent } from './dialog-oceni-narudzbinu.component';

describe('DialogOceniNarudzbinuComponent', () => {
  let component: DialogOceniNarudzbinuComponent;
  let fixture: ComponentFixture<DialogOceniNarudzbinuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogOceniNarudzbinuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOceniNarudzbinuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
