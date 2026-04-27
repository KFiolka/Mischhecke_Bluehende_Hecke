import React, { useState, useEffect, useRef } from 'react';
import { Trees, Flower2, Sun, Leaf, Ruler, Bug, ExternalLink, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import './index.css';

const plants = [
  { id: 1, name: 'Liguster', type: 'Immergrün', icon: Trees, color: 'var(--color-evergreen)', url: 'https://www.baumschule-horstmann.de/shop/exec/product/55/1886/gemeiner-liguster-gewoehnlicher-liguster.html', img: 'https://cdn.baumschule-horstmann.de/bilder/popup/gemeiner-liguster-gewoehnlicher-liguster-m001886_h_0.jpg' },
  { id: 2, name: 'Brautspiere', type: 'Frühling', icon: Flower2, color: 'var(--color-spring)', url: 'https://www.baumschule-horstmann.de/shop/exec/product/730/87/brautspiere-schneespiere.html', img: 'https://cdn.baumschule-horstmann.de/bilder/popup/brautspiere-schneespiere-m000087_h_0.jpg' },
  { id: 3, name: 'Sandrose', type: 'Sommer', icon: Sun, color: 'var(--color-summer)', url: 'https://www.baumschule-horstmann.de/shop/exec/product/89/66/sandrose-carolina-rose-wiesenrose.html', img: 'https://cdn.baumschule-horstmann.de/bilder/popup/sandrose-carolina-rose-wiesenrose-m000066_h_0.jpg' },
  { id: 4, name: 'Kupfer-Felsenbirne', type: 'Frühling', icon: Flower2, color: 'var(--color-spring)', url: 'https://www.baumschule-horstmann.de/shop/exec/product/687/1930/kupfer-felsenbirne.html', img: 'https://cdn.baumschule-horstmann.de/bilder/popup/kupfer-felsenbirne-amelanchier-felsenbirne-m001930_h_0.jpg' },
  { id: 5, name: 'Schmetterlingsflieder (Lila)', type: 'Sommer', icon: Sun, color: 'var(--color-summer)', url: 'https://www.baumschule-horstmann.de/shop/exec/product/723/1934/schmetterlingsflieder-sommerflieder-black-knight.html', img: 'https://cdn.baumschule-horstmann.de/bilder/popup/sommerflieder-schmetterlingsstrauch-black-knight-m001934_h_0.jpg' },
  { id: 6, name: 'Feuerdorn (Orange)', type: 'Immergrün', icon: Trees, color: 'var(--color-evergreen)', url: 'https://www.baumschule-horstmann.de/shop/exec/product/732/158/feuerdorn-orange-glow.html', img: 'https://cdn.baumschule-horstmann.de/bilder/popup/feuerdorn-orange-glow-m000158_h_0.jpg' },
  { id: 7, name: 'Rote Heckenberberitze', type: 'Herbst', icon: Leaf, color: 'var(--color-autumn)', url: 'https://www.baumschule-horstmann.de/shop/exec/product/729/3894/blutberberitze-rote-heckenberberitze-atropurpurea.html', img: 'https://cdn.baumschule-horstmann.de/bilder/popup/blutberberitze-rote-heckenberberitze-atropurpurea-m003894_h_0.jpg' },
  { id: 8, name: 'Weißdorn', type: 'Frühling', icon: Flower2, color: 'var(--color-spring)', url: 'https://www.baumschule-horstmann.de/shop/exec/product/687/24/eingriffeliger-weissdorn.html', img: 'https://cdn.baumschule-horstmann.de/bilder/popup/eingriffeliger-weissdorn-m000024_h_0.jpg' },
  { id: 9, name: 'Weigelie', type: 'Herbst', icon: Leaf, color: 'var(--color-autumn)', url: 'https://www.baumschule-horstmann.de/shop/exec/product/728/2280/gold-weigelie-gelbbluetige-weigelie.html', img: 'https://cdn.baumschule-horstmann.de/bilder/popup/gold-weigelie-gelbbluetige-weigelie-middendorffiana-m002280_h_0.jpg' },
  { id: 10, name: 'Liguster', type: 'Immergrün', icon: Trees, color: 'var(--color-evergreen)', url: 'https://www.baumschule-horstmann.de/shop/exec/product/55/1886/gemeiner-liguster-gewoehnlicher-liguster.html', img: 'https://cdn.baumschule-horstmann.de/bilder/popup/gemeiner-liguster-gewoehnlicher-liguster-m001886_h_0.jpg' },
  { id: 11, name: 'Schwarzer Holunder', type: 'Herbst', icon: Leaf, color: 'var(--color-autumn)', url: 'https://www.baumschule-horstmann.de/shop/exec/product/687/80/fliederbeere-schwarzer-holunder.html', img: 'https://cdn.baumschule-horstmann.de/bilder/popup/fliederbeere-schwarzer-holunder-m000080_h_0.jpg' },
  { id: 12, name: 'Sandrose', type: 'Sommer', icon: Sun, color: 'var(--color-summer)', url: 'https://www.baumschule-horstmann.de/shop/exec/product/89/66/sandrose-carolina-rose-wiesenrose.html', img: 'https://cdn.baumschule-horstmann.de/bilder/popup/sandrose-carolina-rose-wiesenrose-m000066_h_0.jpg' },
  { id: 13, name: 'Brautspiere', type: 'Frühling', icon: Flower2, color: 'var(--color-spring)', url: 'https://www.baumschule-horstmann.de/shop/exec/product/730/87/brautspiere-schneespiere.html', img: 'https://cdn.baumschule-horstmann.de/bilder/popup/brautspiere-schneespiere-m000087_h_0.jpg' },
  { id: 14, name: 'Strauch-Zwergmispel', type: 'Herbst', icon: Leaf, color: 'var(--color-autumn)', url: 'https://www.baumschule-horstmann.de/shop/exec/product/729/8086/faecherzwergmispel.html', img: 'https://cdn.baumschule-horstmann.de/bilder/popup/faecherzwergmispel-m008086_h_0.jpg' },
  { id: 15, name: 'Schmetterlingsflieder (Weiß)', type: 'Sommer', icon: Sun, color: 'var(--color-summer)', url: 'https://www.baumschule-horstmann.de/shop/exec/product/723/124/sommerflieder-schmetterlingsstrauch-white-profusion.html', img: 'https://cdn.baumschule-horstmann.de/bilder/popup/sommerflieder-schmetterlingsstrauch-white-profusion-m000124_h_0.jpg' },
  { id: 16, name: 'Blutpflaume (Zentrum)', type: 'Herbst', icon: Leaf, color: 'var(--color-autumn)', url: 'https://www.baumschule-horstmann.de/shop/exec/product/729/2164/blutpflaume-nigra.html', img: 'https://cdn.baumschule-horstmann.de/bilder/popup/blutpflaume-nigra-m002164_h_0.jpg' },
  { id: 17, name: 'Feuerdorn (Rot)', type: 'Immergrün', icon: Trees, color: 'var(--color-evergreen)', url: 'https://www.baumschule-horstmann.de/shop/exec/product/732/157/feuerdorn-red-column.html', img: 'https://cdn.baumschule-horstmann.de/bilder/popup/feuerdorn-red-column-m000157_h_0.jpg' },
  { id: 18, name: 'Kupfer-Felsenbirne', type: 'Frühling', icon: Flower2, color: 'var(--color-spring)', url: 'https://www.baumschule-horstmann.de/shop/exec/product/687/1930/kupfer-felsenbirne.html', img: 'https://cdn.baumschule-horstmann.de/bilder/popup/kupfer-felsenbirne-amelanchier-felsenbirne-m001930_h_0.jpg' },
  { id: 19, name: 'Weißdorn', type: 'Frühling', icon: Flower2, color: 'var(--color-spring)', url: 'https://www.baumschule-horstmann.de/shop/exec/product/687/24/eingriffeliger-weissdorn.html', img: 'https://cdn.baumschule-horstmann.de/bilder/popup/eingriffeliger-weissdorn-m000024_h_0.jpg' },
  { id: 20, name: 'Liguster', type: 'Immergrün', icon: Trees, color: 'var(--color-evergreen)', url: 'https://www.baumschule-horstmann.de/shop/exec/product/55/1886/gemeiner-liguster-gewoehnlicher-liguster.html', img: 'https://cdn.baumschule-horstmann.de/bilder/popup/gemeiner-liguster-gewoehnlicher-liguster-m001886_h_0.jpg' },
  { id: 21, name: 'Vogelbeere', type: 'Herbst', icon: Leaf, color: 'var(--color-autumn)', url: 'https://www.baumschule-horstmann.de/shop/exec/product/687/84/vogelbeere-eberesche.html', img: 'https://cdn.baumschule-horstmann.de/bilder/popup/vogelbeerbaum-gewoehnliche-eberesche-m000084_h_0.jpg' },
  { id: 22, name: 'Sandrose', type: 'Sommer', icon: Sun, color: 'var(--color-summer)', url: 'https://www.baumschule-horstmann.de/shop/exec/product/89/66/sandrose-carolina-rose-wiesenrose.html', img: 'https://cdn.baumschule-horstmann.de/bilder/popup/sandrose-carolina-rose-wiesenrose-m000066_h_0.jpg' },
  { id: 23, name: 'Schmetterlingsflieder (Pink)', type: 'Sommer', icon: Sun, color: 'var(--color-summer)', url: 'https://www.baumschule-horstmann.de/shop/exec/product/723/1938/sommerflieder-schmetterlingsstrauch-pink-delight.html', img: 'https://cdn.baumschule-horstmann.de/bilder/popup/sommerflieder-schmetterlingsstrauch-pink-delight-m001938_h_0.jpg' },
  { id: 24, name: 'Weigelie', type: 'Herbst', icon: Leaf, color: 'var(--color-autumn)', url: 'https://www.baumschule-horstmann.de/shop/exec/product/728/2280/gold-weigelie-gelbbluetige-weigelie.html', img: 'https://cdn.baumschule-horstmann.de/bilder/popup/gold-weigelie-gelbbluetige-weigelie-middendorffiana-m002280_h_0.jpg' },
  { id: 25, name: 'Rote Heckenberberitze', type: 'Herbst', icon: Leaf, color: 'var(--color-autumn)', url: 'https://www.baumschule-horstmann.de/shop/exec/product/729/3894/blutberberitze-rote-heckenberberitze-atropurpurea.html', img: 'https://cdn.baumschule-horstmann.de/bilder/popup/blutberberitze-rote-heckenberberitze-atropurpurea-m003894_h_0.jpg' },
  { id: 26, name: 'Strauch-Zwergmispel', type: 'Herbst', icon: Leaf, color: 'var(--color-autumn)', url: 'https://www.baumschule-horstmann.de/shop/exec/product/729/8086/faecherzwergmispel.html', img: 'https://cdn.baumschule-horstmann.de/bilder/popup/faecherzwergmispel-m008086_h_0.jpg' },
  { id: 27, name: 'Kupfer-Felsenbirne', type: 'Frühling', icon: Flower2, color: 'var(--color-spring)', url: 'https://www.baumschule-horstmann.de/shop/exec/product/687/1930/kupfer-felsenbirne.html', img: 'https://cdn.baumschule-horstmann.de/bilder/popup/kupfer-felsenbirne-amelanchier-felsenbirne-m001930_h_0.jpg' }
];

const images = [
  { src: '/Images/Growth_Start.jpg', title: 'Planung & Start', desc: 'Die Ausgangssituation am Zaun' },
  { src: '/Images/Bluehende_Mischhecke_Wachstum_Rev.png', title: 'Volle Entfaltung', desc: 'Die Mischhecke in prachtvoller Blüte' },
  { src: '/Images/Bluehende_Hecke_Sonne.png', title: 'Sommertraum', desc: 'Blühende Hecke im sonnigen Garten' }
];

const budgetDetails = [
  { name: 'Liguster (Gewöhnlicher)', bot: 'Ligustrum vulgare', count: 3, price: '11,70', total: '35,10' },
  { name: 'Brautspiere', bot: 'Spiraea arguta', count: 2, price: '14,95', total: '29,90' },
  { name: 'Sandrose (Wiesenrose)', bot: 'Rosa carolina', count: 3, price: '14,50', total: '43,50' },
  { name: 'Kupfer-Felsenbirne', bot: 'Amelanchier lamarckii', count: 3, price: '29,90', total: '89,70' },
  { name: 'Schmetterlingsflieder (Lila)', bot: "Buddleja davidii 'Black Knight'", count: 1, price: '14,95', total: '14,95' },
  { name: 'Feuerdorn (Orange)', bot: "Pyracantha coccinea 'Orange Glow'", count: 1, price: '12,50', total: '12,50' },
  { name: 'Rote Heckenberberitze', bot: "Berberis thunbergii 'Atropurpurea'", count: 2, price: '12,90', total: '25,80' },
  { name: 'Weißdorn (Eingriffeliger)', bot: 'Crataegus monogyna', count: 2, price: '15,95', total: '31,90' },
  { name: 'Weigelie', bot: 'Weigela middendorffiana', count: 2, price: '27,50', total: '55,00' },
  { name: 'Schwarzer Holunder', bot: 'Sambucus nigra', count: 1, price: '16,80', total: '16,80' },
  { name: 'Strauch-Zwergmispel', bot: 'Cotoneaster horizontalis', count: 2, price: '24,50', total: '49,00' },
  { name: 'Schmetterlingsflieder (Weiß)', bot: "Buddleja davidii 'White Profusion'", count: 1, price: '13,95', total: '13,95' },
  { name: 'Blutpflaume', bot: "Prunus cerasifera 'Nigra'", count: 1, price: '26,50', total: '26,50' },
  { name: 'Feuerdorn (Rot)', bot: "Pyracantha coccinea 'Red Column'", count: 1, price: '13,90', total: '13,90' },
  { name: 'Vogelbeere (Eberesche)', bot: 'Sorbus aucuparia', count: 1, price: '19,95', total: '19,95' },
  { name: 'Schmetterlingsflieder (Pink)', bot: "Buddleja davidii 'Pink Delight'", count: 1, price: '12,95', total: '12,95' }
];

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const visualMapRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
      setShowBackToTop(window.pageYOffset > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollVisualMap = (direction) => {
    if (visualMapRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      visualMapRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-background" style={{backgroundImage: `url('/Images/Hero_Background.png')`}}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="badge">Gartenprojekt 2026</span>
          <h1>Die Blühende Mischhecke</h1>
          <p>Ein lebendiger Sichtschutz, ein Paradies für Insekten und Vögel, und ein "Vier-Jahreszeiten-Mix" auf 35 Metern Länge.</p>
          <a href="#vision" className="btn-primary" aria-label="Entdecke die Vision der Mischhecke">Entdecke die Vision</a>
        </div>
      </header>

      <main>
        {/* Konzept Section */}
        <section id="konzept" className="section-container">
          <div className="section-header">
            <h2>Architektur & Konzept</h2>
            <p>Die Grundlage für unser ökologisches Garten-Highlight.</p>
          </div>
          <div className="concept-grid">
            <div className="concept-card glass-card">
              <div className="icon"><Ruler size={48} color="var(--color-primary)" /></div>
              <h3>Dimensionen</h3>
              <p>Die Hecke erstreckt sich über <strong>35 Meter</strong>. Wir planen mit einer natürlichen, dynamischen Höhe von <strong>2,0 bis 2,5 Metern</strong> und einer maximalen Breite von 2,0 Metern für freien Wuchs.</p>
            </div>
            <div className="concept-card glass-card">
              <div className="icon"><Sun size={48} color="var(--color-accent)" /></div>
              <h3>Standort</h3>
              <p>Sonnig und warm. Die Böden hier sind sandig und durchlässig. Mit der gezielten Zugabe von Kompost und Tonmehl schaffen wir optimale Startbedingungen.</p>
            </div>
            <div className="concept-card glass-card">
              <div className="icon"><Bug size={48} color="var(--color-primary-light)" /></div>
              <h3>Biodiversität</h3>
              <p>Von immergrünen Winterverstecken bis hin zu Nektartankstellen im Hochsommer – 27 Pflanzen in perfekter Harmonie lösen sich im Blühzyklus ab.</p>
            </div>
          </div>
        </section>

        {/* Visualisierung Section */}
        <section id="vision" className="section-container bg-light">
          <div className="section-header">
            <h2>Wachstum & Entwicklung</h2>
            <p>So wird sich unsere Hecke in den nächsten Jahren entwickeln.</p>
          </div>
          <div className="gallery-stack">
            {images.map((img, index) => (
              <div key={index} className="gallery-card glass-card">
                <div className="img-container">
                  <img src={img.src} alt={img.title} loading="lazy" />
                  <div className="img-overlay">
                    <span className="img-title">{img.title}</span>
                  </div>
                </div>
                <div className="gallery-info">
                  <p>{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pflanzplan Section */}
        <section id="plan" className="section-container">
          <div className="section-header">
            <h2>Der Pflanzplan</h2>
            <p>27 Sträucher – perfekt arrangiert im Abstand von 1,30m.</p>
          </div>
          
          <div className="info-badge">
            <ExternalLink size={16} />
            <span>Klicke auf eine Pflanze, um sie direkt bei der Baumschule Horstmann anzusehen.</span>
          </div>

          <div className="legend">
            <span className="legend-item"><span className="dot" style={{backgroundColor: 'var(--color-evergreen)'}}></span> Immergrün</span>
            <span className="legend-item"><span className="dot" style={{backgroundColor: 'var(--color-spring)'}}></span> Frühlingsblüher</span>
            <span className="legend-item"><span className="dot" style={{backgroundColor: 'var(--color-summer)'}}></span> Sommerblüher</span>
            <span className="legend-item"><span className="dot" style={{backgroundColor: 'var(--color-autumn)'}}></span> Herbstfärber</span>
          </div>

          <div className="timeline">
            {plants.map((plant, index) => (
              <a href={plant.url} target="_blank" rel="noopener noreferrer" key={plant.id} className="timeline-item glass-card" title={`${plant.name} auf Baumschule Horstmann ansehen`} style={{'--card-color': plant.color}}>
                <div className="timeline-marker">{index + 1}</div>
                <div className="timeline-content">
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><plant.icon size={18} color={plant.color} /> {plant.name}</h4>
                  <p>{plant.type}</p>
                  <div className="link-hint">
                    <span>Details</span>
                    <ExternalLink size={12} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Visuelle Map Section */}
        <section id="map" className="section-container bg-light">
          <div className="section-header">
            <h2>Die Grüne Meile (Visualisierung)</h2>
            <p>Die 35 Meter lange Hecke von links nach rechts visualisiert. Nutze die Pfeile oder scrolle horizontal.</p>
          </div>

          <div className="visual-map-container">
            <button className="map-nav-btn prev" onClick={() => scrollVisualMap('left')} aria-label="Nach links scrollen">
              <ChevronLeft size={24} />
            </button>
            <div className="visual-map-wrapper" ref={visualMapRef}>
              <div className="visual-map-track">
                <div className="garden-bed"></div>
                <div className="meter-scale">
                  {[0, 5, 10, 15, 20, 25, 30, 35].map(m => (
                    <span key={m}>{m}m</span>
                  ))}
                </div>
                
                {plants.map((plant, index) => (
                  <div key={plant.id} className="map-item" style={{'--plant-color': plant.color}}>
                    <div className="plant-visual">
                      {plant.img ? (
                        <img src={plant.img} alt={plant.name} className="plant-photo" loading="lazy" referrerPolicy="no-referrer" />
                      ) : (
                        <plant.icon size={24} color={plant.color} />
                      )}
                    </div>
                    <div className="map-item-label">
                      <span>{(index * 1.3).toFixed(1)}m</span>
                      <h5>{plant.name}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="map-nav-btn next" onClick={() => scrollVisualMap('right')} aria-label="Nach rechts scrollen">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="scroll-hint">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            <span>Wische oder ziehe nach rechts zum Erkunden</span>
          </div>
        </section>

        {/* Budget Section */}
        <section id="budget" className="section-container bg-dark text-white">
          <div className="budget-content">
            <div className="budget-text">
              <h2>Das Budget</h2>
              <p>Transparenz ist wichtig. Die hier gezeigten Preise beziehen sich auf den Stand vom <strong>24.04.2026</strong> (Baumschule Horstmann) für Containerware (40-60 cm).</p>
              <ul className="budget-list">
                <li>✅ 27 Premium-Heckenpflanzen</li>
                <li>✅ Hohe Anwachsgarantie (Containerware)</li>
                <li>✅ Inklusive optischem Highlight (Blutpflaume)</li>
              </ul>
            </div>
            <div className="budget-card">
              <span className="budget-label">Geschätzte Gesamtkosten</span>
              <span className="budget-amount">428,50 €</span>
              <span className="budget-subtext">für die Pflanzen zzgl. Bodenaufbereitung</span>
            </div>
          </div>
        </section>

        {/* Detailed Breakdown Area */}
        <section id="budget-details" className="section-container">
          <div className="budget-breakdown glass-card">
            <h3>Detaillierte Kostenaufstellung</h3>
            <p className="price-date-info">Alle Preise auf Basis der Recherche vom 24.04.2026</p>
            <div className="table-responsive">
              <table className="budget-table">
                <thead>
                  <tr>
                    <th>Pflanzensorte</th>
                    <th className="hide-mobile">Botanischer Name</th>
                    <th>Menge</th>
                    <th>Stückpreis</th>
                    <th>Gesamt</th>
                  </tr>
                </thead>
                <tbody>
                  {budgetDetails.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td className="hide-mobile"><em>{item.bot}</em></td>
                      <td>{item.count}x</td>
                      <td>{item.price} €</td>
                      <td><strong>{item.total} €</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-container cta-section">
          <h2>Lass uns gemeinsam loslegen!</h2>
          <p>Ein Projekt für eine grünere Nachbarschaft. Der nächste Schritt: Materialbeschaffung und Bodenvorbereitung.</p>
          <button className="btn-primary" onClick={scrollToTop} aria-label="Zum Seitenanfang springen">Nach oben</button>
        </section>
      </main>

      {/* Floating Back to Top */}
      <button 
        className={`back-to-top glass-card ${showBackToTop ? 'visible' : ''}`} 
        onClick={scrollToTop}
        aria-label="Zurück nach oben"
      >
        <ChevronUp size={24} />
      </button>

      <footer>
        <p>Projekt "Blühende Mischhecke" &copy; 2026. Erstellt für eine gute Nachbarschaft.</p>
      </footer>
    </div>
  );
}

export default App;
