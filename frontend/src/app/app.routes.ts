import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page.component';
import { ServicesPageComponent } from './pages/services-page.component';
import { SectorsPageComponent } from './pages/sectors-page.component';
import { ContactPageComponent } from './pages/contact-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Accueil | ServiFrance Solutions' },
  { path: 'services', component: ServicesPageComponent, title: 'Services | ServiFrance Solutions' },
  { path: 'secteurs', component: SectorsPageComponent, title: 'Secteurs | ServiFrance Solutions' },
  { path: 'contact', component: ContactPageComponent, title: 'Contact | ServiFrance Solutions' },
  { path: '**', redirectTo: '' }
];
