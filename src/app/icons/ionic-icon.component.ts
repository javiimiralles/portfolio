import { Component } from '@angular/core';

@Component({
  selector: 'app-ionic-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 48 48"
    >
      <circle cx="24" cy="24" r="9" fill="#448aff"></circle>
      <circle cx="37" cy="11" r="4" fill="#448aff"></circle>
      <path
        fill="#448aff"
        d="M41.706,14.715c-0.842,1.064-2.034,1.836-3.405,2.139C39.379,19.007,40,21.429,40,24	c0,8.837-7.163,16-16,16S8,32.837,8,24S15.163,8,24,8c2.571,0,4.993,0.621,7.145,1.699c0.303-1.371,1.075-2.564,2.139-3.405	C30.509,4.835,27.354,4,24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20s20-8.954,20-20C44,20.646,43.165,17.491,41.706,14.715	z"
      ></path>
    </svg>
  `,
})
export class IonicIconComponent {}