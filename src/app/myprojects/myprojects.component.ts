import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, TranslationService } from '../shared/services/translation.service';

@Component({
  selector: 'app-myprojects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myprojects.component.html',
  styleUrl: './myprojects.component.scss'
})
export class MyprojectsComponent {
  private translationService = inject(TranslationService);
  readonly texts = this.translationService.selectSection('myProjects');
  activeProject: number = 1;

  get projects(): ReadonlyArray<Project> {
    return this.texts().projects;
  }

  get copy() {
    return this.texts();
  }

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
