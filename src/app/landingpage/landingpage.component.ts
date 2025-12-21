import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
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
  styleUrls: ['./landingpage.component.scss', './landingpage-responsive.component.scss'] 
})
export class LandingpageComponent implements AfterViewInit, OnDestroy {
  private translationService = inject(TranslationService);
  readonly isMobileMenuOpen$ = this.mobileMenuService.isOpen$;
  readonly landingTexts = this.translationService.selectSection('landing');
  readonly navigationTexts = this.translationService.selectSection('navigation');
  @ViewChild('navSentinel') navSentinel?: ElementRef<HTMLDivElement>;
  isNavbarFixed = false;
  private navObserver?: IntersectionObserver;
  private readonly handleResize = () => this.updateNavObserver();

  constructor(private mobileMenuService: MobileMenuService) {}

  ngAfterViewInit() {
    if (!this.navSentinel || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    this.updateNavObserver();
    window.addEventListener('resize', this.handleResize);
  }

  ngOnDestroy() {
    this.navObserver?.disconnect();
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  private getNavbarHeight(): number {
    const navElement = this.navSentinel?.nativeElement.nextElementSibling as HTMLElement | null;
    const measuredHeight = navElement?.offsetHeight ?? 0;
    if (measuredHeight > 0) {
      return measuredHeight;
    }

    if (typeof window === 'undefined') {
      return 104;
    }

    return window.innerWidth >= 1921 ? 140 : 104;
  }

  private updateNavObserver() {
    if (!this.navSentinel || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    this.navObserver?.disconnect();
    const rootMarginTop = this.getNavbarHeight();

    this.navObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        this.isNavbarFixed = entry ? !entry.isIntersecting : false;
      },
      {
        threshold: 0,
        rootMargin: `-${rootMarginTop}px 0px 0px 0px`
      }
    );

    this.navObserver.observe(this.navSentinel.nativeElement);
  }

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
