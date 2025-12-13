import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type ProjectButton = {
  label: string;
  href: string;
  target?: '_self' | '_blank';
  variant?: 'primary' | 'secondary';
};

type ProjectInfo = {
  title: string;
  description: string;
};

type ProjectTechnology = {
  name: string;
  icon: string;
};

type Project = {
  id: number;
  tabLabel: string;
  name: string;
  duration?: string;
  infoItems: ProjectInfo[];
  technologies: ProjectTechnology[];
  image: string;
  buttons: ProjectButton[];
};

@Component({
  selector: 'app-myprojects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myprojects.component.html',
  styleUrl: './myprojects.component.scss'
})
export class MyprojectsComponent {
  projects: Project[] = [
    {
      id: 1,
      tabLabel: '1. El Pollo Loco',
      name: 'El Pollo Loco',
      duration: 'Duration: 4 weeks',
      infoItems: [
        {
          title: 'About the project',
          description:
            'An energetic jump-and-run adventure starring Pepé in the Mexican desert. The game features animated enemies, parallax backgrounds, and hidden collectibles scattered across handcrafted levels.'
        },
        {
          title: 'How I have organised my work process',
          description:
            'I separated rendering, physics, and state management so I could iterate quickly on gameplay tweaks. Reusable helpers handled collision logic, level scripting, sound triggers, and UI states which kept the repo tidy and review-friendly.'
        },
        {
          title: 'What I have learnt',
          description:
            'Shipping El Pollo Loco improved my sprite animation workflow, timing of attack patterns, and performance profiling. I dug deeper into modern JavaScript patterns to optimize loops and add delightful micro interactions.'
        }
      ],
      technologies: [
        { name: 'HTML', icon: 'assets/img/my-projects/Frame 500.svg' },
        { name: 'JavaScript', icon: 'assets/img/my-projects/Javascript.svg' },
        { name: 'CSS', icon: 'assets/img/my-projects/Frame 501.svg' }
      ],
      image: 'assets/img/my-projects/Bildschirmfoto 2025-12-07 um 11.18.25.png',
      buttons: [
        { label: 'Live Test', href: '#', target: '_blank', variant: 'primary' },
        { label: 'GitHub', href: 'https://github.com/JustDannyG/El-Pollo-Loco', target: '_blank', variant: 'secondary' }
      ]
    },
    {
      id: 2,
      tabLabel: '2. Join',
      name: 'Join',
      duration: 'Duration: 5 weeks',
      infoItems: [
        {
          title: 'About the project',
          description:
            'A collaborative Kanban board inspired by modern productivity tools. Drag-and-drop lets teammates track tasks across columns, assign priorities, and add contacts all in one view.'
        },
        {
          title: 'How I have organised my work process',
          description:
            'We split the board logic, contact management, and UI polish into reusable modules. Shared TypeScript interfaces and naming conventions kept the codebase consistent and made reviews effortless.'
        },
        {
          title: 'My group work experience',
          description:
            'Join was built in a three-person crew. We paired on bigger features like drag-and-drop and auth so everyone learned together, and we regularly swapped tasks to balance workload and unblock each other.'
        }
      ],
      technologies: [
        { name: 'HTML', icon: 'assets/img/my-projects/Frame 500.svg' },
        { name: 'JavaScript', icon: 'assets/img/my-projects/Javascript.svg' },
        { name: 'CSS', icon: 'assets/img/my-projects/Frame 501.svg' }
      ],
      image: 'assets/img/my-projects/Bildschirmfoto 2025-12-07 um 12.46.22.png',
      buttons: [
        { label: 'Live Test', href: '#', target: '_blank', variant: 'primary' },
        { label: 'GitHub', href: 'https://github.com/JustDannyG/Join', target: '_blank', variant: 'secondary' }
      ]
    },
    {
      id: 3,
      tabLabel: '3. DA Bubble',
      name: 'DA Bubble',
      duration: 'Coming soon...',
      infoItems: [
        {
          title: 'About the project',
          description: 'Coming soon...'
        }
      ],
      technologies: [],
      image: '',
      buttons: []
    }
  ];

  activeProject: number = 1;

  selectProject(id: number): void {
    this.activeProject = id;
  }

  get selectedProject() {
    return this.projects.find(project => project.id === this.activeProject) ?? null;
  }

  formatTechnologies(project: Project): string {
    return project.technologies.map(tech => tech.name).join(', ');
  }

}
