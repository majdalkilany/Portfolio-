const projects = [
  {
    id: 1,
    name: 'Multi-Post Stories Gain+Glory',
    image: './assets/Img Plaholder.png',
    description: '',
    technologies: [],
    'live-version': 'https://majdalkilany.github.io/Portfolio-/',
    'source-code': 'https://github.com/majdalkilany/Portfolio-',
  },
  {
    id: 2,
    name: 'Multi-Post Stories Gain+Glory',
    image: './assets/Img Plaholder.png',
    description: '',
    technologies: [],
    'live-version': 'https://majdalkilany.github.io/Portfolio-/',
    'source-code': 'https://github.com/majdalkilany/Portfolio-',
  },
  {
    id: 3,
    name: 'Multi-Post Stories Gain+Glory',
    image: './assets/Img Plaholder.png',
    description: '',
    technologies: [],
    'live-version': 'https://majdalkilany.github.io/Portfolio-/',
    'source-code': 'https://github.com/majdalkilany/Portfolio-',
  },
  {
    id: 4,
    name: 'Multi-Post Stories Gain+Glory',
    image: './assets/Img Plaholder.png',
    description: '',
    technologies: [],
    'live-version': 'https://majdalkilany.github.io/Portfolio-/',
    'source-code': 'https://github.com/majdalkilany/Portfolio-',
  },
  {
    id: 5,
    name: 'Multi-Post Stories Gain+Glory',
    image: './assets/Img Plaholder.png',
    description: '',
    technologies: [],
    'live-version': 'https://majdalkilany.github.io/Portfolio-/',
    'source-code': 'https://github.com/majdalkilany/Portfolio-',
  },
  {
    id: 6,
    name: 'Multi-Post Stories Gain+Glory',
    image: './assets/Img Plaholder.png',
    description: '',
    technologies: [],
    'live-version': 'https://majdalkilany.github.io/Portfolio-/',
    'source-code': 'https://github.com/majdalkilany/Portfolio-',
  },
];

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-menu');
const body = document.getElementById('body');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('active');
});
const popupContainer = document.querySelector('.popup-container');
const popupContent = document.querySelector('.popup-content');
const closeBtn = document.getElementById('closeBtn');

document.querySelectorAll('.nav-links').forEach((i) => {
  i.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
    popupContent.textContent = '';
    console.log(popupContent);
  });
});

function openPopup() {
  popupContainer.style.display = 'flex';
}

function closePopup() {
  popupContainer.style.display = 'none';
}
window.addEventListener('load', openPopup);
closeBtn.addEventListener('click', closePopup);

const parentCards = document.getElementById('cards');
const cards = parentCards.querySelectorAll('.card');

function popupRender() {
  cards.forEach((card) => {
    card.children[3].addEventListener('click', () => {
      const foundElement = projects.find(
        (project) => project.id === Number(this.id)
      );
      // eslint-disable-next-line no-use-before-define
      render();
      openPopup();
    });
  });
}

function render() {
  popupContent.innerHTML = '';
  const backgroundDiv = document.createElement('div');
  backgroundDiv.classList.add('popup-img');
  popupContent.appendChild(backgroundDiv);
  const popupSpan = document.createElement('span');
  backgroundDiv.appendChild(popupSpan);
  popupSpan.setAttribute('id', 'closeBtn');
}

popupRender();
