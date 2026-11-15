// دالة التنقل العامة بين الشاشات
function switchScreen(fromId, toId) {
    document.getElementById(fromId).classList.remove('active');
    setTimeout(() => {
        document.getElementById(fromId).classList.add('hidden');
        const nextScreen = document.getElementById(toId);
        nextScreen.classList.remove('hidden');
        setTimeout(() => nextScreen.classList.add('active'), 50);
    }, 800);
}

// إنشاء النجوم في الخلفية عند التحميل
window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('stars-container');
    for (let i = 0; i < 120; i++) {
        const star = document.createElement('div');
        star.className = 'star-particle';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.setProperty('--dur', `${Math.random() * 3 + 2}s`);
        container.appendChild(star);
    }
    renderEnvelopes('beauty');
});

// الخاتمة النصية المؤثرة مع تأثير الكتابة التلقائية
const finalLetterText = `إلى جود...
يا آخر حكاياتي وأوّل أمانيي،
من بين كل الأشياء اللي كان اقدر أصنعها اخترت أصنع لك كون.
مو لأن الكون يشبهك ولا لأن النجوم تشبه عيونك، بس لأنّي كل ما حاولت أوصف مكانك بقلبي، ما وسعتني الكلمات، واحتجت سماوات.
هالنجوم اللي شفتيها، ورا كل وحدة منها شعور، وهالكواكب اللي مريتي عليها، ورا كل كوكب أمنية، وهالرسائل اللي قريتيها، كل وحدة منها جزء صغير من شي أكبر من إني أقدر أقوله.
يا جودي أنا ما بنيت هالعالم عشان أقول لك إني أحبك وبس، بنيته عشان أوريك وش يصير بخاطري يوم تكونين فيه.
ولو رجع بي الوقت لأول لحظة عرفتك فيها وعطوني ألف طريق غير طريقك ولله ولله والله إني باختار الطريق اللي يودّيني لك حتى لو ما عرفت وش ينتظرني بآخره.
وإن كان لي من هالدنيا أمنية ما أبي العمر يسبقني عنها، فهي إن هالكون اللي بنيته لك يصير يوم من الأيام أقل من بيتنا، وإن النجوم اللي جمّعتها لك تصير أقل من ضحكتك بليالينا، وإن كل هالأمنيات اللي كتبتها تصير أعمار نعيشها سوا.
ولو عاد بي العمر من أوّله...
بسوي لك كون جديد، وكل مرّة بسمّيه جودي.

من ريّان، للي صارت بعيونه دنيا.`;

function startTypingFinalLetter() {
    const element = document.getElementById('typing-final-letter');
    const finalMessageContainer = document.getElementById('final-message-container');
    const universeFadeContainer = document.getElementById('universe-fade-container');
    const finalOutroContainer = document.getElementById('final-outro-container');
    
    if (!element) return; // للتأكد أن العنصر موجود
    
    element.innerHTML = '';
    let index = 0;

    function type() {
        if (index < finalLetterText.length) {
            element.innerHTML += finalLetterText.charAt(index) === '\n' ? '<br>' : finalLetterText.charAt(index);
            index++;
            setTimeout(type, 80); // سرعة الكتابة الهادئة
        } else {
            // == [هنا اللحظة اللي تنتهي فيها الكتابة تماماً] ==
            console.log("انتهت الكتابة، يبدأ المشهد الختامي الآن...");
            
            // ننتظر ثانيتين بعد ما تخلص الرسالة ثم نبدأ تختفي النجوم
            setTimeout(() => {
                if (finalMessageContainer) {
                    finalMessageContainer.style.opacity = '0';
                    setTimeout(() => {
                        finalMessageContainer.classList.add('hidden');
                        if (universeFadeContainer) {
                            universeFadeContainer.classList.remove('hidden');
                        }
                        
                        // بعد 3 ثواني من ظهور نجمة جود، يظهر السطر الأخير والزر
                        setTimeout(() => {
                            if (universeFadeContainer) {
                                universeFadeContainer.style.opacity = '0';
                                setTimeout(() => {
                                    universeFadeContainer.classList.add('hidden');
                                    if (finalOutroContainer) {
                                        finalOutroContainer.classList.remove('hidden');
                                    }
                                }, 1000);
                            }
                        }, 3500);
                        
                    }, 1000);
                }
            }, 2000);
        }
    }

    type();
}

// برمجة زر العودة للبداية
document.addEventListener('DOMContentLoaded', () => {
    const restartBtn = document.getElementById('btn-restart-universe');
    
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            // إعادة النجوم وإعادة ضبط المشهد الختامي للمرات القادمة
            document.body.classList.remove('dim-stars');
            document.getElementById('final-outro-container').classList.add('hidden');
            document.getElementById('final-message-container').classList.remove('hidden', 'fade-out');
            document.getElementById('universe-fade-container').classList.remove('fade-out');

            // الرجوع لشاشة البداية (تأكد إن screen-welcome أو screen-counter هو اسم شاشتك الأولى)
            switchScreen('screen-finale', 'screen-welcome'); 
            
            if (navigator.vibrate) navigator.vibrate([30, 50, 30]);
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const toLettersBtn = document.getElementById('btn-to-letters');
    
    if (toLettersBtn) {
        toLettersBtn.addEventListener('click', () => {
            // الانتقال من شاشة الكون إلى شاشة الـ 100 ظرف
            switchScreen('screen-universe', 'screen-letters');
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.getElementById('btn-next-from-museum');

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            // ضع هنا اسم الشاشة التالية التي تريد الانتقال إليها
            switchScreen('screen-museum', 'screen-next-name'); 
        });
    }
});

// ربط زر الانتقال في متحف الصوت بالشاشة التالية مباشرة
document.addEventListener('DOMContentLoaded', () => {
    // ابحث عن الزر بناءً على النص أو كلاس الأزرار المضيئة
    const buttons = document.querySelectorAll('button, .btn-glow');
    
    buttons.forEach(btn => {
        if (btn.textContent.includes('بكره لنا')) {
            btn.addEventListener('click', () => {
                // استبدل 'screen-next' باسم الشاشة التالية التي ترغب بالانتقال إليها
                switchScreen('screen-museum', 'screen-next'); 
                
                // نبضة اهتزاز خفيفة للجوال عند الضغط
                if (navigator.vibrate) navigator.vibrate(20);
            });
        }
    });
});


// أضف هذا الكود في نهاية ملف js/main.js

// 1. غبار ذهبي ناعم يتبع لمسة الإصبع على الجوال
function createTouchSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    sparkle.style.width = '6px';
    sparkle.style.height = '6px';
    sparkle.style.borderRadius = '50%';
    sparkle.style.background = 'radial-gradient(circle, #ffffff 0%, #f4b6c8 45%, #e6cfa7 80%, transparent 100%)';
sparkle.style.boxShadow = '0 0 10px rgba(244, 182, 200, 0.7)';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.transform = 'translate(-50%, -50%) scale(1)';
    sparkle.style.transition = 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)';
    
    document.body.appendChild(sparkle);

    requestAnimationFrame(() => {
        sparkle.style.transform = `translate(-50%, -85px) scale(0)`;
        sparkle.style.opacity = '0';
    });

    setTimeout(() => sparkle.remove(), 1200);
}

// تفعيل الغبار الذهبي عند اللمس أو السحب بالجوال
window.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    createTouchSparkle(touch.clientX, touch.clientY);
}, { passive: true });

window.addEventListener('touchmove', (e) => {
    if (Math.random() > 0.65) { // تخفيف الكثافة ليظل هادئاً وفخماً
        const touch = e.touches[0];
        createTouchSparkle(touch.clientX, touch.clientY);
    }
}, { passive: true });

// 2. نبضة اهتزاز ناعمة جداً عند الضغط على العناصر التفاعلية (تعمل على أندرويد بسلاسة)
document.addEventListener('click', (e) => {
    if (e.target.closest('button, .envelope-item, .museum-room, .planet-orb')) {
        if (navigator.vibrate) {
            navigator.vibrate(15); // نبضة قصيرة وناعمة جداً (15 ملي ثانية)
        }
    }
});

// التحكم بالمشهد الختامي واللحظات الثلاث
function initFinaleSequence() {
    const finalMessageContainer = document.getElementById('final-message-container');
    const universeFadeContainer = document.getElementById('universe-fade-container');
    const finalOutroContainer = document.getElementById('final-outro-container');
    const proceedBtn = document.getElementById('btn-proceed-to-fade');
    const restartBtn = document.getElementById('btn-restart-universe');

    // الانتقال من الرسالة إلى اختفاء النجوم
    if (proceedBtn) {
        proceedBtn.addEventListener('click', () => {
            finalMessageContainer.classList.add('fade-out');
            setTimeout(() => {
                finalMessageContainer.classList.add('hidden');
                universeFadeContainer.classList.remove('hidden');
                
                // بعد ثواني من تخافت النجوم، نظهر السطر الأخير
                setTimeout(() => {
                    universeFadeContainer.classList.add('fade-out');
                    setTimeout(() => {
                        universeFadeContainer.classList.add('hidden');
                        finalOutroContainer.classList.remove('hidden');
                    }, 1000);
                }, 4000); // مدة بقاء النجمة الوحيدة وهي تضيء
            }, 1000);
        });
    }

    // الزر الأخير: إعادة عيشة الكون من البداية
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            // العودة لشاشة البداية أو الشاشة الأولى في الكون
            switchScreen('screen-finale', 'screen-welcome'); 
            if (navigator.vibrate) navigator.vibrate([30, 50, 30]);
        });
    }
}

// استدعاء دالة الختام عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    initFinaleSequence();
});

// أضف هذا في js/main.js

// 1. شُهب ذهبية عابرة بهدوء كل 5 ثوانٍ
setInterval(() => {
    const shooter = document.createElement('div');
    shooter.style.position = 'fixed';
    shooter.style.top = `${Math.random() * 40}%`;
    shooter.style.left = `${Math.random() * 80 + 20}%`;
    shooter.style.width = '90px';
    shooter.style.height = '1.5px';
    shooter.style.background = 'linear-gradient(90deg, rgba(255,255,255,0.9), rgba(212,175,55,0.4), transparent)';
    shooter.style.transform = 'rotate(-35deg)';
    shooter.style.pointerEvents = 'none';
    shooter.style.zIndex = '1';
    shooter.style.transition = 'all 1.4s cubic-bezier(0.16, 1, 0.3, 1)';
    
    document.body.appendChild(shooter);

    requestAnimationFrame(() => {
        shooter.style.transform = 'rotate(-35deg) translateX(-350px)';
        shooter.style.opacity = '0';
    });

    setTimeout(() => shooter.remove(), 1400);
}, 5500);

// 2. استجابة الكون لحركة الجوال (Gyroscope Parallax)
window.addEventListener('deviceorientation', (event) => {
    const tiltX = event.gamma ? event.gamma * 0.4 : 0; // ميلان يمين/يسار
    const tiltY = event.beta ? (event.beta - 45) * 0.4 : 0; // ميلان أمام/خلف
    
   const stars = document.getElementById('stars-container');
    if (stars) {
        stars.style.transform = `translate(${tiltX}px, ${tiltY}px)`;
    }
});

// كود الانتقال السلس من شاشة العداد إلى شاشة الكون الرئيسي
const btnToUniverse = document.getElementById('btn-to-universe');
if (btnToUniverse) {
    btnToUniverse.addEventListener('click', () => {
        const screenCounter = document.getElementById('screen-counter');
        const screenUniverse = document.getElementById('screen-universe');
        
        if (screenCounter && screenUniverse) {
            screenCounter.classList.add('hidden');
            screenUniverse.classList.remove('hidden');
        }
    });
});
