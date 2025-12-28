import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

type ScrollRevealDirection = 'left' | 'right' | 'up' | 'down' | 'none';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  @Input('appScrollReveal') direction: ScrollRevealDirection | undefined;
  @Input() appScrollRevealOnce = true;
  @Input() appScrollRevealDelay = 0;
  @Input() appScrollRevealRootMargin = '0px 0px -10% 0px';
  @Input() appScrollRevealThreshold = 0.25;
  @Input() appScrollRevealScale = 1;

  private observer?: IntersectionObserver;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this.applyBaseClasses();

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      this.showImmediately();
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.show(entry.target as HTMLElement);
            if (this.appScrollRevealOnce) {
              this.observer?.unobserve(entry.target);
            }
          } else if (!this.appScrollRevealOnce) {
            (entry.target as HTMLElement).classList.remove('reveal--visible');
          }
        });
      },
      {
        rootMargin: this.appScrollRevealRootMargin,
        threshold: this.appScrollRevealThreshold,
      },
    );

    this.observer.observe(this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private applyBaseClasses() {
    const element = this.host.nativeElement;
    element.classList.add('reveal');
    const direction = this.normalizeDirection();
    if (direction !== 'none') {
      element.classList.add(`reveal--from-${direction}`);
    }

    if (this.appScrollRevealDelay) {
      element.style.setProperty('--reveal-delay', this.toMs(this.appScrollRevealDelay));
    }

    if (this.appScrollRevealScale !== 1) {
      element.style.setProperty('--reveal-scale', `${this.appScrollRevealScale}`);
    }
  }

  private normalizeDirection(): ScrollRevealDirection {
    const dir = this.direction ?? 'up';
    if (dir === 'left' || dir === 'right' || dir === 'up' || dir === 'down' || dir === 'none') {
      return dir;
    }
    return 'up';
  }

  private show(element: HTMLElement) {
    element.classList.add('reveal--visible');
  }

  private showImmediately() {
    this.show(this.host.nativeElement);
  }

  private toMs(value: number): string {
    return value >= 0 ? `${value}ms` : '0ms';
  }
}
