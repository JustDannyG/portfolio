import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslationService } from '../shared/services/translation.service';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss', './contactform.responive.component.scss'],
})
export class ContactformComponent {

  http = inject(HttpClient);
  private translationService = inject(TranslationService);
  readonly texts = this.translationService.selectSection('contact');

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
    this.sendContactRequest(ngForm);
  }

  private sendContactRequest(ngForm: NgForm): void {
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: () => this.resetForm(ngForm),
        error: (err) => this.handleSubmitError(err),
        complete: () => this.logSubmitComplete(),
      });
  }

  private resetForm(form: NgForm): void {
    form.resetForm();
  }

  private handleSubmitError(error: unknown): void {
    console.error(error);
  }

  private logSubmitComplete(): void {
    console.info('send post complete');
  }

  onConsentHover(state: boolean): void {
    if (this.privacyAccepted) {
      this.isHoveringConsent = false;
      return;
    }
    this.isHoveringConsent = state;
  }
}
