const CORRECT_PASSCODE = "28112008";
const VALID_LOVE_ANSWERS = ["دلوعتي", "مامي", "زوجتي", "محبوبتي", "معشوقتي", "ام عيالي", "غزالتي", "شطورتي", "جودي", "ام نجد", "دنيتي"];

document.getElementById('btn-check-passcode').addEventListener('click', () => {
    const input = document.getElementById('passcode-input').value.trim();
    if (input === CORRECT_PASSCODE) {
        document.getElementById('step-passcode').classList.add('hidden');
        document.getElementById('step-love-check').classList.remove('hidden');
        document.getElementById('security-error').innerText = "";
    } else {
        document.getElementById('security-error').innerText = "الرمز السرّي غير صحيح.. تذكري التكتيك وتاريخنا ❤️";
    }
});

document.getElementById('btn-check-love').addEventListener('click', () => {
    const answer = document.getElementById('love-answer-input').value.trim().toLowerCase();
    const isCorrect = VALID_LOVE_ANSWERS.some(valid => answer.includes(valid.toLowerCase()));
    
    if (isCorrect) {
        switchScreen('screen-security', 'screen-counter');
    } else {
        document.getElementById('security-error').innerText = "مو اي كلمه يامامي فكري زين وش الكلمه اللي كل ما ناديتك فيها ذاب قلبي؟";
    }
});