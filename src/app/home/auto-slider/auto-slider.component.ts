import { Component } from '@angular/core';

@Component({
  selector: 'app-auto-slider',
  templateUrl: './auto-slider.component.html',
  styleUrls: ['./auto-slider.component.css'], // Optional if styles are inline or handled via Tailwind
})
export class AutoSliderComponent {
  sliderItems = [
    'JavaScript',
    'Angular',
    'Node.js',
    'MongoDB',
    'Tailwind CSS',
    'Express.js',
    'TypeScript',
    'Firebase',
    'Docker',
    'GitHub',
  ];
  
  colors = [
    { border: 'rgba(255, 99, 132, 0.5)', bg: 'rgba(255, 99, 132, 0.1)', text: 'rgba(255, 99, 132, 0.8)' },   // pink
    { border: 'rgba(54, 162, 235, 0.5)', bg: 'rgba(54, 162, 235, 0.1)', text: 'rgba(54, 162, 235, 0.8)' },   // blue
    { border: 'rgba(255, 206, 86, 0.5)', bg: 'rgba(255, 206, 86, 0.1)', text: 'rgba(255, 206, 86, 0.8)' },   // yellow
    { border: 'rgba(75, 192, 192, 0.5)', bg: 'rgba(75, 192, 192, 0.1)', text: 'rgba(75, 192, 192, 0.8)' },   // teal
    { border: 'rgba(153, 102, 255, 0.5)', bg: 'rgba(153, 102, 255, 0.1)', text: 'rgba(153, 102, 255, 0.8)' } // purple
  ];
  
}
