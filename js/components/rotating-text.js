// W2/js/components/rotating-text.js
// Renders a brand-statement section — no ring, just clean typography.
// Each page passes its own opts for context-relevant content.
export function initRotatingText(targetSelector = '#rotating-text-placeholder', opts = {}) {
  const {
    tag        = 'Our Approach',
    headline   = 'One studio.',
    headlineEm = 'Every discipline.',
    sub        = 'Architecture, interiors, landscape, and visualization — all under one roof, one vision, one team.',
    ctaLabel   = 'Explore Our Services',
    ctaHref    = 'services.html',
  } = opts;

  const html = `
<section class="section section--cream statement-section">
  <div class="container statement-inner">
    <span class="section-tag">${tag}</span>
    <h2 class="section-title statement-headline">${headline}<br><em>${headlineEm}</em></h2>
    <p class="statement-sub">${sub}</p>
    <a href="${ctaHref}" class="btn btn--solid statement-cta">${ctaLabel}</a>
  </div>
</section>`;

  const target = document.querySelector(targetSelector);
  if (target) target.outerHTML = html;
  else document.querySelector('#cta-placeholder, footer').insertAdjacentHTML('beforebegin', html);
}
