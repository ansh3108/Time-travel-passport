function showRandomTravelFact() {
    const facts = [
        "The concept of time travel was popularized by H.G. Wells in 1895.",
        "Albert Einstein’s theory of relativity makes time dilation possible.",
        "The DeLorean from *Back to the Future* needed 1.21 gigawatts to jump time.",
        "In the future, quantum computers might simulate entire realities.",
        "The oldest known calendar is over 10,000 years old!"
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    const factDisplay = document.getElementById('factDisplay');
    factDisplay.textContent = facts[randomIndex];
}

document.addEventListener('DOMContentLoaded', () => {
    const pastButton = document.getElementById('pastButton');
    const futureButton = document.getElementById('futureButton');
    const previewImage = document.getElementById('previewImage');
    const previewText = document.getElementById('previewText');
    const statusText = document.getElementById('statusText');
    const loadingAnimation = document.getElementById('loadingAnimation');

    const toggleInfoButton = document.getElementById('toggleInfoButton');
    const infoParagraph = document.getElementById('infoParagraph');

    const factButton = document.getElementById('factButton');
    factButton.addEventListener('click', showRandomTravelFact);

    const imagePaths = {
        placeholder: 'images/placeholder.jpg',
        pastPreview: 'images/past_preview.jpg',
        futurePreview: 'images/future_preview.jpg'
    };

    previewImage.src = imagePaths.placeholder;
    previewText.textContent = 'Hover over a destination or click to select.';

    function handleTimeButtonClick(destination, previewImgSrc) {
        statusText.textContent = `Preparing your passport to the ${destination}...`;
        previewImage.src = previewImgSrc;
        previewText.textContent = `Destination: ${destination}`;
        loadingAnimation.style.display = 'block';

        localStorage.setItem('timeTravelDestination', destination);

        setTimeout(() => {
            window.location.href = 'passport.html';
        }, 2000);
    }
    

    function addDestinationEvents(button, destination, previewImgSrc) {
        button.addEventListener('mouseover', () => {
            previewImage.src = previewImgSrc;
            previewText.textContent = `Explore the ${destination}!`;
        });

        button.addEventListener('click', () => handleTimeButtonClick(destination, previewImgSrc));
    }

    addDestinationEvents(pastButton, 'Past', imagePaths.pastPreview);
    addDestinationEvents(futureButton, 'Future', imagePaths.futurePreview);

    toggleInfoButton.addEventListener('click', () => {
        const isVisible = infoParagraph.style.display === 'block';
        infoParagraph.style.display = isVisible ? 'none' : 'block';
        toggleInfoButton.textContent = isVisible ? 'Show more info' : 'Hide info';
    });
});
