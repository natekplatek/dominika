// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Dominiko",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "maciek",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Lubisz mnie?",                                    // First interaction
            yesBtn: "nie??",                                             // Text for "Yes" button
            noBtn: "nwm",                                               // Text for "No" button
            secretAnswer: "kocham Cię! ❤️"           // Secret hover message
        },
        second: {
            text: "a jak mocno mnie kochasz?",                          // For the love meter
            startText: "tyle!",                                   // Text before the percentage
            nextBtn: "dalej ❤️"                                         // Text for the next button
        },
        third: {
            text: "Czy dnia 14.02 zostaniesz moją walentynką? 🌹", // The big question!
            yesBtn: "TAAAAK!",                                             // Text for "Yes" button
            noBtn: "nie (a sprobój kliknac tylko)"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "o kurde aż tak mocno?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "TAAAAAAAAAAAAAAAK! 🚀💝",              // Shows when they go past 1000%
        normal: "da sie mocniej! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "elegancko! 🎉💝💖💝💓",
        message: "jestem bardzo bardzo happy widzimy sie, pzdr!",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dn4cey9xb/video/upload/v1770675278/The_Police_-_Every_Breath_You_Take_Official_Video_rnfvli.mp3", // Music streaming URL
        startText: "🎵 muza on",        // Button text to start music
        stopText: "🔇 muza off",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};
// ... TWÓJ ORYGINAŁ ...

CONFIG.quiz = {
    passScore: 4,
    questions: [
        {
            question: "kiedy był first kiss?",
            answers: ["02.03.2025", "03.02.2025", "22.03.2025"],
            correct: 0
        },
        {
            question: "jakie zwierze znosi jaja?",
            answers: ["kura", "kogut, jak ma dobry dzien", "słoń"],
            correct: 1
        },
        {
            question: "gdzie leży polska?",
            answers: ["obok niemiec", "w moim sercu", "na niebie"],
            correct: 1
        },
        {
            question: "co mnie najbardziej denerwuje?",
            answers: ["moje humorki", "twoje humorki", "oboje mamy swoje"],
            correct: 2
        },
        {
            question: "czego chce najwiecej?",
            answers: ["wspolnych chwil", "twojego usmiechu", "wszystkiego!!!"],
            correct: 2
        }
    ],
    passText: "WOW 🥰 brawo ty!",
    failText: "Eeeej 😢 cos ci kurde nie wyszlo..."
};

window.VALENTINE_CONFIG = CONFIG;

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
