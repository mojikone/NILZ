// W2/js/components/rotating-text.js
// Renders the rotating-ring brand section.
// Each page passes its own opts so the section feels native to that context.
export function initRotatingText(targetSelector = '#rotating-text-placeholder', opts = {}) {
  const {
    ringText   = 'INTERIOR DESIGN · ARCHITECTURE · LANDSCAPE · VISUALIZATION · ',
    headline   = 'One studio.',
    headlineEm = 'Every discipline.',
    sub        = 'From concept to completion — architecture, interiors, landscape, and visualization, all under one roof.',
    ctaLabel   = 'Explore Services',
    ctaHref    = 'services.html',
  } = opts;

  const html = `
<section class="section section--cream rotating-section">
  <div class="rotating-wrapper">
    <div class="rotating-ring">
      <svg viewBox="0 0 200 200" class="rotating-svg" aria-hidden="true">
        <defs>
          <path id="circle-path"
            d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"/>
        </defs>
        <text class="rotating-text-svg">
          <textPath href="#circle-path" startOffset="0%">${ringText.repeat(2)}</textPath>
        </text>
      </svg>
      <div class="rotating-dot"></div>
    </div>
    <div class="rotating-caption fade-up">
      <h2 class="section-title">${headline}<br><em>${headlineEm}</em></h2>
      <p>${sub}</p>
      <a href="${ctaHref}" class="btn btn--outline" style="margin-top:28px">${ctaLabel}</a>
    </div>
  </div>
</section>`;

  const target = document.querySelector(targetSelector);
  if (target) target.outerHTML = html;
  else document.querySelector('#cta-placeholder, footer').insertAdjacentHTML('beforebegin', html);
}
