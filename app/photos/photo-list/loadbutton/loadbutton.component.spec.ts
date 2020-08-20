import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadbuttonComponent } from './loadbutton.component';

describe('LoadbuttonComponent', () => {
  let component: LoadbuttonComponent;
  let fixture: ComponentFixture<LoadbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
