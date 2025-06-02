import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  services = [
    {
      category: 'Product Development',
      items: [
        'Custom software solutions',
        'Web & mobile apps',
        'Software consulting',
        'Tech stack advisory',
        'Project management',
      ],
    },
    {
      category: 'Training & Development',
      items: [
        'Programming courses',
        'Certifications',
        'Campus-to-corporate training',
      ],
    },
    {
      category: 'Digital Media Marketing',
      items: [
        'SEO & Social Media',
        'Paid ads (Google/Facebook)',
      ],
    },
  ];
}
