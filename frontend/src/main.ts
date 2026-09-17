import { company, services, sectors, news } from './mock-data';

const app = document.querySelector('app-root');

if (app) {
  app.innerHTML = `
    <header class="hero">
      <nav class="navbar">
        <div class="logo">${company.name}</div>
        <div class="nav-links">
          <a href="#services">Services</a>
          <a href="#sectors">Secteurs</a>
          <a href="#commitments">Engagements</a>
          <a href="#news">Actualités</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <div class="hero-content">
        <p class="eyebrow">${company.tagline}</p>
        <h1>${company.heroTitle}</h1>
        <p>${company.heroDescription}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#services">Découvrir nos services</a>
          <a class="btn btn-secondary" href="#contact">Nous contacter</a>
        </div>
      </div>
    </header>

    <main>
      <section class="section" id="services">
        <div class="section-heading">
          <p class="eyebrow">Notre expertise</p>
          <h2>Des services pensés pour chaque organisation</h2>
        </div>
        <div class="card-grid">
          ${services.map(service => `
            <article class="card">
              <h3>${service.title}</h3>
              <p>${service.description}</p>
              <span class="pill">${service.highlight}</span>
            </article>
          `).join('')}
        </div>
      </section>

      <section class="section section-alt" id="sectors">
        <div class="section-heading">
          <p class="eyebrow">Secteurs desservis</p>
          <h2>Une présence au service des entreprises et des collectivités</h2>
        </div>
        <div class="sector-list">
          ${sectors.map(sector => `
            <article class="sector-item">
              <h3>${sector.name}</h3>
              <p>${sector.description}</p>
            </article>
          `).join('')}
        </div>
      </section>

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

      <section class="section section-alt" id="news">
        <div class="section-heading">
          <p class="eyebrow">Actualités</p>
          <h2>Dernières informations</h2>
        </div>
        <div class="card-grid">
          ${news.map(item => `
            <article class="card news-card">
              <p class="news-date">${item.date}</p>
              <h3>${item.title}</h3>
              <p>${item.summary}</p>
            </article>
          `).join('')}
        </div>
      </section>

      <section class="section contact-section" id="contact">
        <div class="section-heading">
          <p class="eyebrow">Contact</p>
          <h2>Parlons de votre projet</h2>
        </div>
        <div class="contact-grid">
          <div>
            <p>${company.contactText}</p>
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
    </main>
  `;
}
