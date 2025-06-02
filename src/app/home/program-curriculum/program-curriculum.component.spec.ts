import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramCurriculumComponent } from './program-curriculum.component';

describe('ProgramCurriculumComponent', () => {
  let component: ProgramCurriculumComponent;
  let fixture: ComponentFixture<ProgramCurriculumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramCurriculumComponent]
    });
    fixture = TestBed.createComponent(ProgramCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
