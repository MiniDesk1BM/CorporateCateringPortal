import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { ContactComponent } from '../components/contact/contact.component';
import { company } from '../data/mock-data';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ContactComponent],
  template: `
    <app-header
      [company]="company"
      title="Échangeons sur votre projet de restauration collective ou de services aux sites"
      description="Nos équipes vous accompagnent pour imaginer une solution adaptée à votre organisation, à vos contraintes opérationnelles et à vos objectifs de qualité de service."
      [showActions]="false"
    ></app-header>

    <main>
      <app-contact [company]="company"></app-contact>
    </main>
  `
})
export class ContactPageComponent {
  company = company;
}
