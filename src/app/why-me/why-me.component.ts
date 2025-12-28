import { Component, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { TranslationService } from '../shared/services/translation.service';
import { ScrollRevealDirective } from '../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './why-me.component.html',
  styleUrls: ['./why-me.component.scss', './why-me-responisve.component.scss'],
})
export class WhyMeComponent {
  private document = inject(DOCUMENT);
  private translationService = inject(TranslationService);
  readonly texts = this.translationService.selectSection('whyMe');

  scrollToContact() {
    const contactSection = this.document.getElementById('contact');

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
