import { Component } from '@angular/core';
import { GitHubIconComponent } from '../../icons/github-icon.component';
import { LinkedInIconComponent } from '../../icons/linkedin-icon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GitHubIconComponent, LinkedInIconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
