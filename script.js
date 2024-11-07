//feedback page

document.addEventListener('DOMContentLoaded', function() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.querySelector('.yes-btn');
    let clickCount = 0;

    function showThankYouMessage() {
        const thankYouText = document.createElement('div');
        thankYouText.textContent = 'Thank you for your feedback!';
        thankYouText.style.fontSize = '24px';
        thankYouText.style.marginTop = '200px';
        thankYouText.style.marginLeft = '500px';
        document.body.appendChild(thankYouText);
    }

    function hideAllElements() {
        document.querySelector('.feedback-container').style.display = 'none';
        showThankYouMessage();
        
    const gifContainer = document.createElement('div');
    const gifImage = document.createElement('img');
    gifImage.src = 'Images/catDance1.gif';
    gifImage.alt = 'GIF';
    gifImage.style.maxWidth = '100%';
    gifImage.style.height = '100%'
    gifContainer.style.margin = 'auto'
    gifContainer.appendChild(gifImage);
    document.body.appendChild(gifContainer);
    }

    noBtn.addEventListener('click', () => {
        if (noBtn.textContent === 'Yes') {
            hideAllElements();
        } else {
            clickCount++;
            if (clickCount > 1) {
                noBtn.style.transform = 'none';
                noBtn.style.width = '70px';  
                noBtn.style.height = '40px';
                noBtn.style.fontSize = '15px';
                noBtn.textContent = 'Yes';
            } else {
                const btnWidth = noBtn.offsetWidth;
                const btnHeight = noBtn.offsetHeight;
                const maxX = window.innerWidth - btnWidth;
                const maxY = window.innerHeight - btnHeight;
    
                const x = Math.random() * maxX;
                const y = Math.random() * maxY;
    
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

//main page
//my journey buttons
let currentParagraph = 0;
const paragraphs = document.querySelectorAll('.journey > div');

function showParagraph(index) {
    console.log(`Showing paragraph index: ${index}`);
    paragraphs.forEach((para, i) => {
        if (i === index) {
            para.classList.add('active'); 
        } else {
            para.classList.remove('active'); 
        }
    });
}

function changeParagraph(direction) {
    console.log(`Current paragraph before change: ${currentParagraph}`); 
    currentParagraph += direction;

    if ( currentParagraph < 0) {
        currentParagraph = paragraphs.length - 1;
    } else if (currentParagraph >= paragraphs.length) {
        currentParagraph = 0; 
    }

    console.log(`Current paragraph after change: ${currentParagraph}`); 
    showParagraph(currentParagraph);
}

showParagraph(currentParagraph); 
