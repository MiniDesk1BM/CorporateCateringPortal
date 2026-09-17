import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../models/site-content.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section" id="services">
      <div class="section-heading">
        <p class="eyebrow">Notre expertise</p>
        <h2>Des services pensés pour chaque organisation</h2>
      </div>
      <div class="card-grid">
        <article class="card" *ngFor="let service of services">
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <span class="pill">{{ service.highlight }}</span>
        </article>
      </div>
    </section>
  `
})
export class ServicesComponent {
  @Input({ required: true }) services: Service[] = [];
}
