document.body.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');

function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', '메뉴 열기');
}

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    closeMenu();
    menuButton.focus();
  }
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.site-header')) closeMenu();
});

window.matchMedia('(max-width: 760px)').addEventListener('change', closeMenu);

const answers = document.querySelectorAll('[data-answer]');
const feedback = document.querySelector('#quiz-feedback');
const resetButton = document.querySelector('.quiz-reset');

answers.forEach((answer) => {
  answer.addEventListener('click', () => {
    const isCorrect = answer.dataset.answer === 'correct';
    answers.forEach((option) => {
      option.disabled = true;
      if (option.dataset.answer === 'correct') option.classList.add('correct');
    });
    if (!isCorrect) answer.classList.add('incorrect');
    feedback.textContent = `${isCorrect ? '정답이에요!' : '정답은 B, ‘하늘은 검고 땅은 누르다’예요.'} 천지현황(天地玄黃)은 하늘과 땅의 모습을 이야기하는 천자문의 첫 구절이에요.`;
    resetButton.hidden = false;
    resetButton.focus({ preventScroll: true });
  });
});

resetButton.addEventListener('click', () => {
  answers.forEach((answer) => {
    answer.disabled = false;
    answer.classList.remove('correct', 'incorrect');
  });
  feedback.textContent = '정답이라고 생각하는 보기를 골라 보세요.';
  resetButton.hidden = true;
  answers[0].focus({ preventScroll: true });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const characterButtons = document.querySelectorAll('[data-character]');
const characterDetails = {
  sky: ['天', '하늘 천', '천지현황의 첫 글자예요. 우리 위로 넓게 펼쳐진 하늘을 뜻해요.'],
  earth: ['地', '땅 지', '우리가 발을 딛고 살아가는 땅을 뜻해요. 하늘 천(天)과 함께 천지(天地), 하늘과 땅을 이뤄요.'],
  deep: ['玄', '검을 현', '검다는 뜻과 함께 아득하고 깊다는 뜻도 있어요. 천지현황에서는 깊고 아득한 하늘을 이야기해요.'],
  yellow: ['黃', '누를 황', '누런 빛을 뜻해요. 천지현황에서는 누런 땅의 모습을 나타내요.'],
};

characterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    characterButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    const [character, title, description] = characterDetails[button.dataset.character];
    document.querySelector('#detail-hanja').textContent = character;
    document.querySelector('#detail-title').textContent = title;
    document.querySelector('#detail-description').textContent = description;
  });
});
