const voiceScriptUrl = document.currentScript.src;
const museumRooms = document.querySelectorAll('.museum-room');
const playerModal = document.getElementById('voice-player-modal');
const closePlayerBtn = document.getElementById('close-player');
const playerTitle = document.getElementById('player-title');
const playerIntroText = document.getElementById('player-intro-text');
const audioEl = document.getElementById('museum-audio-element');
const playPauseBtn = document.getElementById('btn-play-pause');
const replayBtn = document.getElementById('btn-replay');
const progressBar = document.getElementById('audio-progress');
const audioStatus = document.getElementById('player-audio-status');
const soundWaves = document.querySelectorAll('.sound-wave-visualizer .bar');

function setPlaybackState(isPlaying) {
    if (playPauseBtn) playPauseBtn.innerText = isPlaying ? '⏸' : '▶';
    startWavesAnimation(isPlaying);
}

function playAudio() {
    audioEl.play().catch(error => {
        setPlaybackState(false);
        if (error.name === 'NotAllowedError') {
            audioStatus.textContent = 'اضغطي تشغيل لبدء الاستماع.';
        } else if (error.name !== 'AbortError') {
            audioStatus.textContent = 'تعذر تشغيل التسجيل. تأكدي من وجود ملف MP3 صالح.';
        }
    });
}

museumRooms.forEach(room => {
    room.addEventListener('click', () => {
        const audioFile = room.getAttribute('data-audio');
        if (!audioFile) {
            audioStatus.textContent = 'لم يتم تحديد ملف صوت لهذه الغرفة.';
            return;
        }

        playerTitle.innerText = room.getAttribute('data-title') || '';
        playerIntroText.innerText = room.getAttribute('data-intro') || '';
        audioStatus.textContent = '';
        progressBar.value = 0;
        audioEl.pause();
        setPlaybackState(false);
        audioEl.src = new URL(`../assets/audio/${encodeURIComponent(audioFile)}`, voiceScriptUrl).href;
        audioEl.load();
        playerModal.classList.remove('hidden');
        playAudio();

        if (navigator.vibrate) navigator.vibrate(20);
    });
});

playPauseBtn.addEventListener('click', () => {
    if (audioEl.paused) {
        playAudio();
    } else {
        audioEl.pause();
        setPlaybackState(false);
    }
});

replayBtn.addEventListener('click', () => {
    audioEl.currentTime = 0;
    playAudio();
});

closePlayerBtn.addEventListener('click', () => {
    audioEl.pause();
    audioEl.currentTime = 0;
    setPlaybackState(false);
    playerModal.classList.add('hidden');
});

audioEl.addEventListener('playing', () => {
    audioStatus.textContent = '';
    setPlaybackState(true);
});

audioEl.addEventListener('ended', () => setPlaybackState(false));

audioEl.addEventListener('error', () => {
    setPlaybackState(false);
    audioStatus.textContent = 'تعذر تحميل التسجيل. تأكدي من وجود ملف MP3 صالح في مجلد الصوت.';
});

audioEl.addEventListener('timeupdate', () => {
    if (Number.isFinite(audioEl.duration) && audioEl.duration > 0) {
        progressBar.value = (audioEl.currentTime / audioEl.duration) * 100;
    }
});

progressBar.addEventListener('input', () => {
    if (Number.isFinite(audioEl.duration) && audioEl.duration > 0) {
        audioEl.currentTime = (progressBar.value / 100) * audioEl.duration;
    }
});

function startWavesAnimation(isPlay) {
    soundWaves.forEach((bar, index) => {
        bar.style.animation = isPlay
            ? `wavePulse 0.6s infinite alternate ease-in-out ${index * 0.1}s`
            : 'none';
    });
}

const btnToFuture = document.getElementById('btn-to-future');
if (btnToFuture) {
    btnToFuture.addEventListener('click', () => {
        switchScreen('screen-voice', 'screen-future');
    });
}

const bgMusic = document.getElementById('bg-ambient-music');
const voiceAudio = document.getElementById('museum-audio-element');

// دالة خفض ورفع الصوت بنعومة (Smooth Fade)
function fadeAudioVolume(audioEl, targetVol, duration = 1000) {
    if (!audioEl) return;
    const stepTime = 50;
    const steps = duration / stepTime;
    const volStep = (targetVol - audioEl.volume) / steps;
    
    const fade = setInterval(() => {
        let newVol = audioEl.volume + volStep;
        if ((volStep > 0 && newVol >= targetVol) || (volStep < 0 && newVol <= targetVol)) {
            audioEl.volume = Math.max(0, Math.min(1, targetVol));
            clearInterval(fade);
        } else {
            audioEl.volume = Math.max(0, Math.min(1, newVol));
        }
    }, stepTime);
}

// تشغيل الموسيقى الهادئة عند أول ضغطة دخول للكون
document.getElementById('btn-enter-universe')?.addEventListener('click', () => {
    if (bgMusic) {
        bgMusic.volume = 0;
        bgMusic.play().catch(() => {});
        fadeAudioVolume(bgMusic, 0.22, 2500); // مستوى صوت هادئ جداً (22%)
    }
});

// خفض الموسيقى تلقائياً عند تشغيل تسجيل صوتك في المتحف
if (voiceAudio && bgMusic) {
    voiceAudio.addEventListener('play', () => fadeAudioVolume(bgMusic, 0.03, 800));
    voiceAudio.addEventListener('pause', () => fadeAudioVolume(bgMusic, 0.22, 1200));
    voiceAudio.addEventListener('ended', () => fadeAudioVolume(bgMusic, 0.22, 1200));
}