import { Component } from '@angular/core';
import { IonicIconComponent } from '../../icons/ionic-icon.component';
import { NodeJsIconComponent } from '../../icons/nodejs-icon.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [IonicIconComponent, NodeJsIconComponent],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {

}
