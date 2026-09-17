import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { ServicesComponent } from '../components/services/services.component';
import { CommitmentsComponent } from '../components/commitments/commitments.component';
import { company, services } from '../data/mock-data';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ServicesComponent, CommitmentsComponent],
  template: `
    <app-header
      [company]="company"
      title="Des services de restauration collective et multiservices adaptés à vos environnements"
      description="Nous concevons des offres sur mesure pour les entreprises, établissements publics et collectivités, avec une exigence de qualité, de durabilité et d'efficacité opérationnelle."
      [showActions]="false"
    ></app-header>

    <main>
      <app-services [services]="services"></app-services>
      <app-commitments></app-commitments>
    </main>
  `
})
export class ServicesPageComponent {
  company = company;
  services = services;
}
