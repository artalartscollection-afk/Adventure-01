// Gallery: Filter + Lightbox
(function () {
    const grid = document.getElementById('gallery-grid');
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    const lbCaption = document.getElementById('lightbox-caption');
    const lbClose = document.getElementById('lightbox-close');
    const lbPrev = document.getElementById('lightbox-prev');
    const lbNext = document.getElementById('lightbox-next');
    const filterBtns = document.querySelectorAll('.filter-btn');

    if (!grid) return;

    // ── Filter Logic ──────────────────────────────────────
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            const items = grid.querySelectorAll('.gallery-item');

            items.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // ── Lightbox Logic ────────────────────────────────────
    let visibleItems = [];
    let currentIndex = 0;

    function getVisible() {
        return Array.from(grid.querySelectorAll('.gallery-item:not(.hidden)'));
    }

    function openLightbox(index) {
        visibleItems = getVisible();
        currentIndex = index;
        const item = visibleItems[currentIndex];
        lbImg.src = item.querySelector('img').src;
        lbImg.alt = item.querySelector('img').alt;
        lbCaption.textContent = item.dataset.title || '';
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
    }

    function navigate(dir) {
        visibleItems = getVisible();
        currentIndex = (currentIndex + dir + visibleItems.length) % visibleItems.length;
        const item = visibleItems[currentIndex];
        lbImg.style.opacity = '0';
        setTimeout(() => {
            lbImg.src = item.querySelector('img').src;
            lbImg.alt = item.querySelector('img').alt;
            lbCaption.textContent = item.dataset.title || '';
            lbImg.style.opacity = '1';
        }, 150);
    }

    // Attach click to each gallery item
    grid.querySelectorAll('.gallery-item').forEach((item, i) => {
        item.addEventListener('click', () => {
            visibleItems = getVisible();
            const visibleIndex = visibleItems.indexOf(item);
            openLightbox(visibleIndex);
        });
    });

    lbClose.addEventListener('click', closeLightbox);
    lbPrev.addEventListener('click', () => navigate(-1));
    lbNext.addEventListener('click', () => navigate(1));

    // Close on backdrop click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('open')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigate(-1);
        if (e.key === 'ArrowRight') navigate(1);
    });
})();
