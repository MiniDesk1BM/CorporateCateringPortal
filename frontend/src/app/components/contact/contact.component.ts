import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Company } from '../../models/site-content.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section contact-section" id="contact">
      <div class="section-heading">
        <p class="eyebrow">Contact</p>
        <h2>Parlons de votre projet</h2>
      </div>
      <div class="contact-grid">
        <div>
          <p>{{ company.contactText }}</p>
          <ul class="contact-list">
            <li><strong>Email :</strong> contact@entreprise-exemple.fr</li>
            <li><strong>Téléphone :</strong> +33 1 80 00 00 00</li>
            <li><strong>Adresse :</strong> 12 avenue des Services, 75008 Paris</li>
          </ul>
        </div>
        <form class="contact-form">
          <input type="text" placeholder="Nom" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Organisation" />
          <textarea rows="5" placeholder="Votre besoin"></textarea>
          <button type="button" class="btn btn-primary">Envoyer</button>
        </form>
      </div>
    </section>
  `
})
export class ContactComponent {
  @Input({ required: true }) company!: Company;
}
