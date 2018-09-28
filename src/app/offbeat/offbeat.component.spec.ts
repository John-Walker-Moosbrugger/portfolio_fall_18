import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffbeatComponent } from './offbeat.component';

describe('OffbeatComponent', () => {
  let component: OffbeatComponent;
  let fixture: ComponentFixture<OffbeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffbeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffbeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
