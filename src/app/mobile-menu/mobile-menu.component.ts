import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MobileMenuService } from './mobile-menu.service';
import { Language, TranslationService } from '../shared/services/translation.service';

type NavLinkId = 'why' | 'skills' | 'projects' | 'contact';

interface MobileNavLink {
  id: NavLinkId;
  fragment: string;
}

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss', './mobile-menu-responisve.component.scss'] 
})
export class MobileMenuComponent {
  readonly isOpen$ = this.mobileMenuService.isOpen$;
  private translationService = inject(TranslationService);
  readonly navigationTexts = this.translationService.selectSection('navigation');
  activeNavLink: NavLinkId | null = null;
  readonly navLinks: MobileNavLink[] = [
    { id: 'why', fragment: 'why-me' },
    { id: 'skills', fragment: 'skills' },
    { id: 'projects', fragment: 'projects' },
    { id: 'contact', fragment: 'contact' }
  ];
  constructor(private mobileMenuService: MobileMenuService) {}

  get activeLanguage(): Language {
    return this.translationService.currentLanguage;
  }

  get navigation() {
    return this.navigationTexts();
  }

  @HostListener('document:keydown.escape')
  handleEscape() {
    if (this.mobileMenuService.isOpen) {
      this.closeMenu();
    }
  }

  closeMenu() {
    this.mobileMenuService.close();
  }

  handleNavClick(linkId: NavLinkId) {
    this.activeNavLink = linkId;
    this.closeMenu();
  }

  setLanguage(language: Language) {
    this.translationService.setLanguage(language);
  }
}
