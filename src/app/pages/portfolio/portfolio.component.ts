import { Component } from '@angular/core';
import { ContactComponent } from '../../components/contact/contact.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { HomeComponent } from '../../components/home/home.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { SkillsComponent } from '../../components/skills/skills.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    NavbarComponent,
    HomeComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
  ],
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {

}
