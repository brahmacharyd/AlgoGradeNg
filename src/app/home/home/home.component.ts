import { Component } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeSlideIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', [
        animate('600ms ease-out')
      ]),
    ]),
  ]
})
export class HomeComponent {
  sliderItems = [
    'HTML & CSS Fundamentals',
    'JavaScript Mastery',
    'Frontend Frameworks (React/Angular)',
    'Backend Development (Node.js/Express)',
    'Database Management (MongoDB/MySQL)',
    'Version Control (Git & GitHub)',
    'Responsive Design',
    'API Development & Integration',
    'Deployment & Hosting',
    'Debugging & Optimization',
    'Building Full-Stack Applications',
  ];

  sectionStates: Record<string, 'hidden' | 'visible'> = {
    section1: 'hidden',
    section2: 'hidden',
    section3: 'hidden'
  };
  onVisible(section: string) {
    this.sectionStates[section] = 'visible';
  }
}
