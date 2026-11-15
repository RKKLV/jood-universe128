function updateCosmicCounter() {
    const startDate = new Date("2026-07-04T00:00:00").getTime();
    const now = new Date().getTime();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = mins < 10 ? '0' + mins : mins;
    document.getElementById('seconds').innerText = secs < 10 ? '0' + secs : secs;
}

document.addEventListener('DOMContentLoaded', () => {
    const toUniverseBtn = document.getElementById('btn-to-universe');
    
    if (toUniverseBtn) {
        toUniverseBtn.addEventListener('click', () => {
            // الانتقال من شاشة العداد إلى شاشة الكون الرئيسي
            switchScreen('screen-counter', 'screen-universe');
        });
    }
});
setInterval(updateCosmicCounter, 1000);