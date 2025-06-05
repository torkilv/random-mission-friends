// Array of secret missions specifically for Copenhagen
const missions = [
    {
        text: "Find the Little Mermaid statue and take a group photo where all four of you are mimicking her pose. Bonus points if you can get a local to take the photo!",
        difficulty: "Easy 🌟"
    },
    {
        text: "Visit Nyhavn and convince a local to teach you how to say 'Cheers!' in Danish. Then toast with the most expensive drink you can find at a canal-side café.",
        difficulty: "Medium 🌟🌟"
    },
    {
        text: "Climb the Round Tower (Rundetaarn) and spell out 'COPENHAGEN' using your bodies at the top. Document it with a photo!",
        difficulty: "Medium 🌟🌟"
    },
    {
        text: "Visit Tivoli Gardens and ride the oldest roller coaster. All four of you must scream 'HYGGE!' at the highest point.",
        difficulty: "Easy 🌟"
    },
    {
        text: "Find a street musician in the city center and request they play 'Happy Birthday' in Danish. Film the performance and sing along!",
        difficulty: "Hard 🌟🌟🌟"
    },
    {
        text: "Go to Freetown Christiania and find someone to explain the community's history to you. Take a group selfie at the entrance.",
        difficulty: "Medium 🌟🌟"
    },
    {
        text: "Visit the National Museum and find the most unusual artifact. Create a dramatic reenactment of its story with all four friends.",
        difficulty: "Hard 🌟🌟🌟"
    },
    {
        text: "Find a Danish bakery and try to order pastries using only gestures and drawings. No speaking allowed!",
        difficulty: "Medium 🌟🌟"
    },
    {
        text: "Visit Rosenborg Castle and find the Crown Jewels. Take a photo where you're all 'bowing' to the jewels like royal subjects.",
        difficulty: "Easy 🌟"
    },
    {
        text: "Go to the Strøget shopping street and find four strangers willing to join you in a group photo. Each friend must recruit one stranger!",
        difficulty: "Hard 🌟🌟🌟"
    },
    {
        text: "Visit the Carlsberg Brewery and learn to properly pour a Danish beer. All four of you must master the technique!",
        difficulty: "Medium 🌟🌟"
    },
    {
        text: "Find a local park and organize an impromptu Danish dance lesson with passersby. Teach them the 'Copenhagen Shuffle' (you can make it up!).",
        difficulty: "Hard 🌟🌟🌟"
    },
    {
        text: "Visit the Amalienborg Palace and time your visit to see the changing of the guard. Mimic their marching style in a group photo.",
        difficulty: "Easy 🌟"
    },
    {
        text: "Go to a traditional Danish smørrebrød restaurant and order four different open-faced sandwiches. You must finish all of them!",
        difficulty: "Medium 🌟🌟"
    },
    {
        text: "Find the nearest bike rental and cycle through the city like locals. Take a photo of all four bikes lined up perfectly in Danish style.",
        difficulty: "Easy 🌟"
    },
    {
        text: "Visit the Design Museum and find the most 'hygge' object. Create a mini photoshoot with it featuring all four friends.",
        difficulty: "Medium 🌟🌟"
    },
    {
        text: "Go to Nørrebro district and find the most colorful street art. Create your own 'living art' photo with all four friends posing as part of the mural.",
        difficulty: "Medium 🌟🌟"
    },
    {
        text: "Find a cozy café with board games and challenge locals to a game. You must win at least one round as a team!",
        difficulty: "Hard 🌟🌟🌟"
    },
    {
        text: "Visit the harbor and find someone willing to teach you a Danish folk song. Record yourselves singing it together by the water.",
        difficulty: "Hard 🌟🌟🌟"
    },
    {
        text: "Go to Torvehallerne food market and create the most 'Danish' meal possible using ingredients from four different stalls.",
        difficulty: "Medium 🌟🌟"
    },
    {
        text: "Find the narrowest street in Copenhagen and take a group photo where you're all 'squeezed' into the space dramatically.",
        difficulty: "Easy 🌟"
    },
    {
        text: "Visit the Botanical Garden and find the most exotic plant. Create a nature documentary-style video about it with all four friends as 'experts'.",
        difficulty: "Medium 🌟🌟"
    },
    {
        text: "Go to the National Gallery and find a painting that represents your friendship. Recreate the scene with all four friends posing as the subjects.",
        difficulty: "Hard 🌟🌟🌟"
    },
    {
        text: "Find a Danish language school or cultural center and ask for a 10-minute lesson in basic Danish phrases. All four must participate!",
        difficulty: "Hard 🌟🌟🌟"
    },
    {
        text: "Visit the Paper Island food market and find four different food trucks. Each friend must order from a different truck and share the food family-style.",
        difficulty: "Medium 🌟🌟"
    }
];

let missionCount = 0;
let currentMission = null;

// DOM elements
const generateButton = document.getElementById('generateMission');
const shareButton = document.getElementById('shareButton');
const missionText = document.getElementById('missionText');
const missionDifficulty = document.getElementById('missionDifficulty');
const missionCard = document.getElementById('missionCard');
const missionCountDisplay = document.getElementById('missionCount');

// Event listeners
generateButton.addEventListener('click', generateMission);
shareButton.addEventListener('click', shareMission);

function generateMission() {
    // Add animation class
    missionCard.classList.remove('animate');
    
    // Get random mission
    const randomIndex = Math.floor(Math.random() * missions.length);
    currentMission = missions[randomIndex];
    
    // Update mission display
    setTimeout(() => {
        missionText.textContent = currentMission.text;
        missionDifficulty.textContent = currentMission.difficulty;
        missionCard.classList.add('animate');
        
        // Show share button
        shareButton.style.display = 'inline-block';
        
        // Update counter
        missionCount++;
        missionCountDisplay.textContent = missionCount;
        
        // Update button text
        generateButton.textContent = 'Generate Another Mission';
    }, 100);
}

function shareMission() {
    if (!currentMission) return;
    
    const shareText = `🕵️ SECRET MISSION COPENHAGEN 🇩🇰\n\n${currentMission.text}\n\nDifficulty: ${currentMission.difficulty}\n\n#CopenhagenMission #SecretMission #Travel`;
    
    if (navigator.share) {
        // Use native sharing if available
        navigator.share({
            title: 'Secret Mission Copenhagen',
            text: shareText,
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            // Show feedback
            const originalText = shareButton.textContent;
            shareButton.textContent = '✅ Copied!';
            shareButton.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
            
            setTimeout(() => {
                shareButton.textContent = originalText;
                shareButton.style.background = 'linear-gradient(135deg, #feca57, #ff9ff3)';
            }, 2000);
        }).catch(err => {
            console.log('Error copying to clipboard:', err);
            alert('Unable to copy. Please share manually:\n\n' + shareText);
        });
    }
}

// Add some fun interactions
document.addEventListener('DOMContentLoaded', () => {
    // Add floating animation to stats
    const stats = document.querySelectorAll('.stat');
    stats.forEach((stat, index) => {
        stat.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Add hover effect to mission card
    missionCard.addEventListener('mouseenter', () => {
        if (currentMission) {
            missionCard.style.transform = 'translateY(-5px) scale(1.02)';
        }
    });
    
    missionCard.addEventListener('mouseleave', () => {
        missionCard.style.transform = 'translateY(0) scale(1)';
    });
});

// Add konami code easter egg for super secret mission
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        unlockSecretMission();
        konamiCode = [];
    }
});

function unlockSecretMission() {
    const secretMission = {
        text: "🎉 ULTRA SECRET MISSION UNLOCKED! 🎉 Find the most 'hygge' spot in all of Copenhagen, set up a perfect Danish picnic with candles, and convince four random locals to join you for a group meditation session at sunset. Document the entire experience and create a 'Copenhagen Zen' manifesto together!",
        difficulty: "LEGENDARY 🌟🌟🌟🌟🌟"
    };
    
    currentMission = secretMission;
    missionText.textContent = currentMission.text;
    missionDifficulty.textContent = currentMission.difficulty;
    missionCard.style.background = 'linear-gradient(135deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3)';
    missionCard.classList.add('animate');
    
    // Show share button
    shareButton.style.display = 'inline-block';
    
    // Update counter
    missionCount++;
    missionCountDisplay.textContent = missionCount;
    
    // Celebration effect
    setTimeout(() => {
        alert('🎊 CONGRATULATIONS! You\'ve unlocked the legendary secret mission! 🎊');
    }, 500);
} 