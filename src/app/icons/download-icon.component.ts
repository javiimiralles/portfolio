import { Component } from '@angular/core';

@Component({
  selector: 'app-download-icon',
  standalone: true,
  imports: [],
  template: `
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
      />
    </svg>
  `,
})
export class DownloadIconComponent {}
