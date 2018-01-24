import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicelistingComponent } from './devicelisting.component';

describe('DevicelistingComponent', () => {
  let component: DevicelistingComponent;
  let fixture: ComponentFixture<DevicelistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicelistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicelistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
