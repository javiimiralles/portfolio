import { Component } from '@angular/core';
import { GitHubIconComponent } from '../../icons/github-icon.component';
import { LinkedInIconComponent } from '../../icons/linkedin-icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [GitHubIconComponent, LinkedInIconComponent],
  templateUrl: './contact.component.html'
})
export class ContactComponent {

}
