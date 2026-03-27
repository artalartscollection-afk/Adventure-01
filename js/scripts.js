// Mountain Adventure - Core Scripts
const NAV_LINKS = [
    { name: 'Home', url: 'index.html' },
    { name: 'About Us', url: 'about.html' },
    { name: 'Blog', url: 'blog.html', dropdown: [{name: 'View Blog', url: 'blog.html'}, {name: 'Trek Stories', url: 'blog.html'}, {name: 'Reviews', url: 'blog.html'}] },
    { name: 'Treks', url: 'treks.html', dropdown: [{name: 'Uttarakhand Treks', url: 'region.html?region=Uttarakhand'}, {name: 'Himachal Treks', url: 'region.html?region=Himachal'}, {name: 'Sikkim Treks', url: 'region.html?region=Sikkim'}, {name: 'Kashmir Treks', url: 'region.html?region=Kashmir'}] },
    { name: 'Before you go', url: 'trek-essentials.html', dropdown: [{name: 'Trek Essentials', url: 'trek-essentials.html'}, {name: 'Services', url: 'services.html'}, {name: 'FAQ', url: 'faq.html'}] },
    { name: 'Gallery', url: 'gallery.html' },
    { name: 'Contact Us', url: 'contact.html' }
];

const CHEVRON_SVG = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left:4px;"><polyline points="6 9 12 15 18 9"></polyline></svg>`;

document.addEventListener('DOMContentLoaded', () => {
    initUI();
    routePage();
});

function initUI() {
    renderHeader();
    renderFooter();
    initScroll();
    renderWhatsApp();
    initInteractiveBackground();
    initFAQAccordion();
    if (window.lucide) lucide.createIcons();
}

function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(i => {
                i.classList.remove('active');
                const answer = i.querySelector('.faq-answer');
                if (answer) answer.style.display = 'none';
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
                const answer = item.querySelector('.faq-answer');
                if (answer) answer.style.display = 'block';
            }
        });
    });
}

function initInteractiveBackground() {
    const bg = document.createElement('div');
    bg.className = 'interactive-bg';
    document.body.appendChild(bg);

    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        bg.style.setProperty('--mouse-x', `${x}%`);
        bg.style.setProperty('--mouse-y', `${y}%`);
    });
}

function routePage() {
    const path = window.location.pathname;
    if (path.includes('index.html') || path === '/' || path.endsWith('cosmic/')) renderFeaturedTreks();
    else if (path.includes('treks.html')) {
        renderTrendingTreks();
        renderAllTreks();
    }
    else if (path.includes('trek-detail.html')) renderTrekDetails();
    else if (path.includes('region.html')) renderRegionTreks();
    else if (path.includes('blog-post.html')) renderBlogPost();
    else if (path.includes('blog.html')) renderBlogListing();
}

function renderHeader() {
    const header = document.querySelector('header');
    if (!header) return;

    const navHTML = NAV_LINKS.map(link => `
        <li class="nav-item">
            <a href="${link.url}" class="nav-link">${link.name}${link.dropdown ? CHEVRON_SVG : ''}</a>
            ${link.dropdown ? `<ul class="dropdown-menu">${link.dropdown.map(item => `<li><a href="${item.url}">${item.name}</a></li>`).join('')}</ul>` : ''}
        </li>
    `).join('');

    header.innerHTML = `
        <div class="container header-container">
            <a href="index.html" class="logo"><img src="img/logo.png" alt="Mountain Adventure"></a>
            <nav class="desktop-nav"><ul class="nav-list">${navHTML}</ul></nav>
            <div class="header-actions">
                <a href="contact.html" class="btn btn-primary" style="padding: 8px 16px; font-size: 0.8rem;">BOOK NOW</a>
                <button class="mobile-menu-btn" aria-label="Open menu"><i data-lucide="menu"></i></button>
            </div>
        </div>
    `;

    header.querySelector('.mobile-menu-btn').onclick = toggleMobileMenu;
}

function renderFooter() {
    const footer = document.querySelector('footer');
    if (!footer) return;

    footer.innerHTML = `
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col about">
                    <img src="img/logo.png" alt="Logo" class="footer-logo">
                    <p>Providing premium Himalayan experiences since 2005.</p>
                </div>
                <div class="footer-col links">
                    <h3>Explore</h3>
                    <ul>
                        <li><a href="treks.html">Himalayan Treks</a></li>
                        <li><a href="blog.html">Adventure Blog</a></li>
                        <li><a href="services.html">Our Services</a></li>
                        <li><a href="faq.html">FAQ</a></li>
                        <li><a href="about.html">Our Story</a></li>
                    </ul>
                </div>
                <div class="footer-col contact">
                    <h3>Contact Us</h3>
                    <p>Himalayan Valley, North India</p>
                    <p>+91 98XXX XXXXX</p>
                    <p>hello@youradventurecompany.com</p>
                </div>
            </div>
        </div>
        <div class="footer-bottom"><div class="container"><p>&copy; ${new Date().getFullYear()} Mountain Adventure.</p></div></div>
    `;
}

function initScroll() {
    const header = document.querySelector('.header');
    window.onscroll = () => header.classList.toggle('scrolled', window.scrollY > 50);
}

function toggleMobileMenu() {
    let overlay = document.querySelector('.mobile-nav-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'mobile-nav-overlay';
        overlay.innerHTML = `
            <div class="mobile-nav">
                <button class="mobile-close-btn"><i data-lucide="x"></i></button>
                <ul class="mobile-nav-list">
                    ${NAV_LINKS.map(l => `<li><a href="${l.url}">${l.name}</a>
                        ${l.dropdown ? `<ul style="padding-left:15px; font-size:0.9em; margin-top:5px; list-style:none;">${l.dropdown.map(d=>(`<li><a href="${d.url}" style="color:#aaa; padding:5px 0; display:block;">${d.name}</a></li>`)).join('')}</ul>` : ''}
                    </li>`).join('')}
                    <li><a href="contact.html" class="btn btn-primary">BOOK NOW</a></li>
                </ul>
            </div>
        `;
        document.body.appendChild(overlay);
        overlay.querySelector('.mobile-close-btn').onclick = () => overlay.classList.remove('open');
        overlay.onclick = (e) => e.target === overlay && overlay.classList.remove('open');
        if (window.lucide) lucide.createIcons();
    }
    overlay.classList.toggle('open');
}

function createTrekCard(trek) {
    return `
        <div class="trek-card">
            <div class="trek-image"><img src="${trek.image}" alt="${trek.title}"><div class="trek-badge">${trek.difficulty || 'Moderate'}</div></div>
            <div class="trek-content">
                <h3 class="trek-title">${trek.title}</h3>
                <div class="trek-meta"><span>${trek.duration}</span><span>${trek.altitude}</span></div>
                <div class="trek-footer">
                    <span class="price-value">₹${trek.price.toLocaleString()}</span>
                    <a href="${trek.id}.html" class="btn btn-primary btn-sm">Details</a>
                </div>
            </div>
        </div>`;
}

function renderFeaturedTreks() {
    const el = document.getElementById('featured-treks-grid');
    if (el) el.innerHTML = trekData.slice(0, 3).map(createTrekCard).join('');
}

function renderTrendingTreks() {
    const el = document.getElementById('trending-treks-grid');
    if (el) el.innerHTML = trekData.filter(t => ['kedarkantha-trek', 'roopkund-trek', 'hampta-pass-trek'].includes(t.id)).map(createTrekCard).join('');
}

function renderAllTreks() {
    const el = document.getElementById('all-treks-grid');
    if (el) el.innerHTML = trekData.map(createTrekCard).join('');
}

function renderRegionTreks() {
    const el = document.getElementById('region-treks-grid');
    if (!el) return;
    const region = new URLSearchParams(location.search).get('region');
    if (region) {
        document.getElementById('region-title').innerText = `${region} Treks`;
        const filtered = trekData.filter(t => t.region && t.region.toLowerCase() === region.toLowerCase());
        el.innerHTML = filtered.length ? filtered.map(createTrekCard).join('') : '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #888;">More treks coming soon...</div>';
    }
}

function renderTrekDetails() {
    const el = document.getElementById('trek-detail-content');
    const trek = trekData.find(t => t.id === new URLSearchParams(location.search).get('id'));
    if (!el || !trek) return;

    document.title = `${trek.title} | Mountain Adventure`;
    el.innerHTML = `
        <section class="trek-hero" style="background-image: url('${trek.image}')">
            <div class="hero-overlay"></div>
            <div class="container">
                <div class="trek-hero-content">
                    <h1>${trek.title}</h1>
                    <div class="trek-quick-stats">
                        <div class="stat-item">${trek.duration}</div><div class="stat-item">${trek.altitude}</div><div class="stat-item">${trek.startPoint}</div>
                    </div>
                </div>
            </div>
        </section>
        <div class="container trek-content-container">
            <div class="trek-main">
                <div class="trek-section"><h2>Description</h2><p>${trek.description}</p></div>
                <div class="trek-section">
                    <h2>Itinerary</h2>
                    <div class="itinerary-list">${trek.itinerary.map(i => `
                        <div class="itinerary-day"><div class="day-number">${i.day}</div><div class="day-content"><h4>${i.title}</h4><p>${i.details}</p></div></div>
                    `).join('')}</div>
                </div>
                <div class="trek-section">
                    <h2>Includes & Excludes</h2>
                    <div class="inc-exc-grid">
                        <div class="inc-col"><ul>${trek.inclusions.map(i => `<li><i data-lucide="check-circle-2" style="color:var(--primary); margin-right:8px; vertical-align:middle; width:18px;"></i> ${i}</li>`).join('')}</ul></div>
                        <div class="exc-col"><ul>${trek.exclusions.map(e => `<li><i data-lucide="x-circle" style="color:#e74c3c; margin-right:8px; vertical-align:middle; width:18px;"></i> ${e}</li>`).join('')}</ul></div>
                    </div>
                </div>
                ${trek.gallery ? `
                <div class="trek-section">
                    <h2>Photo Gallery</h2>
                    <div class="grid grid-3 gap-20 mt-20">
                        ${trek.gallery.map(img => `
                            <div class="card-container overflow-hidden">
                                <img src="${img}" class="img-zoom" style="height:200px;">
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
            </div>
            <aside class="trek-sidebar">
                <div class="booking-card">
                    <h3>Trek Cost</h3>
                    <div class="main-price"><span class="amount">₹${trek.price.toLocaleString()}</span><span>per person</span></div>
                    <a href="contact.html?trek=${trek.id}" class="btn btn-primary w-100" style="margin-bottom:15px">Book Now</a>
                    <a href="https://wa.me/919800000000" class="btn btn-whatsapp w-100">Chat with Expert</a>
                </div>
            </aside>
        </div>`;
    
    // Re-initialize Lucide icons for the newly injected elements
    if (window.lucide) lucide.createIcons();
}

function renderBlogListing() {
    const el = document.getElementById('blog-grid');
    if (el) el.innerHTML = blogData.map(post => `
        <div class="trek-card blog-card">
            <div class="trek-image"><img src="${post.image}" alt="${post.title}"></div>
            <div class="trek-content">
                <div class="text-sm-muted mb-15"><i data-lucide="calendar" size="14" style="vertical-align:middle; margin-right:4px;"></i> ${post.date} &nbsp; <i data-lucide="user" size="14" style="vertical-align:middle; margin-right:4px;"></i> ${post.author}</div>
                <h3 class="trek-title">${post.title}</h3>
                <p class="text-sm-muted mb-15">${post.excerpt}</p>
                <div class="mt-auto">
                    <a href="blog-post.html?id=${post.id}" class="btn btn-primary btn-sm">Read Full Guide</a>
                </div>
            </div>
        </div>`).join('');
}

function renderBlogPost() {
    const el = document.getElementById('blog-post-content');
    const post = blogData.find(p => p.id === new URLSearchParams(location.search).get('id'));
    if (!el || !post) return;

    document.title = `${post.title} | Mountain Adventure Blog`;
    el.innerHTML = `
        <article class="container py-80" style="max-width: 900px;">
            <header class="mb-40 text-center">
                <div class="text-primary mb-15 font-bold uppercase tracking-wide" style="font-size: 0.9rem;">Adventure Guide</div>
                <h1 class="text-secondary mb-20" style="font-size: 3rem;">${post.title}</h1>
                <div class="text-sm-muted">By ${post.author} on ${post.date}</div>
            </header>
            <div class="mb-40 rounded-12 overflow-hidden shadow-sm">
                <img src="${post.image}" alt="${post.title}" style="width: 100%; display: block;">
            </div>
            <div class="blog-body text-sm-muted line-18" style="font-size: 1.1rem; color: #444;">
                <p class="mb-20">The Himalayas are home to some of the most spectacular landscapes on Earth. In this guide, we dive deep into everything you need to know about trekking in this majestic region, specifically focusing on ${post.title.split(' ')[0]}.</p>
                <h2 class="text-secondary mt-40 mb-20">Key Highlights</h2>
                <p class="mb-20">From the bustling local markets at the base camp to the serene silence of high-altitude passes, every moment on this trail is a story waiting to be told.</p>
                <ul class="list-disc pl-20 mb-20">
                    <li>Breathtaking panoramic views of snow-capped peaks.</li>
                    <li>Immersion in local mountain culture and hospitality.</li>
                    <li>Pristine alpine lakes and lush meadows.</li>
                </ul>
                <h2 class="text-secondary mt-40 mb-20">Pro Tips for Trekkers</h2>
                <p class="mb-20">Acclimatization is key. Drink plenty of water and maintain a steady pace. Carry enough layers as temperatures can drop significantly after sunset.</p>
            </div>
        </article>`;
}

function renderWhatsApp() {
    const btn = document.createElement('a');
    btn.id = 'whatsapp-btn';
    btn.href = 'https://wa.me/919800000000?text=Hi! I want to know more about your treks.';
    btn.target = '_blank';
    btn.innerHTML = `<svg width="30" height="30" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg><span class="tooltip">Chat with us!</span>`;
    document.body.appendChild(btn);
}
