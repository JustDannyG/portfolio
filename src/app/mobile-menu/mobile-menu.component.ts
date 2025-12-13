import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MobileMenuService } from './mobile-menu.service';

type NavLinkId = 'why' | 'skills' | 'projects' | 'contact';

interface MobileNavLink {
  id: NavLinkId;
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss'
})
export class MobileMenuComponent {
  readonly isOpen$ = this.mobileMenuService.isOpen$;
  activeLanguage: 'DE' | 'EN' = 'DE';
  activeNavLink: NavLinkId | null = null;
  readonly navLinks: MobileNavLink[] = [
    { id: 'why', label: 'Why me', fragment: 'why-me' },
    { id: 'skills', label: 'Skills', fragment: 'skills' },
    { id: 'projects', label: 'Projects', fragment: 'projects' },
    { id: 'contact', label: 'Contact', fragment: 'contact' }
  ];

  constructor(private mobileMenuService: MobileMenuService) {}

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

  setLanguage(language: 'DE' | 'EN') {
    this.activeLanguage = language;
  }
}
