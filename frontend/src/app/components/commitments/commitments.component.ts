import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-commitments',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section" id="commitments">
      <div class="section-heading">
        <p class="eyebrow">Engagements</p>
        <h2>Performance, responsabilité et expérience convive</h2>
      </div>
      <div class="commitments">
        <div>
          <h3>RSE et achats responsables</h3>
          <p>Nous valorisons des approvisionnements responsables, la réduction du gaspillage alimentaire et des pratiques durables sur l’ensemble de nos sites.</p>
        </div>
        <div>
          <h3>Innovation et digital</h3>
          <p>Des parcours simplifiés, une communication claire et une future plateforme connectée à des services métier hébergés sur Azure.</p>
        </div>
        <div>
          <h3>Qualité de service</h3>
          <p>Des offres adaptées à chaque typologie de client avec des indicateurs de qualité et de satisfaction.</p>
        </div>
      </div>
    </section>
  `
})
export class CommitmentsComponent {}
