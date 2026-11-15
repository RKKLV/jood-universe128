// قاعدة بيانات الـ 100 رسالة (الـ 20 الأولى الجاهزة، ويمكنك إكمال البقية بنفس النسق)
const lettersData = {
    beauty: [
        { id: 1, title: "ضحكتك", text: "تدرين وش أغرب شيء فيك؟ إن ضحكتك ما توقف عند أذني، كأنها تعرف طريقها لصدري وتجلس فيه وأحيانًا أكون مشغول بكل شي، وأتذكّر ضحكتك وألقى نفسي ابتسم من دون ما أحس." },
        { id: 2, title: "صوتك", text: "صوتك له مكان ما يشبه أي صوت، حتى لو قلتي أبسط كلمة، حتى لو ما عندك سالفة، أحب أسمعك لان صوتك من الأشياء اللي ما يملّ منها قلبي مهما تكررت." },
        { id: 3, title: "شعرك", text: "شعرك يا زين تفاصيله عليك فيه شيء كل ما تأملته أحس إن الجمال ما يحتاج يرتّب نفسه عشان يكون جميل." },
        { id: 4, title: "عيونك", text: "اهخ ياعيونك الي ما تحتاج تقول شيء عشان أفهم إن فيها حكاية وأحيانًا أطالعها وأحس إني نسيت وش كنت أبي أقول." },
        { id: 5, title: "وقت نومك", text: "حتى وأنتي نايمة، لك حضور غريب أحب اقعدأتأمل ملامحك بهدوء وأقول بيني وبين نفسي يا جعل هالوجه ما يعرف إلا راحة البال." },
        { id: 6, title: "دلعك", text: "أحب دلعك بكل حالاته، حتى الأشياء الصغيرة اللي يمكن تحسبينها عادية، عندي لها مكان خاص يا دلوعتي، أنتي تعرفين كيف تصيرين ألطف جزء من يومي." },
        { id: 7, title: "عفويتك", text: "أحبك يوم ما تحاولين تكونين شيء، يوم تكونين جودي وبس. بعفويتك وكلامك وضحكتك وحتى حركاتك اللي تطلع منك من دون تفكير." },
        { id: 8, title: "ألوانك", text: "أحب أشوفك بالأزرق والأخضر والأسود والأصفر، بس اكتشفت إن الموضوع مو سالفة ألوان؛ أنا أحب اللون يوم يكون عليك أنتِ." },
        { id: 9, title: "اهتمامك", text: "أحب يوم تسألين عني، حتى لو كان سؤالك بسيط. يمكن ما تدرين وش تسوي فيني كلمة منك، بس فيه اهتمام منك يخلّي اليوم كله أهون." },
        { id: 10, title: "صراحتك", text: "أحب إنك تقولين اللي بخاطرك، حتى لو كان صعب علي أسمعه. أبي أعرف جود الحقيقية، مو بس جود اللي تضحك وتقول إنها بخير." },
        { id: 11, title: "غيرتك", text: "حتى غيرتك لها مكان بقلبي، لأنها تخليني أشوف قد إيش التفاصيل الصغيرة بيننا تعني لنا. وأحب دايم إن غيرتنا تكون حب يطمن، مو شيء يتعبنا." },
        { id: 12, title: "صوتك وأنتِ تضحكين", text: "فيه فرق بين إني أسمع ضحكتك وبين إني أسمعك تحاولين تكتمينها. الثانية بالذات لها قدرة غريبة تخرب عليّ جديتي." },
        { id: 13, title: "وقت زعلك", text: "حتى بأيام زعلك، ما أبيك تحسين إنك لازم تخفين شعورك عشان أرضى. أبي أكون الشخص اللي تقدرين تكونين عنده على طبيعتك، حتى وأنتِ مو بخير." },
        { id: 14, title: "تفاصيلك الصغيرة", text: "أحب الأشياء اللي يمكن ما ينتبه لها أحد فيك؛ طريقة كلامك، تعابير وجهك، تغيّر نبرة صوتك، وحتى سكوتك. أنا أنتبه لك أكثر مما تتخيلين." },
        { id: 15, title: "أحلامك", text: "أبي أعرف كل شيء تتمنينه، حتى الأمنيات اللي تحسينها بعيدة أو مستحيلة. يهمني وش يسعدك، وش تحلمين فيه، وش ودك تصيرين عليه." },
        { id: 16, title: "وجودك", text: "ما أحتاج كل يوم يصير فيه شيء استثنائي عشان أكون سعيد معك. أحيانًا كل اللي أبيه إنك تكونين موجودة، ونسولف عن يوم عادي جدًا." },
        { id: 17, title: "رسايلك", text: "حب رسايلك يا جودي، حتى لو كانت كلمتين، وحتى لو كانت سالفة مالها أول من آخر. أحب أرجع أقرا كلامك وأبتسم، وأحيانًا أعيد اقرا الرسالة منك كأنّي أدورها لأول مرّة ولله ما تدرين وش كثر للحروف منك قدرة إنها تدلّع قلبي." },
        { id: 18, title: "مستقبلك", text: "أبي أشوفك تحققين كل شيء تتمنينه، وأشوف عيونك تلمع بالفخر بنفسك. أبيك تعرفين إن أحلامك تهمني، وإن سعادتك مو شيء ثانوي عندي." },
        { id: 19, title: "بيتنا", text: "أتمنى يجي يوم ما أقول لك تصبحين على خير من خلف شاشة، أتمنى أقولها لك وأنتِ جنبي، ونقفل يومنا على هدوء بيت جمعنا بالحلال." },
        { id: 20, title: "اختياري", text: "لو سألتيني وش أكثر شيء أحبه فيك، يمكن ما أقدر أختار صفة وحدة. بس أعرف إن كل يوم يمر يخليني أكتشف سبب جديد يخليني أختارك من جديد." }
    ],
    // بقية الأقسام (يمكنك إضافة الـ 20 رسالة الخاصة بكل قسم هنا لاحقاً بنفس الطريقة)
    personality: [],
    habits: [],
    feelings: [],
    wishes: []
};

const envelopesGrid = document.getElementById('envelopes-grid');
let typingTimeout = null; // للتحكم بإيقاف الكتابة السابقة لو فتحت ظرفاً غيره بسرعة

function renderEnvelopes(category = 'beauty') {
    if (!envelopesGrid) return;
    envelopesGrid.innerHTML = '';
    
    // جلب الرسائل الخاصة بالقسم (أو وضع رسائل افتراضية لو القسم فارغ مؤقتاً)
    const list = lettersData[category].length > 0 ? lettersData[category] : Array.from({length: 20}, (_, i) => ({
        id: i + 1,
        title: `رسالة رقم ${i + 1}`,
        text: `هذه الرسالة تخص التفاصيل الجميلة في قسم ${category}.. قريباً تكمل باقي الكلمات لك وحدك يا دلوعتي.`
    }));

    list.forEach((item) => {
        const env = document.createElement('div');
        env.className = 'envelope-item';
        // يظهر الرقم فقط على الظرف الفضائي ولا يظهر أي عنوان نهائياً
        env.innerHTML = `<span style="font-family: 'Cinzel', serif; font-size: 1.1rem; color: #fce4ec;">#${String(item.id).padStart(3, '0')}</span>`;
        env.onclick = () => openEnvelopeModal(item);
        envelopesGrid.appendChild(env);
    });
}

function openEnvelopeModal(letter) {
    const modal = document.getElementById('envelope-modal');
    const titleEl = document.getElementById('envelope-title-text');
    const textEl = document.getElementById('envelope-message-text');
    const badgeEl = document.getElementById('envelope-number-badge');
    
    // إيقاف أي مؤشر كتابة سابق لمنع التداخل
    if (typingTimeout) clearTimeout(typingTimeout);

    // تجهيز العناصر فارغة قبل بدء الأنيميشن
    badgeEl.innerText = `ظرف فضائي #${String(letter.id).padStart(3, '0')}`;
    titleEl.innerText = "";
    textEl.innerText = "";

    // إظهار النافذة بأنيميشن الفتح الفاخر
    modal.classList.remove('hidden');

    // خطوة 1: كتابة العنوان أولاً بخط فخم وبارز
    setTimeout(() => {
        titleEl.innerText = letter.title;
    }, 400);

    // خطوة 2: بدء الكتابة التدريجية للنص حرفًا حرفًا بعد ظهور العنوان بقليل
    setTimeout(() => {
        typeWriterEffect(letter.text, textEl, 35);
    }, 800);
}

// دالة الكتابة التدريجية (Typewriter)
function typeWriterEffect(text, element, speed) {
    let i = 0;
    element.innerHTML = "";
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i) === '\n' ? '<br>' : text.charAt(i);
            i++;
            typingTimeout = setTimeout(type, speed);
        }
    }
    type();
}

// تفعيل زر الرجوع للظروف
const backToLettersBtn = document.getElementById('btn-back-to-letters');
if (backToLettersBtn) {
    backToLettersBtn.addEventListener('click', () => {
        if (typingTimeout) clearTimeout(typingTimeout);
        document.getElementById('envelope-modal').classList.add('hidden');
    });
}

// تبديل الأقسام (الجمال، الشخصية، العادات، المشاعر، الأمنيات)
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const cat = e.target.getAttribute('data-cat');
        renderEnvelopes(cat);
    });
});

// تشغيل الأظرف العمودية من اليمين لليسار أول ما يتم فتح القسم
window.addEventListener('DOMContentLoaded', () => {
    renderEnvelopes('beauty');
});

document.getElementById('btn-to-voice').addEventListener('click', () => {
    switchScreen('screen-letters', 'screen-voice');
});