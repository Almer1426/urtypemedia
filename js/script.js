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

    // --- 3. LOGIKA LINK NAVIGASI AKTIF (DISEMPURNAKAN) ---
    const navLinks = document.querySelectorAll('.nav-non');
    const currentLocation = window.location.href;

    // Bagian 1: Menentukan link aktif saat halaman pertama kali dimuat
    navLinks.forEach(link => {
        // Hapus '/index.html' dari href untuk perbandingan yang lebih baik
        const linkHref = link.href.replace('/index.html', '');
        if (linkHref === currentLocation.replace('/index.html', '')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Bagian 2: Menangani SEMUA klik pada link navigasi secara langsung
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // 1. Hapus dulu class 'active' dari SEMUA link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            
            // 2. Tambahkan class 'active' HANYA ke link yang baru saja diklik
            this.classList.add('active');
        });
    });
});