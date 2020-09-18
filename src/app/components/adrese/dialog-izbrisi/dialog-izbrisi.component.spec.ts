import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogIzbrisiComponent } from './dialog-izbrisi.component';

describe('DialogIzbrisiComponent', () => {
  let component: DialogIzbrisiComponent;
  let fixture: ComponentFixture<DialogIzbrisiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogIzbrisiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogIzbrisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
