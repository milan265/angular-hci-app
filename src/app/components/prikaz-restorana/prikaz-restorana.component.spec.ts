import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazRestoranaComponent } from './prikaz-restorana.component';

describe('PrikazRestoranaComponent', () => {
  let component: PrikazRestoranaComponent;
  let fixture: ComponentFixture<PrikazRestoranaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazRestoranaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazRestoranaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
