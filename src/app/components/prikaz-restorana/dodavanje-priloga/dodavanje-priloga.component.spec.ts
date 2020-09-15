import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodavanjePrilogaComponent } from './dodavanje-priloga.component';

describe('DodavanjePrilogaComponent', () => {
  let component: DodavanjePrilogaComponent;
  let fixture: ComponentFixture<DodavanjePrilogaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodavanjePrilogaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodavanjePrilogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
