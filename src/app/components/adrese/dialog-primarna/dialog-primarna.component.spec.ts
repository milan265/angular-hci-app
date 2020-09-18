import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPrimarnaComponent } from './dialog-primarna.component';

describe('DialogPrimarnaComponent', () => {
  let component: DialogPrimarnaComponent;
  let fixture: ComponentFixture<DialogPrimarnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPrimarnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPrimarnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
