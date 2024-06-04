import { Component } from '@angular/core';
import { UsersGroupIconComponent } from '../../icons/users-group-icon.component';
import { CodeIconComponent } from '../../icons/code-icon.component';
import { ChartMixedIconComponent } from '../../icons/chart-mixed-icon.component';
import { CheckCircleIconComponent } from '../../icons/check-circle-icon.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [UsersGroupIconComponent, CodeIconComponent, ChartMixedIconComponent, CheckCircleIconComponent],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {

}
