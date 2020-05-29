import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtisciComponent } from './utisci.component';

describe('UtisciComponent', () => {
  let component: UtisciComponent;
  let fixture: ComponentFixture<UtisciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtisciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtisciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
