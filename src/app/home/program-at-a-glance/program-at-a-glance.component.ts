import { Component, ElementRef, HostListener, QueryList, Renderer2, ViewChildren, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-program-at-a-glance',
  templateUrl: './program-at-a-glance.component.html',
  styleUrls: ['./program-at-a-glance.component.css']
})
export class ProgramAtAGlanceComponent {
  currentStep = 0;
  progress = 0;
  intervalId: any;

  steps = [
    {
      title: 'Unlock Your Potential',
      desc: 'Understand the core concepts and essential tools needed for front-end and back-end development.',
      image: '../../../assets/program-glance/unlockYourPotential.jpg'
    },
    {
      title: 'Learn from Experts',
      desc: 'Apply what you learn by building real-world projects, strengthening your skills.',
      image: '../../../assets/program-glance/learnFrom.jpg'
    },
    {
      title: 'Build Your Dream Career',
      desc: 'Get exposed to tools like Git, Docker, CI/CD, and follow best practices used by professionals.',
      image: '../../../assets/program-glance/buildYourDream.jpg'
    },
    {
      title: 'Shine with Live Demos',
      desc: 'Finish with a capstone project, interview prep, and job placement assistance.',
      image: '../../../assets/program-glance/shineOnDemo.jpg'
    },
    {
      title: 'Accelerate Your Success',
      desc: 'Get personalized guidance, resume reviews, and support from industry mentors.',
      image: '../../../assets/program-glance/accelerateSuccess.jpg'
    }
  ];

  ngOnInit(): void {
    this.startAutoLoop();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  setActiveStep(index: number): void {
    this.currentStep = index;
    this.resetProgress();
  }

  resetProgress(): void {
    this.progress = 0;
    // Use setTimeout to wait for Angular to render the DOM
    setTimeout(() => {
      this.progress = 100;
    }, 50); // Delay helps DOM render before setting width
  }
  

  startAutoLoop(): void {
    this.resetProgress();
    this.intervalId = setInterval(() => {
      this.currentStep = (this.currentStep + 1) % this.steps.length;
      this.resetProgress();
    }, 4000);
  }
}