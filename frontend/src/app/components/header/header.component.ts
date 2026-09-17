import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Company } from '../../models/site-content.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="hero">
      <nav class="navbar">
        <div class="logo">{{ company.name }}</div>
        <div class="nav-links">
          <a href="#services">Services</a>
          <a href="#sectors">Secteurs</a>
          <a href="#commitments">Engagements</a>
          <a href="#news">Actualités</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div class="hero-content">
        <p class="eyebrow">{{ company.tagline }}</p>
        <h1>{{ company.heroTitle }}</h1>
        <p>{{ company.heroDescription }}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#services">Découvrir nos services</a>
          <a class="btn btn-secondary" href="#contact">Nous contacter</a>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  @Input({ required: true }) company!: Company;
}
