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
        { src: 'assets/images/car1.png', title: 'Toyota Soarer' },
        { src: 'assets/images/car2.png', title: 'Nissan Skyline' },
        { src: 'assets/images/car3.png', title: 'Nissan GT-R' },
        { src: 'assets/images/car4.png', title: 'Nissan Silvia' },
        { src: 'assets/images/car5.png', title: 'Nissan 350Z' },
        { src: 'assets/images/car6.png', title: 'Nissan 370Z' },
        { src: 'assets/images/car1.png', title: 'Toyota Soarer 2' },
        { src: 'assets/images/car2.png', title: 'Nissan Skyline 2' },
        { src: 'assets/images/car3.png', title: 'Nissan GT-R 2' },
        { src: 'assets/images/car4.png', title: 'Nissan Silvia 2' },
        { src: 'assets/images/car5.png', title: 'Nissan 350Z 2' },
        { src: 'assets/images/car6.png', title: 'Nissan 370Z 2' }
    ];

    const itemsPerPage = 9; // Tampilkan 9 gambar per halaman
    let currentPage = 1;
    const totalPages = Math.ceil(galleryData.length / itemsPerPage);

    const galleryContainer = document.querySelector('.hero-image');
    const paginationContainer = document.querySelector('.pagination');

    /**
     * Menampilkan gambar untuk halaman tertentu
     * @param {number} page - Nomor halaman yang akan ditampilkan
     */
    function displayGalleryPage(page) {
        galleryContainer.innerHTML = ''; // Kosongkan galeri
        currentPage = page;

        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageItems = galleryData.slice(startIndex, endIndex);

        pageItems.forEach(item => {
            const link = document.createElement('a');
            link.href = '#'; // Link dummy
            link.classList.add('image-container');

            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.title;

            const title = document.createElement('h3');
            title.textContent = item.title;

            link.appendChild(img);
            link.appendChild(title);
            galleryContainer.appendChild(link);
        });
        
        updatePaginationButtons();
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

    // Inisialisasi galeri saat halaman dimuat
    if (galleryContainer && paginationContainer) {
        displayGalleryPage(currentPage);
        setupPagination();
    }
});
