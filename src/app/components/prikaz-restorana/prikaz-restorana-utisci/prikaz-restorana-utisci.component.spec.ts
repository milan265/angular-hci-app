import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazRestoranaUtisciComponent } from './prikaz-restorana-utisci.component';

describe('PrikazRestoranaUtisciComponent', () => {
  let component: PrikazRestoranaUtisciComponent;
  let fixture: ComponentFixture<PrikazRestoranaUtisciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazRestoranaUtisciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazRestoranaUtisciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
