import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Review = {
  name: string;
  project: string;
  projectAccent: string;
  quote: string;
  linkLabel: string;
  linkHref: string;
};

@Component({
  selector: 'app-review-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review-team.component.html',
  styleUrl: './review-team.component.scss'
})
export class ReviewTeamComponent {
  reviews: Review[] = [
    {
      name: 'Sahra Mueller',
      project: 'Project DA Bubble',
      projectAccent: 'DA Bubble',
      quote: 'Coming soon...',
      linkLabel: 'LinkedIn Profile',
      linkHref: '#'
    },
    {
      name: 'James Rugman',
      project: 'Project Join',
      projectAccent: 'Join',
      quote: 'Coming soon...',
      linkLabel: 'LinkedIn Profile',
      linkHref: '#'
    },
    {
      name: 'Evelyn Marx',
      project: 'Project Join',
      projectAccent: 'Join',
      quote: 'Coming soon...',
      linkLabel: 'LinkedIn Profile',
      linkHref: '#'
    }
  ];
}
