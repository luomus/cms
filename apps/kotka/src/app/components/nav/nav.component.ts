import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kotka-nav',
  templateUrl: './nav.component.html',
  styles: [
    `
      :host {
        display: block;
      }
      .nav-link {
        cursor: pointer;
        padding: 0.7rem 1rem;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {

  isCollapsed = true;

}
