import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { SectorsComponent } from '../components/sectors/sectors.component';
import { company, sectors } from '../data/mock-data';

@Component({
  selector: 'app-sectors-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SectorsComponent],
  template: `
    <app-header
      [company]="company"
      title="Une expertise sectorielle au service des entreprises, de l'éducation, de la santé et des collectivités"
      description="Nos équipes accompagnent des organisations aux besoins variés avec des modèles d'exploitation souples, responsables et pensés pour la satisfaction des convives et des usagers."
      [showActions]="false"
    ></app-header>

    <main>
      <app-sectors [sectors]="sectors"></app-sectors>
    </main>
  `
})
export class SectorsPageComponent {
  company = company;
  sectors = sectors;
}
