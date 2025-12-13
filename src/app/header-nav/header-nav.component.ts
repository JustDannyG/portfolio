import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss'
})
export class HeaderNavComponent {
  private document = inject(DOCUMENT);
  activeLanguage: 'DE' | 'EN' = 'DE';
  activeNavLink: 'why' | 'skills' | 'projects' | 'contact' | null = null;
  navInteractionStarted = false;

  setLanguage(language: 'DE' | 'EN') {
    this.activeLanguage = language;
  }

  setActiveNavLink(link: 'why' | 'skills' | 'projects' | 'contact') {
    this.activeNavLink = link;
    this.navInteractionStarted = true;
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
