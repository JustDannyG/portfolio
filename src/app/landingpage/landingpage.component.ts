import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileMenuService } from '../mobile-menu/mobile-menu.service';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';
import { HeaderNavComponent } from '../header-nav/header-nav.component';
import { WhyMeComponent } from '../why-me/why-me.component';
import { MyskillsComponent } from '../myskills/myskills.component';
import { MyprojectsComponent } from '../myprojects/myprojects.component';
import { ReviewTeamComponent } from '../review-team/review-team.component';
import { ContactformComponent } from '../contactform/contactform.component';
import { FooterComponent } from '../footer/footer.component';
import { TranslationService } from '../shared/services/translation.service';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [
    CommonModule,
    MobileMenuComponent,
    HeaderNavComponent,
    WhyMeComponent,
    MyskillsComponent,
    MyprojectsComponent,
    ReviewTeamComponent,
    ContactformComponent,
    FooterComponent
  ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {
  private translationService = inject(TranslationService);
  readonly isMobileMenuOpen$ = this.mobileMenuService.isOpen$;
  readonly landingTexts = this.translationService.selectSection('landing');
  readonly navigationTexts = this.translationService.selectSection('navigation');

  constructor(private mobileMenuService: MobileMenuService) {}

  scrollToWhyMe() {
    const target = document.getElementById('why-me');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleMobileMenu() {
    this.mobileMenuService.toggle();
  }
}
