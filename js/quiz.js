document.getElementById('btn-to-final').addEventListener('click', () => {
    switchScreen('screen-quiz', 'screen-final');
    // بدء تأثير الكتابة التلقائية للخاتمة الفخمة فور الدخول
    if (typeof startTypingFinalLetter === 'function') {
        startTypingFinalLetter();
    }
});