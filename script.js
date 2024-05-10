document.addEventListener('DOMContentLoaded', function() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.querySelector('.yes-btn');
    let clickCount = 0;

    function showThankYouMessage() {
        const thankYouText = document.createElement('div');
        thankYouText.textContent = 'Thank you for your feedback!';
        thankYouText.style.fontSize = '24px';
        thankYouText.style.marginTop = '20px';
        document.body.appendChild(thankYouText);
    }

    function hideAllElements() {
        document.querySelector('.feedback-container').style.display = 'none';
        showThankYouMessage();
        
    const gifContainer = document.createElement('div');
    const gifImage = document.createElement('img');
    gifImage.src = 'Cat Dance GIF - Cat Dance Cat Dance - Discover & Share GIFs.gif';
    gifImage.alt = 'GIF';
    gifImage.style.maxWidth = '100%';
    gifContainer.appendChild(gifImage);
    document.body.appendChild(gifContainer);
    }

    noBtn.addEventListener('click', () => {
        if (noBtn.textContent === 'Yes') {
            hideAllElements();
        } else {
            clickCount++;
            if (clickCount > 2) {
                noBtn.style.transform = 'none';
                noBtn.style.width = '120px';
                noBtn.style.height = '40px';
                noBtn.style.fontSize = '16px';
                noBtn.textContent = 'Yes';
            } else {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                noBtn.style.transform = `translate(${x}px, ${y}px)`;
                noBtn.style.fontSize = 'inherit';
                noBtn.textContent = 'No';
            }
        }
    });

    yesBtn.addEventListener('click', () => {
        hideAllElements();
    });
});
