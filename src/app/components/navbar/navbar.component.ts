import { Component, Input, OnInit } from '@angular/core';
import { DownloadIconComponent } from '../../icons/download-icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DownloadIconComponent, CommonModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  @Input() showBackButton: boolean = false;

  isDarkMode = false;
  darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>`

  lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>`

  ngOnInit(): void {
    if (localStorage['theme'] === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      this.isDarkMode = true;
    } else {
      document.documentElement.classList.remove('dark');
      this.isDarkMode = false;
    }
    this.switchTheme();
  }

  toggleMenu() {
    const navbarSticky = document.getElementById('navbar-sticky');
    if (navbarSticky) {
      navbarSticky.classList.toggle('hidden');
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.switchTheme();
  }

  switchTheme() {
    const switchToggle = document.querySelector('#switch-toggle');
    if (this.isDarkMode) {
      switchToggle?.classList.remove('bg-yellow-500','-translate-x-2')
      switchToggle?.classList.add('bg-gray-700','translate-x-full')
      setTimeout(() => {
        if(switchToggle != null) {
          switchToggle.innerHTML = this.darkIcon;
        }
        document.documentElement.classList.add('dark');
      }, 200);
    } else {
      switchToggle?.classList.add('bg-yellow-500','-translate-x-2')
      switchToggle?.classList.remove('bg-gray-700','translate-x-full')
      setTimeout(() => {
        if(switchToggle != null) {
          switchToggle.innerHTML = this.lightIcon;
        }
        document.documentElement.classList.remove('dark');
      }, 200);
    }
  }

  downloadCV() {
    const url = 'assets/CV_Javi.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.download = 'CV_Javi.pdf';
    link.click();
  }

}
