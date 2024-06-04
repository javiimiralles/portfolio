import { Component } from '@angular/core';

@Component({
  selector: 'app-code-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
      />
    </svg>
  `,
})
export class CodeIconComponent {}
