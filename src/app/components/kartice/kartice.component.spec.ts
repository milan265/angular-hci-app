import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarticeComponent } from './kartice.component';

describe('KarticeComponent', () => {
  let component: KarticeComponent;
  let fixture: ComponentFixture<KarticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
