import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { TranslationService } from '../shared/services/translation.service';
import { SuccsessfullySentComponent } from '../succsessfully-sent/succsessfully-sent.component';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, SuccsessfullySentComponent, RouterLink],
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss', './contactform.responive.component.scss'],
})
export class ContactformComponent implements OnDestroy {

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
  isSuccessOverlayVisible = false;
  isSuccessOverlayClosing = false;
  private overlayTimeoutId?: ReturnType<typeof setTimeout>;
  private overlayRemovalTimeoutId?: ReturnType<typeof setTimeout>;

  mailTest = true;

  post = {
    endPoint: 'http://danny-gruchmann.de/angular-projects/danny-gruchmann/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
      },
      responseType: 'text' as 'json',
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
    if (!ngForm) {
      return;
    }
    this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
      .pipe(finalize(() => this.resetForm(ngForm)))
      .subscribe({
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
    this.openSuccessOverlay();
  }

  onConsentHover(state: boolean): void {
    if (this.privacyAccepted) {
      this.isHoveringConsent = false;
      return;
    }
    this.isHoveringConsent = state;
  }

  openSuccessOverlay(): void {
    this.isSuccessOverlayClosing = false;
    this.isSuccessOverlayVisible = true;
    this.restartOverlayTimeout();
  }

  closeSuccessOverlay(): void {
    if (!this.isSuccessOverlayVisible || this.isSuccessOverlayClosing) {
      return;
    }
    this.isSuccessOverlayClosing = true;
    this.clearOverlayTimeout();
    this.overlayRemovalTimeoutId = setTimeout(() => {
      this.isSuccessOverlayVisible = false;
      this.isSuccessOverlayClosing = false;
      this.clearOverlayRemovalTimeout();
    }, 300);
  }

  handleSendButtonClick(form: NgForm): void {
    if (!form?.valid || !this.privacyAccepted) {
      return;
    }
    this.openSuccessOverlay();
  }

  ngOnDestroy(): void {
    this.clearOverlayTimeout();
    this.clearOverlayRemovalTimeout();
  }

  private restartOverlayTimeout(): void {
    this.clearOverlayTimeout();
    this.clearOverlayRemovalTimeout();
    this.overlayTimeoutId = setTimeout(() => this.closeSuccessOverlay(), 1500);
  }

  private clearOverlayTimeout(): void {
    if (this.overlayTimeoutId) {
      clearTimeout(this.overlayTimeoutId);
      this.overlayTimeoutId = undefined;
    }
  }

  private clearOverlayRemovalTimeout(): void {
    if (this.overlayRemovalTimeoutId) {
      clearTimeout(this.overlayRemovalTimeoutId);
      this.overlayRemovalTimeoutId = undefined;
    }
  }
}
