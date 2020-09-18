import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDodajComponent } from './dialog-dodaj.component';

describe('DialogDodajComponent', () => {
  let component: DialogDodajComponent;
  let fixture: ComponentFixture<DialogDodajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDodajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
