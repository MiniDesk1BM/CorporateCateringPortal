import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sector } from '../../models/site-content.model';

@Component({
  selector: 'app-sectors',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section section-alt" id="sectors">
      <div class="section-heading">
        <p class="eyebrow">Secteurs desservis</p>
        <h2>Une présence au service des entreprises et des collectivités</h2>
      </div>
      <div class="sector-list">
        <article class="sector-item" *ngFor="let sector of sectors">
          <h3>{{ sector.name }}</h3>
          <p>{{ sector.description }}</p>
        </article>
      </div>
    </section>
  `
})
export class SectorsComponent {
  @Input({ required: true }) sectors: Sector[] = [];
}
