document.addEventListener('DOMContentLoaded', () => {
    const toLettersBtn = document.getElementById('btn-to-letters');
    
    if (toLettersBtn) {
        toLettersBtn.addEventListener('click', () => {
            // الانتقال من شاشة الكون إلى شاشة الـ 100 ظرف
            switchScreen('screen-universe', 'screen-letters');
        });
    }
});