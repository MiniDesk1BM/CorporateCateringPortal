import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Company } from '../../models/site-content.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header class="hero">
      <nav class="navbar">
        <a class="logo" routerLink="/">{{ company.name }}</a>
        <div class="nav-links">
          <a routerLink="/">Accueil</a>
          <a routerLink="/services">Services</a>
          <a routerLink="/secteurs">Secteurs</a>
          <a routerLink="/contact">Contact</a>
        </div>
      </nav>

      <div class="hero-content">
        <p class="eyebrow">{{ company.tagline }}</p>
        <h1>{{ title || company.heroTitle }}</h1>
        <p>{{ description || company.heroDescription }}</p>
        <div class="hero-actions" *ngIf="showActions">
          <a class="btn btn-primary" routerLink="/services">Découvrir nos services</a>
          <a class="btn btn-secondary" routerLink="/contact">Nous contacter</a>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  @Input({ required: true }) company!: Company;
  @Input() title?: string;
  @Input() description?: string;
  @Input() showActions = true;
}
