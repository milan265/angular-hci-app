import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogIzbrisiKorpaComponent } from './dialog-izbrisi-korpa.component';

describe('DialogIzbrisiKorpaComponent', () => {
  let component: DialogIzbrisiKorpaComponent;
  let fixture: ComponentFixture<DialogIzbrisiKorpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogIzbrisiKorpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogIzbrisiKorpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
