document.addEventListener('DOMContentLoaded', () => {
    const travelerNameInput = document.getElementById('travelerNameInput');
    const passportNameDisplay = document.getElementById('passportNameDisplay');
    const destinationDisplay = document.getElementById('destinationDisplay');
    const eraDropdown = document.getElementById('eraDropdown');
    const eraImage = document.getElementById('eraImage');
    const eraQuote = document.getElementById('eraQuote');
    const surpriseMeButton = document.getElementById('surpriseMeButton');
    const changeDestinationButton = document.getElementById('changeDestinationButton');
    const passportContainer = document.getElementById('passportContainer');



    const timeTravelEras = {
        Past: {
            "Ancient Egypt": { 
                image: 'images/ancient_egypt.jpg', 
                quote: "The past is never dead. It\'s not even past. - William Faulkner (adapted)"
            },
            "Medieval India": { 
                image: 'images/medieval_india.jpg', 
                quote: "A people without the knowledge of their past history, origin and culture is like a tree without roots. - Marcus Garvey (adapted)"
            },
            "Roman Empire": { 
                image: 'images/roman_empire.jpg', 
                quote: "To be ignorant of what occurred before you were born is to remain always a child. - Cicero"
            }
        },


        Future: {
            "Cyber City": { 
                image: 'images/cyber_city.jpg', 
                quote: "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
            },
            "Space Colony": { 
                image: 'images/space_colony.jpg', 
                quote: "The future is not something we enter. The future is something we create. - Leonard I. Sweet"
            },
            "Eco Utopia": { 
                image: 'images/eco_utopia.jpg', 
                quote: "The best way to predict the future is to create it. - Peter Drucker"
            }
        }
    };


    let chosenDestination = localStorage.getItem('timeTravelDestination');
    let availableEras = {};


    function setupPassportPage() {
        if (chosenDestination) {
            destinationDisplay.textContent = chosenDestination;
            document.body.className = chosenDestination.toLowerCase() + '-theme'; 
            availableEras = timeTravelEras[chosenDestination] || {};
            fillEraDropdown();
        } else {
            destinationDisplay.textContent = "Destination not selected!";
        }
        eraImage.src = 'images/placeholder.jpg';
        eraQuote.textContent = 'Select an era or try \'Surprise Me!\'.';
    }



    function fillEraDropdown() {
        eraDropdown.innerHTML = '<option value="">-- Choose an Era --</option>';
        for (const eraName in availableEras) {
            const option = document.createElement('option');
            option.value = eraName;
            option.textContent = eraName;
            eraDropdown.appendChild(option);
        }
    }


    function reflectNameOnPassport() {
        const name = travelerNameInput.value.trim();
        passportNameDisplay.textContent = name || "..."; 
        
        if (name) {
            passportContainer.classList.add('passport-glow');
        } else {
            passportContainer.classList.remove('passport-glow');
        }
    }


    function showEraSpecifics() {
        const selectedEraKey = eraDropdown.value;
        if (selectedEraKey && availableEras[selectedEraKey]) {
            const details = availableEras[selectedEraKey];
            eraImage.src = details.image;
            eraQuote.textContent = details.quote;
        } else {
            eraImage.src = 'images/placeholder.jpg';
            eraQuote.textContent = 'Please make a selection.';
        }
    }

    
    function triggerSurpriseEra() {
        const eraKeys = Object.keys(availableEras);
        if (eraKeys.length > 0) {
            const randomIndex = Math.floor(Math.random() * eraKeys.length);
            const randomKey = eraKeys[randomIndex];
            eraDropdown.value = randomKey;
            showEraSpecifics(); 
        } else {
            eraQuote.textContent = "No eras to surprise you with!";
        }
    }


    travelerNameInput.addEventListener('input', reflectNameOnPassport);
    eraDropdown.addEventListener('change', showEraSpecifics);
    surpriseMeButton.addEventListener('click', triggerSurpriseEra);
    changeDestinationButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    

    setupPassportPage();
});
