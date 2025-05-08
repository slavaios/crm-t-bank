function initStorySlider() {
    const desktopBackdropImg = document.querySelector('.backdrop .img');
    const swiper = new Swiper('.swiper', {
        allowTouchMove: false,
        direction: 'horizontal',
        loop: false,
        effect: 'fade',
        pagination: {
            el: '.story-slider-progress',
        },
        navigation: {
            nextEl: '.action__right',
            prevEl: '.action__left',
        },
        autoplay: {
            delay: 10000,
            disableOnInteractions: false,
        },
    });

    swiper.on('slideChange', (swiper) => {
        const activeSlide = swiper.slides[swiper.activeIndex];
        const cover = activeSlide.querySelector('.cover');
        const coverStyle = window.getComputedStyle(cover, null);
        const coverImgURL = coverStyle.backgroundImage.slice(4, -1).replace(/"/g, "");

        desktopBackdropImg.style.backgroundImage = `url(${coverImgURL})`;
    });
}

window.addEventListener('DOMContentLoaded', (e) => {
    initStorySlider();
});
