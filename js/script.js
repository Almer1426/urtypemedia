// Simpan instance swiper di variabel ini agar bisa diakses
let mySwiper;

function swiperMode() {
    // Tentukan breakpoint media query
    let mobileView = window.matchMedia('(max-width: 767px)');

    // Cek apakah layar cocok dengan kondisi mobile
    if (mobileView.matches) {
        // Jika layar kecil dan Swiper BELUM aktif, maka aktifkan
        if (!mySwiper) {
            mySwiper = new Swiper('.swiper', {
                // Konfigurasi Swiper-mu
                loop: true,
                slidesPerView: 1, // Tampilkan 1 slide per view
                spaceBetween: 1,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                }
            });
        }
    } else {
        // Jika layar lebar dan Swiper SUDAH aktif, maka hancurkan
        if (mySwiper) {
            mySwiper.destroy(true, true);
            mySwiper = undefined; // Reset variabel agar bisa dibuat lagi nanti
        }
    }
}

// Panggil fungsi saat halaman pertama kali dimuat
window.addEventListener('load', swiperMode);

// Panggil kembali fungsi setiap kali ukuran jendela diubah
window.addEventListener('resize', swiperMode);

const hamburgerButton = document.querySelector('.hamburger-button');
const navMenu = document.querySelector('nav');

hamburgerButton.addEventListener('click', () => {
  navMenu.classList.toggle('is-active');
  hamburgerButton.classList.toggle('is-active');
});