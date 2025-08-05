document.addEventListener('DOMContentLoaded', function() {

    // --- LOGIKA HAMBURGER MENU ---
    const hamburgerButton = document.querySelector('.hamburger-button');
    const navMenu = document.querySelector('nav');

    hamburgerButton.addEventListener('click', () => {
        navMenu.classList.toggle('is-active');
        hamburgerButton.classList.toggle('is-active');
    });

    // --- LOGIKA GALLERY & PAGINATION ---

    // Data semua gambar (ganti path sesuai kebutuhan)
    const galleryData = [
        {
            id: 'soarer-1',
            title: 'Toyota Soarer',
            mainImage: 'assets/images/992-ST-black/DSC00418-2.jpg',
            details: 'ILCE-6400<br>E PZ 16-50mm F3.5-5.6 OSS<br>35mm f/5.0 1/60s ISO200',
            thumbnails: [
                'assets/images/992-ST-black/DSC00418-2.jpg',
                'assets/images/992-ST-black/DSC00422.jpg',
                'assets/images/992-ST-black/DSC00439.jpg',
            ]
        },
        {
            id: 'skyline-1',
            title: 'Nissan Skyline',
            mainImage: 'assets/images/car2.png',
            details: 'SONY A7III<br>FE 85mm F1.8<br>85mm f/1.8 1/200s ISO100',
            thumbnails: [
                'assets/images/car2.png',
                'assets/images/car5.png',
                'assets/images/car6.png'
            ]
        },
        {
            id: 'skyline-1',
            title: 'Nissan Skyline',
            mainImage: 'assets/images/car2.png',
            details: 'SONY A7III<br>FE 85mm F1.8<br>85mm f/1.8 1/200s ISO100',
            thumbnails: [
                'assets/images/car2.png',
                'assets/images/car5.png',
                'assets/images/car6.png'
            ]
        },
        {
            id: 'skyline-1',
            title: 'Nissan Skyline',
            mainImage: 'assets/images/car2.png',
            details: 'SONY A7III<br>FE 85mm F1.8<br>85mm f/1.8 1/200s ISO100',
            thumbnails: [
                'assets/images/car2.png',
                'assets/images/car5.png',
                'assets/images/car6.png'
            ]
        },
        {
            id: 'skyline-1',
            title: 'Nissan Skyline',
            mainImage: 'assets/images/car2.png',
            details: 'SONY A7III<br>FE 85mm F1.8<br>85mm f/1.8 1/200s ISO100',
            thumbnails: [
                'assets/images/car2.png',
                'assets/images/car5.png',
                'assets/images/car6.png'
            ]
        },
        {
            id: 'skyline-1',
            title: 'Nissan Skyline',
            mainImage: 'assets/images/car2.png',
            details: 'SONY A7III<br>FE 85mm F1.8<br>85mm f/1.8 1/200s ISO100',
            thumbnails: [
                'assets/images/car2.png',
                'assets/images/car5.png',
                'assets/images/car6.png'
            ]
        },
        {
            id: 'skyline-1',
            title: 'Nissan Skyline',
            mainImage: 'assets/images/car2.png',
            details: 'SONY A7III<br>FE 85mm F1.8<br>85mm f/1.8 1/200s ISO100',
            thumbnails: [
                'assets/images/car2.png',
                'assets/images/car5.png',
                'assets/images/car6.png'
            ]
        },
        {
            id: 'skyline-1',
            title: 'Nissan Skyline',
            mainImage: 'assets/images/car2.png',
            details: 'SONY A7III<br>FE 85mm F1.8<br>85mm f/1.8 1/200s ISO100',
            thumbnails: [
                'assets/images/car2.png',
                'assets/images/car5.png',
                'assets/images/car6.png'
            ]
        },
        {
            id: 'skyline-1',
            title: 'Nissan Skyline',
            mainImage: 'assets/images/car2.png',
            details: 'SONY A7III<br>FE 85mm F1.8<br>85mm f/1.8 1/200s ISO100',
            thumbnails: [
                'assets/images/car2.png',
                'assets/images/car5.png',
                'assets/images/car6.png'
            ]
        },
        {
            id: 'skyline-1',
            title: 'Nissan Skyline',
            mainImage: 'assets/images/car2.png',
            details: 'SONY A7III<br>FE 85mm F1.8<br>85mm f/1.8 1/200s ISO100',
            thumbnails: [
                'assets/images/car2.png',
                'assets/images/car5.png',
                'assets/images/car6.png'
            ]
        },
        {
            id: 'skyline-1',
            title: 'Nissan Skyline',
            mainImage: 'assets/images/car2.png',
            details: 'SONY A7III<br>FE 85mm F1.8<br>85mm f/1.8 1/200s ISO100',
            thumbnails: [
                'assets/images/car2.png',
                'assets/images/car5.png',
                'assets/images/car6.png'
            ]
        },
    ];

    const itemsPerPage = 9;
    let currentPage = 1;
    const totalPages = Math.ceil(galleryData.length / itemsPerPage);
    
    const galleryContainer = document.querySelector('.hero-image');
    const paginationContainer = document.querySelector('.pagination');
    const lightbox = document.getElementById('lightbox');

    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxOverlay = lightbox.querySelector('.lightbox-overlay');
    const lightboxMainImg = lightbox.querySelector('.lightbox-main-image img');
    const lightboxTitle = lightbox.querySelector('.lightbox-title');
    const lightboxDetails = lightbox.querySelector('.lightbox-details');
    const lightboxThumbnails = lightbox.querySelector('.lightbox-thumbnails');

    /**
     * Menampilkan gambar untuk halaman tertentu
     * @param {number} page - Nomor halaman yang akan ditampilkan
     */
    function displayGalleryPage(page) {
        galleryContainer.innerHTML = '';
        currentPage = page;
        const pageItems = galleryData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

        pageItems.forEach(item => {
            const link = document.createElement('a');
            link.href = '#';
            link.classList.add('image-container');
            link.dataset.id = item.id;

            const img = document.createElement('img');
            img.src = item.mainImage;
            img.alt = item.title;

            const title = document.createElement('h3');
            title.textContent = item.title;

            link.appendChild(img);
            link.appendChild(title);
            galleryContainer.appendChild(link);
            
            link.addEventListener('click', (e) => {
                e.preventDefault();
                openLightbox(item.id);
            });
        });
        
        setupPagination();
    }

    /**
     * Membuat dan memperbarui tombol-tombol pagination
     */
    function setupPagination() {
        paginationContainer.innerHTML = ''; // Kosongkan pagination

        // Tombol "Previous"
        const prevLi = document.createElement('li');
        prevLi.innerHTML = `<a href="#"><svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.16016 1.41L3.58016 6L8.16016 10.59L6.75016 12L0.750156 6L6.75016 0L8.16016 1.41Z" fill="currentColor"/></svg></a>`;
        prevLi.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentPage > 1) {
                displayGalleryPage(currentPage - 1);
            }
        });
        paginationContainer.appendChild(prevLi);

        // Tombol Angka
        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = i;
            a.classList.add('page-link');
            li.appendChild(a);

            li.addEventListener('click', (e) => {
                e.preventDefault();
                displayGalleryPage(i);
            });
            paginationContainer.appendChild(li);
        }

        // Tombol "Next"
        const nextLi = document.createElement('li');
        nextLi.innerHTML = `<a href="#"><svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.839844 1.41L5.41984 6L0.839844 10.59L2.24984 12L8.24984 6L2.24984 0L0.839844 1.41Z" fill="currentColor"/></svg></a>`;
        nextLi.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentPage < totalPages) {
                displayGalleryPage(currentPage + 1);
            }
        });
        paginationContainer.appendChild(nextLi);
        
        updatePaginationButtons();
    }
    
    /**
     * Memperbarui status 'active' pada tombol pagination
     */
    function updatePaginationButtons() {
        const pageLinks = paginationContainer.querySelectorAll('li');
        pageLinks.forEach((li, index) => {
            // Index 0 adalah tombol prev, jadi tombol angka dimulai dari index 1
            if (index === currentPage) {
                li.classList.add('active');
            } else {
                li.classList.remove('active');
            }
        });
    }

    function openLightbox(itemId) {
        const itemData = galleryData.find(item => item.id === itemId);
        if (!itemData) return;

        lightboxMainImg.src = itemData.thumbnails[0];
        lightboxTitle.textContent = itemData.title;
        lightboxDetails.innerHTML = itemData.details;

        lightboxThumbnails.innerHTML = '';
        itemData.thumbnails.forEach((thumbSrc, index) => {
            const thumbImg = document.createElement('img');
            thumbImg.src = thumbSrc;
            if (index === 0) thumbImg.classList.add('active');
            
            thumbImg.addEventListener('click', () => {
                lightboxMainImg.src = thumbSrc;
                lightboxThumbnails.querySelector('.active')?.classList.remove('active');
                thumbImg.classList.add('active');
            });
            
            lightboxThumbnails.appendChild(thumbImg);
        });

        lightbox.classList.add('is-open');
        document.body.classList.add('lightbox-open');
    }

    function closeLightbox() {
        lightbox.classList.remove('is-open');
        document.body.classList.remove('lightbox-open');
    }

    if(lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if(lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);

    // Inisialisasi galeri saat halaman dimuat
    if (galleryContainer && paginationContainer) {
        displayGalleryPage(currentPage);
        setupPagination();
    }
});
