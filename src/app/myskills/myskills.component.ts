import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslationService } from '../shared/services/translation.service';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [],
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.scss', './myskills-responsive.component.scss'] 
})
export class MyskillsComponent {
  private document = inject(DOCUMENT);
  private translationService = inject(TranslationService);
  readonly texts = this.translationService.selectSection('mySkills');

  scrollToContact() {
    const contactSection = this.document.getElementById('contact');

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
