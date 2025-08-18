// --- LOGIKA GLOBAL UNTUK SEMUA HALAMAN ---
document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. LOGIKA SWIPER (HANYA UNTUK HOMEPAGE) ---
    let mySwiper;

    function swiperMode() {
        const swiperContainer = document.querySelector('.swiper');
        if (!swiperContainer) return; // Hanya jalankan jika ada elemen swiper

        let mobileView = window.matchMedia('(max-width: 640px)');

        if (mobileView.matches) {
            if (!mySwiper) {
                mySwiper = new Swiper(swiperContainer, {
                    loop: true,
                    slidesPerView: 1,
                    spaceBetween: 20,
                    centeredSlides: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    }
                });
            }
        } else {
            if (mySwiper) {
                mySwiper.destroy(true, true);
                mySwiper = undefined;
            }
        }
    }

    // Panggil fungsi swiper saat load dan resize
    swiperMode();
    window.addEventListener('resize', swiperMode);

    // --- 2. LOGIKA HAMBURGER MENU ---
    const hamburgerButton = document.querySelector('.hamburger-button');
    const navMenu = document.querySelector('nav');

    if (hamburgerButton && navMenu) {
        hamburgerButton.addEventListener('click', () => {
            navMenu.classList.toggle('is-active');
            hamburgerButton.classList.toggle('is-active');
        });
    }

    // --- 3. LOGIKA LINK NAVIGASI AKTIF ---
    // Kode ini akan otomatis memberi class 'active' pada link nav
    // berdasarkan halaman yang sedang dibuka.
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll('.nav-non');

    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            // Hapus dulu semua class active yang mungkin ada
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            // Tambahkan class active ke link yang cocok
            link.classList.add('active');
        }
    });
});