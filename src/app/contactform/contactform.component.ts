import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  };
  privacyAccepted = false;
  isHoveringConsent = false;
  isEmailActive = false;
  isEmailSelected = false;
  isPhoneHover = false;

  mailTest = true;

  post = {
    endPoint: 'https://danny-gruchmann.developerakademie.net/abschluss-projekt/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setEmailActive(state: boolean) {
    if (this.isEmailSelected) {
      return;
    }
    this.isEmailActive = state;
  }

  setEmailSelected(): void {
    if (this.isEmailSelected) {
      return;
    }
    this.isEmailSelected = true;
    this.isEmailActive = false;
  }

  onSubmit(ngForm: NgForm) {
    if (!this.privacyAccepted) {
      return;
    }

    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

  onConsentHover(state: boolean): void {
    if (this.privacyAccepted) {
      this.isHoveringConsent = false;
      return;
    }
    this.isHoveringConsent = state;
  }
}
