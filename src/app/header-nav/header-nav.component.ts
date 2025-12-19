import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Language, TranslationService } from '../shared/services/translation.service';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss', './header-responsive.component.scss']
})
export class HeaderNavComponent {
  private document = inject(DOCUMENT);
  private translationService = inject(TranslationService);
  readonly navigationTexts = this.translationService.selectSection('navigation');
  activeNavLink: 'why' | 'skills' | 'projects' | 'contact' | null = null;

  get activeLanguage(): Language {
    return this.translationService.currentLanguage;
  }

  get navigation() {
    return this.navigationTexts();
  }

  setLanguage(language: Language) {
    this.translationService.setLanguage(language);
  }

  setActiveNavLink(link: 'why' | 'skills' | 'projects' | 'contact') {
    this.activeNavLink = link;
  }

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
