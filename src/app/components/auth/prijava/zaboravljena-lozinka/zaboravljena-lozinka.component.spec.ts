import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaboravljenaLozinkaComponent } from './zaboravljena-lozinka.component';

describe('ZaboravljenaLozinkaComponent', () => {
  let component: ZaboravljenaLozinkaComponent;
  let fixture: ComponentFixture<ZaboravljenaLozinkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZaboravljenaLozinkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaboravljenaLozinkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
