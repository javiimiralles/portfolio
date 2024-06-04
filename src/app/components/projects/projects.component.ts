import { Component } from '@angular/core';
import { AngularIconComponent } from '../../icons/angular-icon.component';
import { IonicIconComponent } from '../../icons/ionic-icon.component';
import { NodeJsIconComponent } from '../../icons/nodejs-icon.component';
import { MongoDBIconComponent } from '../../icons/mongodb-icon.component';
import { ArrowUpSquareIconComponent } from '../../icons/arrow-up-square-icon.component';
import { ThreeJsIconComponent } from '../../icons/threejs-icon.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [AngularIconComponent, IonicIconComponent, NodeJsIconComponent, MongoDBIconComponent, ArrowUpSquareIconComponent, ThreeJsIconComponent],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {

  constructor(private router: Router) {}

  showProjectDetails(projectIndex: number) {
    this.router.navigate(['/gallery'], { queryParams: { projectIndex } })
  }

}
