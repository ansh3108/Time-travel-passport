document.addEventListener('DOMContentLoaded', () => {
    const pastButton = document.getElementById('pastButton');
    const futureButton = document.getElementById('futureButton');
    const previewImage = document.getElementById('previewImage');
    const previewText = document.getElementById('previewText');
    const statusText = document.getElementById('statusText');
    const loadingAnimation = document.getElementById('loadingAnimation');

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
});
