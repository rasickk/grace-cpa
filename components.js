/**
 * Grace CPA – Shared Header & Footer
 * Each page sets:
 *   window.SITE_BASE  = './'  (root) or '../' (subdirectory)
 *   window.SITE_PAGE  = 'home' | 'about' | 'contact' | etc.
 */

(function () {
  const base   = window.SITE_BASE  || './';
  const active = window.SITE_PAGE  || '';

  const navLink = (href, label, page) => {
    const isActive = active === page ? 'text-navy font-bold underline-active' : 'text-slate-600';
    return `<a href="${base}${href}" class="nav-link ${isActive} px-3 py-2 text-sm font-semibold hover:text-navy transition-colors">${label}</a>`;
  };

  const footerLink = (href, label) =>
    `<li><a href="${base}${href}" class="text-sm text-slate-500 hover:text-gold-light transition-colors flex items-center gap-2">
       <i data-lucide="chevron-right" class="w-3 h-3 text-gold"></i>${label}</a></li>`;

  /* ===== HEADER ===== */
  const headerHTML = `
<div class="bg-navy-950 text-slate-400 text-xs py-2 hidden sm:block" style="background:#060d1a">
  <div class="max-w-6xl mx-auto px-6 flex justify-between items-center gap-2 flex-wrap">
    <span class="flex items-center gap-1.5">
      <i data-lucide="clock" class="w-3.5 h-3.5 text-gold inline-block" style="color:#c9a03e"></i>
      Mon–Fri: 9:00 AM – 5:00 PM
    </span>
    <div class="flex items-center gap-5">
      <a href="tel:5026181677" class="hover:text-yellow-300 transition-colors">(502) 618-1677</a>
      <span class="opacity-20">|</span>
      <a href="tel:8595396306" class="hover:text-yellow-300 transition-colors">(859) 539-6306</a>
      <span class="opacity-20">|</span>
      <a href="mailto:dtiwari@grace-cpa.com" class="flex items-center gap-1.5 hover:text-yellow-300 transition-colors">
        <i data-lucide="mail" class="w-3.5 h-3.5 inline-block" style="color:#c9a03e"></i>dtiwari@grace-cpa.com
      </a>
    </div>
  </div>
</div>

<header
  class="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm"
  style="border-bottom: 2px solid #c9a03e;"
  x-data="{ servicesOpen: false, industriesOpen: false }"
  @click.outside="servicesOpen = false; industriesOpen = false"
>
  <div class="max-w-6xl mx-auto px-6 flex items-center justify-between gap-6 py-3">

    <a href="${base}index.html" class="flex-shrink-0">
      <div class="font-serif text-xl font-bold leading-tight" style="color:#0f1f3d;font-family:'Playfair Display',serif">
        Grace <span style="color:#c9a03e">CPA</span>, PSC
      </div>
      <div class="text-[10px] font-semibold tracking-widest uppercase mt-0.5" style="color:#94a3b8">
        Louisville, KY · Certified Public Accountants
      </div>
    </a>

    <nav class="hidden lg:flex items-center gap-1">
      ${navLink('index.html',        'Home',          'home')}
      ${navLink('about.html',        'About',         'about')}

      <div class="relative" @mouseenter="servicesOpen = true" @mouseleave="servicesOpen = false">
        <button class="nav-link flex items-center gap-1 px-3 py-2 text-sm font-semibold text-slate-600 hover:text-navy transition-colors cursor-pointer">
          Services <i data-lucide="chevron-down" class="w-3.5 h-3.5 transition-transform" :class="servicesOpen?'rotate-180':''"></i>
        </button>
        <div x-show="servicesOpen"
          x-transition:enter="transition ease-out duration-150"
          x-transition:enter-start="opacity-0 -translate-y-2"
          x-transition:enter-end="opacity-100 translate-y-0"
          x-transition:leave="transition ease-in duration-100"
          x-transition:leave-start="opacity-100 translate-y-0"
          x-transition:leave-end="opacity-0 -translate-y-2"
          class="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50"
          style="border-top:3px solid #c9a03e" x-cloak>
          <div class="px-4 py-2 text-[10px] font-bold tracking-widest uppercase border-b border-slate-50" style="color:#c9a03e">Accounting</div>
          <a href="${base}services/small-business-accounting.html" class="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-navy hover:pl-6 transition-all">Small Business Accounting</a>
          <a href="${base}services/business-consulting.html" class="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-navy hover:pl-6 transition-all">Business &amp; Financial Consulting</a>
          <a href="${base}services/cloud-accounting.html" class="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-navy hover:pl-6 transition-all">Cloud Accounting Solutions</a>
          <a href="${base}services/business-incorporation.html" class="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-navy hover:pl-6 transition-all">Business Incorporation</a>
          <a href="${base}services/outsourced-bookkeeping.html" class="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-navy hover:pl-6 transition-all">Outsourced Bookkeeping</a>
          <a href="${base}services/payroll.html" class="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-navy hover:pl-6 transition-all">Payroll Services</a>
          <a href="${base}services/quickbooks.html" class="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-navy hover:pl-6 transition-all">QuickBooks Setup &amp; Support</a>
          <div class="px-4 py-2 text-[10px] font-bold tracking-widest uppercase border-t border-b border-slate-50 mt-1" style="color:#c9a03e">Tax</div>
          <a href="${base}services/tax-preparation.html" class="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-navy hover:pl-6 transition-all">Tax Preparation</a>
          <a href="${base}services/tax-planning.html" class="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-navy hover:pl-6 transition-all pb-3">Tax Planning</a>
        </div>
      </div>

      <div class="relative" @mouseenter="industriesOpen = true" @mouseleave="industriesOpen = false">
        <button class="nav-link flex items-center gap-1 px-3 py-2 text-sm font-semibold text-slate-600 hover:text-navy transition-colors cursor-pointer">
          Industries <i data-lucide="chevron-down" class="w-3.5 h-3.5 transition-transform" :class="industriesOpen?'rotate-180':''"></i>
        </button>
        <div x-show="industriesOpen"
          x-transition:enter="transition ease-out duration-150"
          x-transition:enter-start="opacity-0 -translate-y-2"
          x-transition:enter-end="opacity-100 translate-y-0"
          x-transition:leave="transition ease-in duration-100"
          x-transition:leave-start="opacity-100 translate-y-0"
          x-transition:leave-end="opacity-0 -translate-y-2"
          class="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50"
          style="border-top:3px solid #c9a03e" x-cloak>
          <a href="${base}industries/hospitality.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-navy hover:pl-6 transition-all">🍽 Hospitality</a>
          <a href="${base}industries/manufacturing.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-navy hover:pl-6 transition-all">⚙️ Manufacturing</a>
          <a href="${base}industries/medical-practice.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-navy hover:pl-6 transition-all">🏥 Medical Practice</a>
          <a href="${base}industries/oil-gas.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-navy hover:pl-6 transition-all">⛽ Oil &amp; Gas</a>
          <a href="${base}industries/real-estate.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-navy hover:pl-6 transition-all">🏠 Real Estate</a>
          <a href="${base}industries/technology.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-navy hover:pl-6 transition-all pb-2">💻 Technology</a>
        </div>
      </div>

      ${navLink('service-areas.html', 'Service Areas', 'service-areas')}
      ${navLink('blog.html',          'Blog',          'blog')}
      <a href="${base}contact.html" class="ml-2 inline-flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-lg transition-all hover:-translate-y-0.5" style="background:#c9a03e;color:#0f1f3d">
        <i data-lucide="calendar" class="w-4 h-4"></i> Free Consultation
      </a>
    </nav>

    <button class="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 text-navy hover:border-yellow-400 transition-colors" @click.stop="$dispatch('toggle-mobile')">
      <i data-lucide="menu" class="w-5 h-5"></i>
    </button>
  </div>

  <!-- Mobile Menu -->
  <div x-data="{ open: false }" @toggle-mobile.window="open = !open">
    <div x-show="open"
      x-transition:enter="transition ease-out duration-200"
      x-transition:enter-start="opacity-0 -translate-y-2"
      x-transition:enter-end="opacity-100 translate-y-0"
      class="lg:hidden border-t border-slate-100 bg-white px-6 pb-6 max-h-[80vh] overflow-y-auto"
      x-cloak>
      <div class="pt-4 space-y-1">
        <a href="${base}index.html" class="block px-3 py-2.5 rounded-lg font-semibold text-sm" style="color:#0f1f3d;background:#f8fafc">Home</a>
        <a href="${base}about.html" class="block px-3 py-2.5 rounded-lg text-slate-600 font-semibold text-sm hover:bg-slate-50 transition-colors">About</a>
        <div class="px-3 pt-3 pb-1 text-[10px] font-bold tracking-widest uppercase" style="color:#c9a03e">Accounting Services</div>
        <a href="${base}services/small-business-accounting.html" class="block px-4 py-2 text-sm text-slate-600 hover:text-navy">Small Business Accounting</a>
        <a href="${base}services/business-consulting.html" class="block px-4 py-2 text-sm text-slate-600 hover:text-navy">Business &amp; Financial Consulting</a>
        <a href="${base}services/cloud-accounting.html" class="block px-4 py-2 text-sm text-slate-600 hover:text-navy">Cloud Accounting</a>
        <a href="${base}services/business-incorporation.html" class="block px-4 py-2 text-sm text-slate-600 hover:text-navy">Business Incorporation</a>
        <a href="${base}services/outsourced-bookkeeping.html" class="block px-4 py-2 text-sm text-slate-600 hover:text-navy">Outsourced Bookkeeping</a>
        <a href="${base}services/payroll.html" class="block px-4 py-2 text-sm text-slate-600 hover:text-navy">Payroll Services</a>
        <a href="${base}services/quickbooks.html" class="block px-4 py-2 text-sm text-slate-600 hover:text-navy">QuickBooks Support</a>
        <div class="px-3 pt-3 pb-1 text-[10px] font-bold tracking-widest uppercase" style="color:#c9a03e">Tax Services</div>
        <a href="${base}services/tax-preparation.html" class="block px-4 py-2 text-sm text-slate-600 hover:text-navy">Tax Preparation</a>
        <a href="${base}services/tax-planning.html" class="block px-4 py-2 text-sm text-slate-600 hover:text-navy">Tax Planning</a>
        <div class="px-3 pt-3 pb-1 text-[10px] font-bold tracking-widest uppercase" style="color:#c9a03e">Industries</div>
        <a href="${base}industries/hospitality.html" class="block px-4 py-2 text-sm text-slate-600 hover:text-navy">Hospitality</a>
        <a href="${base}industries/manufacturing.html" class="block px-4 py-2 text-sm text-slate-600 hover:text-navy">Manufacturing</a>
        <a href="${base}industries/medical-practice.html" class="block px-4 py-2 text-sm text-slate-600 hover:text-navy">Medical Practice</a>
        <a href="${base}industries/oil-gas.html" class="block px-4 py-2 text-sm text-slate-600 hover:text-navy">Oil &amp; Gas</a>
        <a href="${base}industries/real-estate.html" class="block px-4 py-2 text-sm text-slate-600 hover:text-navy">Real Estate</a>
        <a href="${base}industries/technology.html" class="block px-4 py-2 text-sm text-slate-600 hover:text-navy">Technology</a>
        <div class="pt-4 border-t border-slate-100 mt-2">
          <a href="${base}service-areas.html" class="block px-3 py-2.5 text-slate-600 font-semibold text-sm">Service Areas</a>
          <a href="${base}blog.html" class="block px-3 py-2.5 text-slate-600 font-semibold text-sm">Blog</a>
          <a href="${base}contact.html" class="mt-3 flex items-center justify-center gap-2 font-bold text-sm px-5 py-3 rounded-lg" style="background:#c9a03e;color:#0f1f3d">
            <i data-lucide="calendar" class="w-4 h-4"></i> Free Consultation
          </a>
        </div>
      </div>
    </div>
  </div>
</header>`;

  /* ===== FOOTER ===== */
  const footerHTML = `
<footer style="background:#060d1a;color:#64748b;">
  <div class="max-w-6xl mx-auto px-6 pt-16 pb-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-10" style="border-bottom:1px solid rgba(255,255,255,.06)">
    <div>
      <div class="font-serif text-xl font-bold mb-3" style="color:#fff;font-family:'Playfair Display',serif">Grace <span style="color:#c9a03e">CPA</span>, PSC</div>
      <p class="text-sm leading-relaxed mb-5" style="color:#475569">Trusted certified public accountants serving Louisville, KY and surrounding areas.</p>
      <div class="space-y-2.5 text-sm">
        <div class="flex items-start gap-2.5" style="color:#475569">
          <i data-lucide="map-pin" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:#c9a03e"></i>
          <span>3940 Bardstown Road, Suite 1B<br>Louisville, KY 40218</span>
        </div>
        <a href="tel:5026181677" class="flex items-center gap-2.5 hover:text-yellow-300 transition-colors" style="color:#475569">
          <i data-lucide="phone" class="w-4 h-4 flex-shrink-0" style="color:#c9a03e"></i>(502) 618-1677
        </a>
        <a href="tel:8595396306" class="flex items-center gap-2.5 hover:text-yellow-300 transition-colors" style="color:#475569">
          <i data-lucide="phone" class="w-4 h-4 flex-shrink-0" style="color:#c9a03e"></i>(859) 539-6306
        </a>
        <a href="mailto:dtiwari@grace-cpa.com" class="flex items-center gap-2.5 hover:text-yellow-300 transition-colors" style="color:#475569">
          <i data-lucide="mail" class="w-4 h-4 flex-shrink-0" style="color:#c9a03e"></i>dtiwari@grace-cpa.com
        </a>
        <div class="flex items-center gap-2.5" style="color:#475569">
          <i data-lucide="clock" class="w-4 h-4 flex-shrink-0" style="color:#c9a03e"></i>Mon–Fri: 9:00 AM – 5:00 PM
        </div>
      </div>
    </div>
    <div>
      <h4 class="text-xs font-bold tracking-widest uppercase mb-4" style="color:#fff">Quick Links</h4>
      <ul class="space-y-2.5">
        ${footerLink('index.html',       'Home')}
        ${footerLink('about.html',       'About Us')}
        ${footerLink('contact.html',     'Contact')}
        ${footerLink('blog.html',        'Blog &amp; Resources')}
        ${footerLink('service-areas.html','Service Areas')}
      </ul>
    </div>
    <div>
      <h4 class="text-xs font-bold tracking-widest uppercase mb-4" style="color:#fff">Accounting</h4>
      <ul class="space-y-2.5">
        ${footerLink('services/small-business-accounting.html', 'Small Business Accounting')}
        ${footerLink('services/business-consulting.html',       'Business Consulting')}
        ${footerLink('services/cloud-accounting.html',          'Cloud Accounting')}
        ${footerLink('services/outsourced-bookkeeping.html',    'Outsourced Bookkeeping')}
        ${footerLink('services/payroll.html',                   'Payroll Services')}
        ${footerLink('services/quickbooks.html',                'QuickBooks Support')}
        ${footerLink('services/business-incorporation.html',    'Business Incorporation')}
      </ul>
    </div>
    <div>
      <h4 class="text-xs font-bold tracking-widest uppercase mb-4" style="color:#fff">Tax &amp; Industries</h4>
      <ul class="space-y-2.5">
        ${footerLink('services/tax-preparation.html', 'Tax Preparation')}
        ${footerLink('services/tax-planning.html',    'Tax Planning')}
      </ul>
      <h4 class="text-xs font-bold tracking-widest uppercase mt-6 mb-4" style="color:#fff">Industries</h4>
      <ul class="space-y-2.5">
        ${footerLink('industries/hospitality.html',     'Hospitality')}
        ${footerLink('industries/medical-practice.html','Medical Practice')}
        ${footerLink('industries/real-estate.html',     'Real Estate')}
        ${footerLink('industries/technology.html',      'Technology')}
        ${footerLink('industries/manufacturing.html',   'Manufacturing')}
      </ul>
    </div>
  </div>
  <div class="max-w-6xl mx-auto px-6 py-5 flex flex-wrap justify-between items-center gap-3 text-xs" style="color:#334155">
    <span>&copy; 2024 Grace CPA, PSC. All Rights Reserved.</span>
    <div class="flex gap-4">
      <a href="${base}contact.html" class="hover:text-yellow-300 transition-colors">Privacy Policy</a>
      <a href="${base}contact.html" class="hover:text-yellow-300 transition-colors">Disclaimer</a>
    </div>
  </div>
</footer>
<button id="scroll-top" onclick="window.scrollTo({top:0,behavior:'smooth'})"
  class="fixed bottom-6 right-6 w-11 h-11 rounded-full text-white flex items-center justify-center z-50 transition-all opacity-0 translate-y-3 pointer-events-none"
  style="background:#1a3a6b">
  <i data-lucide="arrow-up" class="w-5 h-5"></i>
</button>`;

  /* ===== INJECT ===== */
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  if (headerEl) headerEl.innerHTML = headerHTML;
  if (footerEl) footerEl.innerHTML = footerHTML;

  /* ===== SCROLL-TO-TOP ===== */
  window.addEventListener('load', () => {
    const btn = document.getElementById('scroll-top');
    if (btn) {
      window.addEventListener('scroll', () => {
        const show = window.scrollY > 400;
        btn.style.opacity    = show ? '1' : '0';
        btn.style.transform  = show ? 'translateY(0)' : 'translateY(12px)';
        btn.style.pointerEvents = show ? 'all' : 'none';
        if (show) btn.style.background = '#c9a03e';
      }, { passive: true });
    }

    /* Re-init Lucide after injection */
    if (window.lucide) lucide.createIcons();
  });
})();
