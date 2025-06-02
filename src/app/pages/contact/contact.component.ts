import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  submitted = false;
  success = false;

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      // Here, you can add code to send the form data to backend or email service
      this.success = true;
      this.contactForm.reset();
      this.submitted = false;
    }
  }
}
