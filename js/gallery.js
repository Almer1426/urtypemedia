document.addEventListener('DOMContentLoaded', function() {

    // --- LOGIKA HAMBURGER MENU ---
    const hamburgerButton = document.querySelector('.hamburger-button');
    const navMenu = document.querySelector('nav');

    hamburgerButton.addEventListener('click', () => {
        navMenu.classList.toggle('is-active');
        hamburgerButton.classList.toggle('is-active');
    });

    const galleryData = [
        {
            id: 'soarer',
            title: 'Porsche 992 ST',
            // Gambar kecil untuk grid galeri utama
            gridImage: 'assets/images/gallery/992 ST/WebP/DSC00418-2.webp', 
            details: 'ILCE-6400<br>E PZ 16-50mm F3.5-5.6 OSS<br>35mm f/5.0 1/60s ISO200',
            // Daftar gambar untuk lightbox
            detailImages: [
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00418-2.webp', hd: 'assets/images/gallery/992 ST/DSC00418-2.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00422.webp', hd: 'assets/images/gallery/992 ST/DSC00422.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00439.webp', hd: 'assets/images/gallery/992 ST/DSC00439.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00453.webp', hd: 'assets/images/gallery/992 ST/DSC00453.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00530.webp', hd: 'assets/images/gallery/992 ST/DSC00530.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00559.jpg', hd: 'assets/images/gallery/992 ST/DSC00559.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
            ]
        },
        {
            id: 'soarer',
            title: 'Porsche 992 ST',
            // Gambar kecil untuk grid galeri utama
            gridImage: 'assets/images/gallery/992 ST/WebP/DSC00418-2.webp', 
            details: 'ILCE-6400<br>E PZ 16-50mm F3.5-5.6 OSS<br>35mm f/5.0 1/60s ISO200',
            // Daftar gambar untuk lightbox
            detailImages: [
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00418-2.webp', hd: 'assets/images/gallery/992 ST/DSC00418-2.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00422.webp', hd: 'assets/images/gallery/992 ST/DSC00422.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00439.webp', hd: 'assets/images/gallery/992 ST/DSC00439.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00453.webp', hd: 'assets/images/gallery/992 ST/DSC00453.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00530.webp', hd: 'assets/images/gallery/992 ST/DSC00530.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00559.jpg', hd: 'assets/images/gallery/992 ST/DSC00559.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
            ]
        },
        {
            id: 'soarer',
            title: 'Porsche 992 ST',
            // Gambar kecil untuk grid galeri utama
            gridImage: 'assets/images/gallery/992 ST/WebP/DSC00418-2.webp', 
            details: 'ILCE-6400<br>E PZ 16-50mm F3.5-5.6 OSS<br>35mm f/5.0 1/60s ISO200',
            // Daftar gambar untuk lightbox
            detailImages: [
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00418-2.webp', hd: 'assets/images/gallery/992 ST/DSC00418-2.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00422.webp', hd: 'assets/images/gallery/992 ST/DSC00422.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00439.webp', hd: 'assets/images/gallery/992 ST/DSC00439.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00453.webp', hd: 'assets/images/gallery/992 ST/DSC00453.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00530.webp', hd: 'assets/images/gallery/992 ST/DSC00530.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00559.jpg', hd: 'assets/images/gallery/992 ST/DSC00559.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
            ]
        },
        {
            id: 'soarer',
            title: 'Porsche 992 ST',
            // Gambar kecil untuk grid galeri utama
            gridImage: 'assets/images/gallery/992 ST/WebP/DSC00418-2.webp', 
            details: 'ILCE-6400<br>E PZ 16-50mm F3.5-5.6 OSS<br>35mm f/5.0 1/60s ISO200',
            // Daftar gambar untuk lightbox
            detailImages: [
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00418-2.webp', hd: 'assets/images/gallery/992 ST/DSC00418-2.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00422.webp', hd: 'assets/images/gallery/992 ST/DSC00422.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00439.webp', hd: 'assets/images/gallery/992 ST/DSC00439.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00453.webp', hd: 'assets/images/gallery/992 ST/DSC00453.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00530.webp', hd: 'assets/images/gallery/992 ST/DSC00530.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00559.jpg', hd: 'assets/images/gallery/992 ST/DSC00559.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
            ]
        },
        {
            id: 'soarer',
            title: 'Porsche 992 ST',
            // Gambar kecil untuk grid galeri utama
            gridImage: 'assets/images/gallery/992 ST/WebP/DSC00418-2.webp', 
            details: 'ILCE-6400<br>E PZ 16-50mm F3.5-5.6 OSS<br>35mm f/5.0 1/60s ISO200',
            // Daftar gambar untuk lightbox
            detailImages: [
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00418-2.webp', hd: 'assets/images/gallery/992 ST/DSC00418-2.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00422.webp', hd: 'assets/images/gallery/992 ST/DSC00422.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00439.webp', hd: 'assets/images/gallery/992 ST/DSC00439.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00453.webp', hd: 'assets/images/gallery/992 ST/DSC00453.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00530.webp', hd: 'assets/images/gallery/992 ST/DSC00530.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00559.jpg', hd: 'assets/images/gallery/992 ST/DSC00559.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
            ]
        },
        {
            id: 'soarer',
            title: 'Porsche 992 ST',
            // Gambar kecil untuk grid galeri utama
            gridImage: 'assets/images/gallery/992 ST/WebP/DSC00418-2.webp', 
            details: 'ILCE-6400<br>E PZ 16-50mm F3.5-5.6 OSS<br>35mm f/5.0 1/60s ISO200',
            // Daftar gambar untuk lightbox
            detailImages: [
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00418-2.webp', hd: 'assets/images/gallery/992 ST/DSC00418-2.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00422.webp', hd: 'assets/images/gallery/992 ST/DSC00422.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00439.webp', hd: 'assets/images/gallery/992 ST/DSC00439.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00453.webp', hd: 'assets/images/gallery/992 ST/DSC00453.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00530.webp', hd: 'assets/images/gallery/992 ST/DSC00530.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00559.jpg', hd: 'assets/images/gallery/992 ST/DSC00559.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
            ]
        },
        {
            id: 'soarer',
            title: 'Porsche 992 ST',
            // Gambar kecil untuk grid galeri utama
            gridImage: 'assets/images/gallery/992 ST/WebP/DSC00418-2.webp', 
            details: 'ILCE-6400<br>E PZ 16-50mm F3.5-5.6 OSS<br>35mm f/5.0 1/60s ISO200',
            // Daftar gambar untuk lightbox
            detailImages: [
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00418-2.webp', hd: 'assets/images/gallery/992 ST/DSC00418-2.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00422.webp', hd: 'assets/images/gallery/992 ST/DSC00422.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00439.webp', hd: 'assets/images/gallery/992 ST/DSC00439.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00453.webp', hd: 'assets/images/gallery/992 ST/DSC00453.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00530.webp', hd: 'assets/images/gallery/992 ST/DSC00530.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00559.jpg', hd: 'assets/images/gallery/992 ST/DSC00559.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
            ]
        },
        {
            id: 'soarer',
            title: 'Porsche 992 ST',
            // Gambar kecil untuk grid galeri utama
            gridImage: 'assets/images/gallery/992 ST/WebP/DSC00418-2.webp', 
            details: 'ILCE-6400<br>E PZ 16-50mm F3.5-5.6 OSS<br>35mm f/5.0 1/60s ISO200',
            // Daftar gambar untuk lightbox
            detailImages: [
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00418-2.webp', hd: 'assets/images/gallery/992 ST/DSC00418-2.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00422.webp', hd: 'assets/images/gallery/992 ST/DSC00422.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00439.webp', hd: 'assets/images/gallery/992 ST/DSC00439.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00453.webp', hd: 'assets/images/gallery/992 ST/DSC00453.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00530.webp', hd: 'assets/images/gallery/992 ST/DSC00530.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00559.jpg', hd: 'assets/images/gallery/992 ST/DSC00559.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
            ]
        },
        {
            id: 'soarer',
            title: 'Porsche 992 ST',
            // Gambar kecil untuk grid galeri utama
            gridImage: 'assets/images/gallery/992 ST/WebP/DSC00418-2.webp', 
            details: 'ILCE-6400<br>E PZ 16-50mm F3.5-5.6 OSS<br>35mm f/5.0 1/60s ISO200',
            // Daftar gambar untuk lightbox
            detailImages: [
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00418-2.webp', hd: 'assets/images/gallery/992 ST/DSC00418-2.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00422.webp', hd: 'assets/images/gallery/992 ST/DSC00422.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00439.webp', hd: 'assets/images/gallery/992 ST/DSC00439.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00453.webp', hd: 'assets/images/gallery/992 ST/DSC00453.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00530.webp', hd: 'assets/images/gallery/992 ST/DSC00530.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00559.jpg', hd: 'assets/images/gallery/992 ST/DSC00559.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
            ]
        },
        {
            id: 'soarer',
            title: 'Porsche 992 ST',
            // Gambar kecil untuk grid galeri utama
            gridImage: 'assets/images/gallery/992 ST/WebP/DSC00418-2.webp', 
            details: 'ILCE-6400<br>E PZ 16-50mm F3.5-5.6 OSS<br>35mm f/5.0 1/60s ISO200',
            // Daftar gambar untuk lightbox
            detailImages: [
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00418-2.webp', hd: 'assets/images/gallery/992 ST/DSC00418-2.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00422.webp', hd: 'assets/images/gallery/992 ST/DSC00422.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00439.webp', hd: 'assets/images/gallery/992 ST/DSC00439.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00453.webp', hd: 'assets/images/gallery/992 ST/DSC00453.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00530.webp', hd: 'assets/images/gallery/992 ST/DSC00530.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00559.jpg', hd: 'assets/images/gallery/992 ST/DSC00559.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
            ]
        },
        {
            id: 'soarer',
            title: 'Porsche 992 ST',
            // Gambar kecil untuk grid galeri utama
            gridImage: 'assets/images/gallery/992 ST/WebP/DSC00418-2.webp', 
            details: 'ILCE-6400<br>E PZ 16-50mm F3.5-5.6 OSS<br>35mm f/5.0 1/60s ISO200',
            // Daftar gambar untuk lightbox
            detailImages: [
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00418-2.webp', hd: 'assets/images/gallery/992 ST/DSC00418-2.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00422.webp', hd: 'assets/images/gallery/992 ST/DSC00422.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00439.webp', hd: 'assets/images/gallery/992 ST/DSC00439.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00453.webp', hd: 'assets/images/gallery/992 ST/DSC00453.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00530.webp', hd: 'assets/images/gallery/992 ST/DSC00530.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00559.jpg', hd: 'assets/images/gallery/992 ST/DSC00559.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
            ]
        },
        {
            id: 'soarer',
            title: 'Porsche 992 ST',
            // Gambar kecil untuk grid galeri utama
            gridImage: 'assets/images/gallery/992 ST/WebP/DSC00418-2.webp', 
            details: 'ILCE-6400<br>E PZ 16-50mm F3.5-5.6 OSS<br>35mm f/5.0 1/60s ISO200',
            // Daftar gambar untuk lightbox
            detailImages: [
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00418-2.webp', hd: 'assets/images/gallery/992 ST/DSC00418-2.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00422.webp', hd: 'assets/images/gallery/992 ST/DSC00422.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00439.webp', hd: 'assets/images/gallery/992 ST/DSC00439.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00453.webp', hd: 'assets/images/gallery/992 ST/DSC00453.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00530.webp', hd: 'assets/images/gallery/992 ST/DSC00530.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00559.jpg', hd: 'assets/images/gallery/992 ST/DSC00559.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
                { thumb: 'assets/images/gallery/992 ST/WebP/DSC00449.webp', hd: 'assets/images/gallery/992 ST/DSC00449.jpg' },
            ]
        },
        // ... Tambahkan data mobil lainnya dengan format yang sama ...
    ];

    const itemsPerPage = 9;
    let currentPage = 1;
    
    const galleryContainer = document.querySelector('.hero-image');
    const paginationContainer = document.querySelector('.pagination');
    const lightbox = document.getElementById('lightbox');

    if (!galleryContainer || !paginationContainer || !lightbox) return;

    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxOverlay = lightbox.querySelector('.lightbox-overlay');
    const lightboxMainImg = lightbox.querySelector('.lightbox-main-image img');
    const lightboxTitle = lightbox.querySelector('.lightbox-title');
    const lightboxDetailsP = lightbox.querySelector('.lightbox-details p');
    const relatedPhotosGrid = lightbox.querySelector('.related-photos-grid');

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
            // GUNAKAN GAMBAR THUMBNAIL DI SINI
            img.src = item.gridImage; 
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

    function setupPagination() {
        if (!paginationContainer) return;
        paginationContainer.innerHTML = '';
        const totalPages = Math.ceil(galleryData.length / itemsPerPage);
        if (totalPages <= 1) return;

        const prevLi = document.createElement('li');
        prevLi.innerHTML = `<a href="#"><svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.16016 1.41L3.58016 6L8.16016 10.59L6.75016 12L0.750156 6L6.75016 0L8.16016 1.41Z" fill="currentColor"/></svg></a>`;
        prevLi.addEventListener('click', (e) => { e.preventDefault(); if (currentPage > 1) displayGalleryPage(currentPage - 1); });
        paginationContainer.appendChild(prevLi);

        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement('li');
            li.innerHTML = `<a href="#" class="page-link">${i}</a>`;
            li.addEventListener('click', (e) => { e.preventDefault(); displayGalleryPage(i); });
            paginationContainer.appendChild(li);
        }

        const nextLi = document.createElement('li');
        nextLi.innerHTML = `<a href="#"><svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.839844 1.41L5.41984 6L0.839844 10.59L2.24984 12L8.24984 6L2.24984 0L0.839844 1.41Z" fill="currentColor"/></svg></a>`;
        nextLi.addEventListener('click', (e) => { e.preventDefault(); if (currentPage < totalPages) displayGalleryPage(currentPage + 1); });
        paginationContainer.appendChild(nextLi);
        
        updatePaginationButtons();
    }
    
    function updatePaginationButtons() {
        const pageLinks = paginationContainer.querySelectorAll('li');
        pageLinks.forEach((li, index) => {
            if (index > 0 && index <= Math.ceil(galleryData.length / itemsPerPage)) {
                if (index === currentPage) {
                    li.classList.add('active');
                } else {
                    li.classList.remove('active');
                }
            }
        });
    }

    function openLightbox(itemId) {
        const itemData = galleryData.find(item => item.id === itemId);
        if (!itemData) return;

        // Tampilkan gambar HD PERTAMA sebagai gambar utama
        lightboxMainImg.src = itemData.detailImages[0].hd; 
        lightboxTitle.textContent = itemData.title;
        lightboxDetailsP.innerHTML = itemData.details;

        relatedPhotosGrid.innerHTML = '';
        
        // Tampilkan gambar THUMBNAIL di related photos
        itemData.detailImages.forEach((imageSet, index) => {
            const thumbImg = document.createElement('img');
            thumbImg.src = imageSet.thumb; // Gunakan versi thumbnail
            thumbImg.dataset.hdSrc = imageSet.hd; // Simpan path HD di data attribute

            if (index === 0) thumbImg.classList.add('active');
            
            thumbImg.addEventListener('click', () => {
                // Saat thumbnail diklik, ganti gambar utama dengan versi HD-nya
                lightboxMainImg.src = thumbImg.dataset.hdSrc;
                
                relatedPhotosGrid.querySelector('.active')?.classList.remove('active');
                thumbImg.classList.add('active');
            });
            
            relatedPhotosGrid.appendChild(thumbImg);
        });

        lightbox.classList.add('is-open');
        document.body.classList.add('lightbox-open');
        document.documentElement.classList.add('lightbox-open');
    }

    function closeLightbox() {
        lightbox.classList.remove('is-open');
        document.body.classList.remove('lightbox-open');
        document.documentElement.classList.remove('lightbox-open');
    }

    if(lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if(lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);

    displayGalleryPage(currentPage);
});
