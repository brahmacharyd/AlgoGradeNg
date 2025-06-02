import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramAtAGlanceComponent } from './program-at-a-glance.component';

describe('ProgramAtAGlanceComponent', () => {
  let component: ProgramAtAGlanceComponent;
  let fixture: ComponentFixture<ProgramAtAGlanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramAtAGlanceComponent]
    });
    fixture = TestBed.createComponent(ProgramAtAGlanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
