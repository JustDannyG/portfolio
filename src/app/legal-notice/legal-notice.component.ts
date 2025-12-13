import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderNavComponent } from '../header-nav/header-nav.component';
import { FooterComponent } from '../footer/footer.component';
import { MobileMenuService } from '../mobile-menu/mobile-menu.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderNavComponent, FooterComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent implements OnInit {
  private document = inject(DOCUMENT);
  constructor(private mobileMenuService: MobileMenuService) {}

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
