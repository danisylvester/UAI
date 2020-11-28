import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgControl, FormControlName } from '@angular/forms';
import { MailgunService } from '../mailgun.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  public submitted = false;

  constructor(private fb: FormBuilder, private mailgunService: MailgunService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: [null,
        Validators.required
      ],
      lastName: [null,
        Validators.required
      ],
      email: [null, [
        Validators.required,
        Validators.email
      ]],
      phoneNumber: [null, [
        Validators.required
      ]],
      message: null
    });
  }

  get firstName(): any {
    return this.contactForm.get('firstName');
  }
  get lastName(): any {
    return this.contactForm.get('lastName');
  }
  get email(): any {
    return this.contactForm.get('email');
  }
  get message(): any {
    return this.contactForm.get('message');
  }
  get phoneNumber(): any {
    return this.contactForm.get('phoneNumber');
  }

  popUpConfirmation(): void {
    const contactModal = document.getElementById('myModal');
    contactModal.style.display = 'block';
  }

  closeModalBtn(): void {
    const contactModal = document.getElementById('myModal');
    contactModal.style.display = 'none';
    this.submitted = true;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
      modal.style.display = 'none';
      this.submitted = true;
    }
  }

  sendAnotherMsg(): void {   
    this.submitted = false;
  }

  onSubmit(): void {
    this.mailgunService.sendEmail(
      'maria.sylvester10@gmail.com',
      'whoever@wherever.com',
      'Hello from angular!',
      'I am the best').subscribe( res => {
        console.log(res);
      }, (error) => {
        console.log(error);
      })
    console.warn(this.contactForm);
  }
}
