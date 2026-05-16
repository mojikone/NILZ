// W2/js/components/rotating-text.js
export function initRotatingText(targetSelector = '#rotating-text-placeholder') {
  const text = 'NILZ Architecture · Interior Design · Muscat · ';
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
          <textPath href="#circle-path" startOffset="0%">${text.repeat(2)}</textPath>
        </text>
      </svg>
      <div class="rotating-dot"></div>
    </div>
    <div class="rotating-caption fade-up">
      <h2 class="section-title">There are 360 degrees<br><em>so why stick to one?</em></h2>
      <p>Break the mold, explore every angle, and design without boundaries.</p>
      <a href="about.html" class="btn btn--outline" style="margin-top:28px">About Us</a>
    </div>
  </div>
</section>`;

  const target = document.querySelector(targetSelector);
  if (target) target.outerHTML = html;
  else document.querySelector('#cta-placeholder, footer').insertAdjacentHTML('beforebegin', html);
}
