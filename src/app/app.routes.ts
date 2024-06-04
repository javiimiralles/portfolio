import { Routes } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

export const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '**', redirectTo: 'portfolio' }
];
