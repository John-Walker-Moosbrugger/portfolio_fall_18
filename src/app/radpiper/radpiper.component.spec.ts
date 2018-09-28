import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadpiperComponent } from './radpiper.component';

describe('RadpiperComponent', () => {
  let component: RadpiperComponent;
  let fixture: ComponentFixture<RadpiperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadpiperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadpiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
