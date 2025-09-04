document.addEventListener('DOMContentLoaded', function() {
    const itemsPerPage = 9;
    let currentPage = 1;
    
    const galleryContainer = document.querySelector('.hero-image');
    const paginationContainer = document.querySelector('.pagination');

    if (!galleryContainer) return;

    function displayGalleryPage(page) {
        galleryContainer.innerHTML = '';
        currentPage = page;
        const pageItems = window.galleryData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

        pageItems.forEach(item => {
            const link = document.createElement('a');
            link.href = '#';
            link.classList.add('image-container');
            link.dataset.id = item.id;
            link.innerHTML = `<img src="${item.gridImage}" alt="${item.title}"><h3>${item.title}</h3>`;
            galleryContainer.appendChild(link);
        });
        
        setupPagination();
    }

    function setupPagination() {
        if (!paginationContainer) return;
        paginationContainer.innerHTML = '';
        const totalPages = Math.ceil(galleryData.length / itemsPerPage);
        if (totalPages <= 1) return;

        // Tombol Previous
        const prevLi = document.createElement('li');
        prevLi.innerHTML = `<a href="#"><svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.16016 1.41L3.58016 6L8.16016 10.59L6.75016 12L0.750156 6L6.75016 0L8.16016 1.41Z" fill="currentColor"/></svg></a>`;
        if (currentPage === 1) prevLi.classList.add('disabled');
        prevLi.addEventListener('click', (e) => { e.preventDefault(); if (currentPage > 1) displayGalleryPage(currentPage - 1); });
        paginationContainer.appendChild(prevLi);

        // Tombol Halaman
        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement('li');
            li.innerHTML = `<a href="#" class="page-link">${i}</a>`;
            if (i === currentPage) li.classList.add('active');
            li.addEventListener('click', (e) => { e.preventDefault(); displayGalleryPage(i); });
            paginationContainer.appendChild(li);
        }

        // Tombol Next
        const nextLi = document.createElement('li');
        nextLi.innerHTML = `<a href="#"><svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.839844 1.41L5.41984 6L0.839844 10.59L2.24984 12L8.24984 6L2.24984 0L0.839844 1.41Z" fill="currentColor"/></svg></a>`;
        if (currentPage === totalPages) nextLi.classList.add('disabled');
        nextLi.addEventListener('click', (e) => { e.preventDefault(); if (currentPage < totalPages) displayGalleryPage(currentPage + 1); });
        paginationContainer.appendChild(nextLi);
    }

    displayGalleryPage(currentPage);
});