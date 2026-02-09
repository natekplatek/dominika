// Initialize configuration
const config = window.VALENTINE_CONFIG;
document.documentElement.style.setProperty(
  '--background-color-1',
  '#ff9a9e'
);
document.documentElement.style.setProperty(
  '--background-color-2',
  '#fad0c4'
);

// Validate configuration
function validateConfig() {
    const warnings = [];

    // Check required fields
    if (!config.valentineName) {
        warnings.push("Valentine's name is not set! Using default.");
        config.valentineName = "ukochana";
    }

    // Validate colors
    const isValidHex = (hex) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
    Object.entries(config.colors).forEach(([key, value]) => {
        if (!isValidHex(value)) {
            warnings.push(`Invalid color for ${key}! Using default.`);
            config.colors[key] = getDefaultColor(key);
        }
    });

    // Validate animation values
    if (parseFloat(config.animations.floatDuration) < 5) {
        warnings.push("Float duration too short! Setting to 5s minimum.");
        config.animations.floatDuration = "5s";
    }

    if (config.animations.heartExplosionSize < 1 || config.animations.heartExplosionSize > 3) {
        warnings.push("Heart explosion size should be between 1 and 3! Using default.");
        config.animations.heartExplosionSize = 1.5;
    }

    // Log warnings if any
    if (warnings.length > 0) {
        console.warn("⚠️ Configuration Warnings:");
        warnings.forEach(warning => console.warn("- " + warning));
    }
}

// Default color values
function getDefaultColor(key) {
    const defaults = {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    };
    return defaults[key];
}

// Set page title
document.title = config.pageTitle;

// Initialize the page content when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    // Validate configuration first
    validateConfig();

    // Set texts from config
    document.getElementById('valentineTitle').textContent = `${config.valentineName}, ukochana`;
    
    // Set first question texts
    document.getElementById('question1Text').textContent = config.questions.first.text;
    document.getElementById('yesBtn1').textContent = config.questions.first.yesBtn;
    document.getElementById('noBtn1').textContent = config.questions.first.noBtn;
    document.getElementById('secretAnswerBtn').textContent = config.questions.first.secretAnswer;
    
    // Set second question texts
    document.getElementById('question2Text').textContent = config.questions.second.text;
    document.getElementById('startText').textContent = config.questions.second.startText;
    document.getElementById('nextBtn').textContent = config.questions.second.nextBtn;
    
    // Set third question texts
    document.getElementById('question3Text').textContent = config.questions.third.text;
    document.getElementById('yesBtn3').textContent = config.questions.third.yesBtn;
    document.getElementById('noBtn3').textContent = config.questions.third.noBtn;

    // Create initial floating elements
    createFloatingElements();

    // Setup music player
    setupMusicPlayer();
});

// Create floating hearts and bears
function createFloatingElements() {
    const container = document.querySelector('.floating-elements');
    
    // Create hearts
    config.floatingEmojis.hearts.forEach(heart => {
        const div = document.createElement('div');
        div.className = 'heart';
        div.innerHTML = heart;
        setRandomPosition(div);
        container.appendChild(div);
    });

    // Create bears
    config.floatingEmojis.bears.forEach(bear => {
        const div = document.createElement('div');
        div.className = 'bear';
        div.innerHTML = bear;
        setRandomPosition(div);
        container.appendChild(div);
    });
}


// Set random position for floating elements
function setRandomPosition(element) {
    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDelay = Math.random() * 5 + 's';
    element.style.animationDuration = 10 + Math.random() * 20 + 's';
}

// Function to show next question
function showNextQuestion(questionNumber) {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    document.getElementById(`question${questionNumber}`).classList.remove('hidden');
}

// Function to move the "No" button when clicked
function moveButton(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'fixed';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}

// Love meter functionality
const loveMeter = document.getElementById('loveMeter');
const loveValue = document.getElementById('loveValue');
const extraLove = document.getElementById('extraLove');

function setInitialPosition() {
    loveMeter.value = 100;
    loveValue.textContent = 100;
    loveMeter.style.width = '100%';
}

loveMeter.addEventListener('input', () => {
    const value = parseInt(loveMeter.value);
    loveValue.textContent = value;
    
    if (value > 100) {
        extraLove.classList.remove('hidden');
        const overflowPercentage = (value - 100) / 9900;
        const extraWidth = overflowPercentage * window.innerWidth * 0.8;
        loveMeter.style.width = `calc(100% + ${extraWidth}px)`;
        loveMeter.style.transition = 'width 0.3s';
        
        // Show different messages based on the value
        if (value >= 5000) {
            extraLove.classList.add('super-love');
            extraLove.textContent = config.loveMessages.extreme;
        } else if (value > 1000) {
            extraLove.classList.remove('super-love');
            extraLove.textContent = config.loveMessages.high;
        } else {
            extraLove.classList.remove('super-love');
            extraLove.textContent = config.loveMessages.normal;
        }
    } else {
        extraLove.classList.add('hidden');
        extraLove.classList.remove('super-love');
        loveMeter.style.width = '100%';
    }
});

// Initialize love meter
window.addEventListener('DOMContentLoaded', setInitialPosition);
window.addEventListener('load', setInitialPosition);

// Celebration function
function celebrate() {
    document.documentElement.style.setProperty('--background-color-1', '#ff9a9e');
    document.documentElement.style.setProperty('--background-color-2', '#fad0c4');

    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    const celebration = document.getElementById('celebration');
    celebration.classList.remove('hidden');

    document.getElementById('celebrationTitle').textContent = config.celebration.title;
    document.getElementById('celebrationMessage').textContent = config.celebration.message;
    document.getElementById('celebrationEmojis').textContent = config.celebration.emojis;

    createHeartExplosion();
}

// Create heart explosion animation
function createHeartExplosion() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        const randomHeart = config.floatingEmojis.hearts[Math.floor(Math.random() * config.floatingEmojis.hearts.length)];
        heart.innerHTML = randomHeart;
        heart.className = 'heart';
        document.querySelector('.floating-elements').appendChild(heart);
        setRandomPosition(heart);
    }
}

// Music Player Setup
function setupMusicPlayer() {
    const musicControls = document.getElementById('musicControls');
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const musicSource = document.getElementById('musicSource');

    // Only show controls if music is enabled in config
    if (!config.music.enabled) {
        musicControls.style.display = 'none';
        return;
    }

    // Set music source and volume
    musicSource.src = config.music.musicUrl;
    bgMusic.volume = config.music.volume || 0.5;
    bgMusic.load();

    // Try autoplay if enabled
    if (config.music.autoplay) {
        const playPromise = bgMusic.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Autoplay prevented by browser");
                musicToggle.textContent = config.music.startText;
            });
        }
    }

    // Toggle music on button click
    musicToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.textContent = config.music.stopText;
        } else {
            bgMusic.pause();
            musicToggle.textContent = config.music.startText;
        }
    });
} 

// ORYGINAŁ BEZ ZMIAN ↑↑↑
// (wszystko co miałeś zostaje)

// =======================
// QUIZ ADD-ON
// =======================
let quizIndex = 0;
let quizScore = 0;

document.getElementById("nextBtn").onclick = () => {
    showQuiz();
};

function showQuiz() {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    document.getElementById("quizSection").classList.remove('hidden');
    quizIndex = 0;
    quizScore = 0;
    renderQuiz();
}

function renderQuiz() {
    const quiz = config.quiz;
    const box = document.getElementById("quizContent");
    box.innerHTML = "";

    if (quizIndex >= quiz.questions.length) {
        finishQuiz();
        return;
    }

    const q = quiz.questions[quizIndex];
    const p = document.createElement("h2");
    p.textContent = q.question;
    box.appendChild(p);

    q.answers.forEach((ans, i) => {
        const btn = document.createElement("button");
        btn.className = "cute-btn";
        btn.textContent = ans;
        btn.onclick = () => {
            if (i === q.correct) quizScore++;
            quizIndex++;
            renderQuiz();
        };
        box.appendChild(btn);
    });
}

function finishQuiz() {
    const box = document.getElementById("quizContent");
    box.innerHTML = "";

    const h2 = document.createElement("h2");

    if (quizScore >= config.quiz.passScore) {
        h2.textContent = config.quiz.passText;
        box.appendChild(h2);

        const btn = document.createElement("button");
        btn.className = "cute-btn";
        btn.textContent = "Dalej 💖";
       btn.onclick = () => showDramaticPause();

        box.appendChild(btn);
    } else {
        h2.textContent = config.quiz.failText;
        box.appendChild(h2);
    }
}

function showDramaticPause() {
    // ukryj wszystko
    document.querySelectorAll('.question-section').forEach(q =>
        q.classList.add('hidden')
    );

    // użyj quizSection jako sceny
    const quiz = document.getElementById('quizSection');
    quiz.classList.remove('hidden');

    const box = document.getElementById('quizContent');
    box.innerHTML = "";

    const text = document.createElement('h2');
    text.textContent = "Jest jeszcze jedno pytanie…";
    text.style.opacity = "0";
    text.style.transition = "opacity 0.6s ease";
    box.appendChild(text);

    // fade in
    setTimeout(() => {
        text.style.opacity = "1";
    }, 100);

    // ⏳ PAUZA DRAMATYCZNA
    setTimeout(() => {
        showNextQuestion(3);
    }, 3500);
}

// =======================
// GROWING YES BUTTON 😈
// =======================
let yesGrowCount = 0;
const maxYesGrow = 10;

function growYesButton() {
    const yesBtn = document.getElementById('yesBtn3');
    if (!yesBtn) return;

    if (yesGrowCount < maxYesGrow) {
        yesGrowCount++;

        const scale = 1 + yesGrowCount * 0.3;
        yesBtn.style.transform = `scale(${scale})`;
        yesBtn.style.transition = 'transform 0.3s ease';

        if (yesGrowCount > 5) {
            yesBtn.textContent = "dobrze sie bawisz?";
        }
    }
}


