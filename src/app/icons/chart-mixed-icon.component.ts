import { Component } from '@angular/core';

@Component({
  selector: 'app-chart-mixed-icon',
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
        d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5"
      />
    </svg>
  `,
})
export class ChartMixedIconComponent {}
