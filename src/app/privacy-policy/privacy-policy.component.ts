import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderNavComponent } from '../header-nav/header-nav.component';
import { FooterComponent } from '../footer/footer.component';
import { MobileMenuService } from '../mobile-menu/mobile-menu.service';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';
import { TranslationService } from '../shared/services/translation.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderNavComponent, MobileMenuComponent, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['../legal-notice/legal-notice.component.scss', '../legal-notice/legal-notice-responisve.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  private document = inject(DOCUMENT);
  private translationService = inject(TranslationService);
  readonly isMobileMenuOpen$ = this.mobileMenuService.isOpen$;
  readonly navigationTexts = this.translationService.selectSection('navigation');
  readonly privacyTexts = this.translationService.selectSection('privacyPolicy');
  constructor(private mobileMenuService: MobileMenuService) {}

  get navigationCopy() {
    return this.navigationTexts();
  }

  get privacyCopy() {
    return this.privacyTexts();
  }

  bodyParagraphs(section: unknown): ReadonlyArray<string> {
    const body = (section as { body?: string | ReadonlyArray<string> })?.body;
    if (!body) {
      return [];
    }
    if (typeof body === 'string') {
      return [body];
    }
    return body;
  }

  afterListParagraphs(section: unknown): ReadonlyArray<string> {
    const afterList = (section as { afterList?: string | ReadonlyArray<string> })?.afterList;
    if (!afterList) {
      return [];
    }
    if (typeof afterList === 'string') {
      return [afterList];
    }
    return afterList;
  }

  ngOnInit(): void {
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

  toggleMobileMenu() {
    this.mobileMenuService.toggle();
  }
}
