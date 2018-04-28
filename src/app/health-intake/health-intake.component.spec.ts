import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthIntakeComponent } from './health-intake.component';

describe('HealthIntakeComponent', () => {
  let component: HealthIntakeComponent;
  let fixture: ComponentFixture<HealthIntakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthIntakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthIntakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
