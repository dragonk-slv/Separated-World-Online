document.addEventListener('DOMContentLoaded', function () {
    // スライダーを初期化（Bootstrapの機能を利用）
    const carouselElement = document.querySelector('#myCarousel');
    if (carouselElement) {
        const carousel = new bootstrap.Carousel(carouselElement, {
            interval: 5000, // 画像の切り替え間隔 (ミリ秒)
            ride: 'carousel' // 自動再生を有効化
        });
    }
});

