import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertComponent } from './alert.component';
import { MaterialModule } from '../material/material.module';
import { AlertService } from './alert.service';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let service: AlertService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertComponent ],
      imports: [ MaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = new AlertService();
    component = new AlertComponent(service);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
