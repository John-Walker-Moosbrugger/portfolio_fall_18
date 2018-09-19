import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeRoverComponent } from './cube-rover.component';
import { HeaderComponent } from '../header/header.component';

describe('CubeRoverComponent', () => {
  let component: CubeRoverComponent;
  let fixture: ComponentFixture<CubeRoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubeRoverComponent, HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubeRoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
