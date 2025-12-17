import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Review, TranslationService } from '../shared/services/translation.service';

@Component({
  selector: 'app-review-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review-team.component.html',
  styleUrl: './review-team.component.scss'
})
export class ReviewTeamComponent {
  private translationService = inject(TranslationService);
  readonly texts = this.translationService.selectSection('reviewTeam');

  get copy() {
    return this.texts();
  }

  get reviews(): ReadonlyArray<Review> {
    return this.texts().reviews;
  }
}
