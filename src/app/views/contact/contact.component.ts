
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBar} from '@angular/material/snack-bar';
import emailjs from '@emailjs/browser';

const SERVICE_ID: string = 'service_s4mnwj7';
const TEMPLATE_ID: string = 'contact_form';
const PUBLIC_KEY: string = 'yBmnKt51PdNvpsoaz';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule, MatIcon],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  sending = false;
  sent = false;
  error: string | null = null;

  mailto:string = "mailto:christiancook52@gmail.com";

  private _snackBar = inject(MatSnackBar);

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      subject: ['Reaching Out About Your Portfolio!', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) return;

    this.sending = true;
    this.error = null;

    const templateParams = {
      name: `${this.contactForm.value.firstName} ${this.contactForm.value.lastName}`,
      email: this.contactForm.value.email,
      time: new Date(),
      company: this.contactForm.value.company,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        this.sending = false;
        this.sent = true;

        this.contactForm.reset();
        this.formGroupDirective.resetForm();

        this.openSnackBar("Message Sent Successfully!", "OK");
      }, (err) => {
        this.sending = false;
        this.openSnackBar("ERROR: Failed to Send Message. Please try again, or send an email directly.", "OK");
        console.error('EmailJS Error:', err);
      });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
