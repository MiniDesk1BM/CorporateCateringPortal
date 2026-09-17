import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './components/services/services.component';
import { SectorsComponent } from './components/sectors/sectors.component';
import { CommitmentsComponent } from './components/commitments/commitments.component';
import { NewsComponent } from './components/news/news.component';
import { ContactComponent } from './components/contact/contact.component';
import { company, news, sectors, services } from './data/mock-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ServicesComponent,
    SectorsComponent,
    CommitmentsComponent,
    NewsComponent,
    ContactComponent
  ],
  template: `
    <app-header [company]="company"></app-header>

    <main>
      <app-services [services]="services"></app-services>
      <app-sectors [sectors]="sectors"></app-sectors>
      <app-commitments></app-commitments>
      <app-news [news]="news"></app-news>
      <app-contact [company]="company"></app-contact>
    </main>
  `
})
export class AppComponent {
  company = company;
  services = services;
  sectors = sectors;
  news = news;
}
