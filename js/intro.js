document.addEventListener('DOMContentLoaded', () => {
    const enterBtn = document.getElementById('btn-enter-universe');
    
    if (enterBtn) {
        enterBtn.addEventListener('click', () => {
            // الانتقال من شاشة المقدمة إلى شاشة الأمان/الباب السري
            switchScreen('screen-intro', 'screen-security');
        });
    }
});