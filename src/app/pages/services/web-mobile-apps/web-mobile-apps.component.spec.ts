import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebMobileAppsComponent } from './web-mobile-apps.component';

describe('WebMobileAppsComponent', () => {
  let component: WebMobileAppsComponent;
  let fixture: ComponentFixture<WebMobileAppsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebMobileAppsComponent]
    });
    fixture = TestBed.createComponent(WebMobileAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
