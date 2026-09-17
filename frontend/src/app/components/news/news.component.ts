import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsItem } from '../../models/site-content.model';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section section-alt" id="news">
      <div class="section-heading">
        <p class="eyebrow">Actualités</p>
        <h2>Dernières informations</h2>
      </div>
      <div class="card-grid">
        <article class="card news-card" *ngFor="let item of news">
          <p class="news-date">{{ item.date }}</p>
          <h3>{{ item.title }}</h3>
          <p>{{ item.summary }}</p>
        </article>
      </div>
    </section>
  `
})
export class NewsComponent {
  @Input({ required: true }) news: NewsItem[] = [];
}
