import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../shared/services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private document = inject(DOCUMENT);
  private translationService = inject(TranslationService);
  readonly footerTexts = this.translationService.selectSection('footer');
  readonly navigationTexts = this.translationService.selectSection('navigation');

  scrollToTop() {
    const win = this.document.defaultView;

    if (win && typeof win.scrollTo === 'function') {
      win.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (this.document.documentElement) {
        this.document.documentElement.scrollTop = 0;
      }
      if (this.document.body) {
        this.document.body.scrollTop = 0;
      }
    }
  }
}
