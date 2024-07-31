import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private el: ElementRef) { }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event): void {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar && !navbar.contains(event.target as Node)) {
      if (navbar.classList.contains('show')) {
        navbar.classList.remove('show');
      }
    }
  }

  closeNavbar(): void {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }
}


