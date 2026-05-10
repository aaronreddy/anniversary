const TOTAL_SLIDES = 12; // Change this to your actual number of slides

let currentSlide = 1;

const startBtn = document.getElementById('startBtn');
const startScreen = document.getElementById('startScreen');
const presentation = document.getElementById('presentation');
const slideImage = document.getElementById('slideImage');
const slideCounter = document.getElementById('slideCounter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const bgMusic = document.getElementById('bgMusic');
const heartsContainer = document.querySelector('.hearts');

function updateSlide() {
  slideImage.classList.remove('slide-transition');
  void slideImage.offsetWidth;
  slideImage.src = `slides/Slide${currentSlide}.png`;
  slideImage.classList.add('slide-transition');

  slideCounter.textContent = `${currentSlide} / ${TOTAL_SLIDES}`;
  prevBtn.disabled = currentSlide === 1;
  nextBtn.disabled = currentSlide === TOTAL_SLIDES;
}

startBtn.addEventListener('click', async () => {
  startScreen.classList.add('hidden');
  presentation.classList.remove('hidden');
  updateSlide();

  try {
    await bgMusic.play();
  } catch (e) {
    console.log('Autoplay blocked until user interaction.');
  }
});

prevBtn.addEventListener('click', () => {
  if (currentSlide > 1) {
    currentSlide--;
    updateSlide();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentSlide < TOTAL_SLIDES) {
    currentSlide++;
    updateSlide();
  }
});

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = '❤';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (10 + Math.random() * 20) + 'px';
  heart.style.animationDuration = (8 + Math.random() * 6) + 's';
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 15000);
}

setInterval(createHeart, 700);
