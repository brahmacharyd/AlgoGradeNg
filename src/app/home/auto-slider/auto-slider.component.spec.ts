import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSliderComponent } from './auto-slider.component';

describe('AutoSliderComponent', () => {
  let component: AutoSliderComponent;
  let fixture: ComponentFixture<AutoSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoSliderComponent]
    });
    fixture = TestBed.createComponent(AutoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
