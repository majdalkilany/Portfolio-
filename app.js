const projects = [
  {
    id: 1,
    name: 'Multi-Post Stories Gain+Glory',
    image: './assets/Img Plaholder.png',
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, sunt ea, saepe
    aspernatur reiciendis doloribus deserunt perspiciatis eaque porro tempore consequatur voluptatibus nam veniam
    officia, placeat praesentium dignissimos alias est?`,
    technologies: ['Ruby on Rails', 'CSS', 'Javascript'],
    liveVersion: 'https://majdalkilany.github.io/Portfolio-/',
    sourceCode: 'https://github.com/majdalkilany/Portfolio-',
  },
  {
    id: 2,
    name: 'Second One ',
    image: './assets/Img Plaholder.png',
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, sunt ea, saepe
    aspernatur reiciendis doloribus deserunt perspiciatis eaque porro tempore consequatur voluptatibus nam veniam
    officia, placeat praesentium dignissimos alias est?`,
    technologies: ['Ruby on Rails', 'CSS', 'Javascript'],
    liveVersion: 'https://majdalkilany.github.io/Portfolio-/',
    sourceCode: 'https://github.com/majdalkilany/Portfolio-',
  },
  {
    id: 3,
    name: 'Third One ',
    image: './assets/Img Plaholder.png',
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, sunt ea, saepe
    aspernatur reiciendis doloribus deserunt perspiciatis eaque porro tempore consequatur voluptatibus nam veniam
    officia, placeat praesentium dignissimos alias est?`,
    technologies: ['Ruby on Rails', 'CSS', 'Javascript'],
    liveVersion: 'https://majdalkilany.github.io/Portfolio-/',
    sourceCode: 'https://github.com/majdalkilany/Portfolio-',
  },
  {
    id: 4,
    name: 'Forth one ',
    image: './assets/Img Plaholder.png',
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, sunt ea, saepe
    aspernatur reiciendis doloribus deserunt perspiciatis eaque porro tempore consequatur voluptatibus nam veniam
    officia, placeat praesentium dignissimos alias est?`,
    technologies: ['Ruby on Rails', 'CSS', 'Javascript'],
    liveVersion: 'https://majdalkilany.github.io/Portfolio-/',
    sourceCode: 'https://github.com/majdalkilany/Portfolio-',
  },
  {
    id: 5,
    name: 'Fifth One',
    image: './assets/Img Plaholder.png',
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, sunt ea, saepe
    aspernatur reiciendis doloribus deserunt perspiciatis eaque porro tempore consequatur voluptatibus nam veniam
    officia, placeat praesentium dignissimos alias est?`,
    technologies: ['Ruby on Rails', 'CSS', 'Javascript'],
    liveVersion: 'https://majdalkilany.github.io/Portfolio-/',
    sourceCode: 'https://github.com/majdalkilany/Portfolio-',
  },
  {
    id: 6,
    name: 'sixth One ',
    image: './assets/Img Plaholder.png',
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, sunt ea, saepe
    aspernatur reiciendis doloribus deserunt perspiciatis eaque porro tempore consequatur voluptatibus nam veniam
    officia, placeat praesentium dignissimos alias est?`,
    technologies: ['Ruby on Rails', 'CSS', 'Javascript'],
    liveVersion: 'https://majdalkilany.github.io/Portfolio-/',
    sourceCode: 'https://github.com/majdalkilany/Portfolio-',
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
let closeBtn = document.getElementById('closeBtn');

document.querySelectorAll('.nav-links').forEach((i) => {
  i.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
    popupContent.textContent = '';
    console.log(popupContent);
  });
});


const form = document.getElementById('fs-frm');
function validateForm(event) {
  const emailInput = document.querySelector('input[name="email"]');
  const email = emailInput.value.toLowerCase(); // Convert email to lower case
  if (emailInput.value !== email) {
    event.preventDefault();
    const errorElement = document.createElement('p');
    errorElement.textContent = 'Please enter the email in lower case.';
    errorElement.style.color = 'red';
    const existingError = document.getElementById('email-error');
    if (existingError) {
      existingError.remove();
    }
    const submitButton = document.getElementById('form-btn');
    submitButton.insertAdjacentElement('beforebegin', errorElement);
    errorElement.id = 'email-error';
  }
}

form.addEventListener('submit', validateForm);

function openPopup() {
  popupContainer.style.display = 'flex';
}

function closePopup() {
  popupContainer.style.display = 'none';
}

const parentCards = document.getElementById('cards');
const cards = parentCards.querySelectorAll('.card');

function popupRender() {
  cards.forEach((card) => {
    card.children[3].addEventListener('click', function () {
      const foundElement = projects.find(
        (project) => project.id === Number(this.id),
      );
      console.log(foundElement);
      // eslint-disable-next-line no-use-before-define
      render(foundElement);
      openPopup();
    });
  });
}

function render({
  technologies, name, description, liveVersion, sourceCode,
}) {
  popupContent.innerHTML = '';
  const backgroundDiv = document.createElement('div');
  backgroundDiv.classList.add('popup-img');
  popupContent.appendChild(backgroundDiv);
  const popupSpan = document.createElement('span');
  popupSpan.setAttribute('id', 'closeBtn');
  backgroundDiv.appendChild(popupSpan);
  popupSpan.textContent = '\u00D7';

  popupSpan.addEventListener('click', closePopup);

  const popupTitle = document.createElement('h3');
  popupTitle.setAttribute('id', 'popup-title');
  popupContent.appendChild(popupTitle);
  popupTitle.textContent = name;

  const popupUl = document.createElement('ul');
  popupUl.setAttribute('id', 'popup-tech');
  popupContent.appendChild(popupUl);

  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < technologies.length; index++) {
    const popupLi = document.createElement('li');
    popupLi.classList.add('popup-li');
    popupUl.appendChild(popupLi);
    popupLi.textContent = technologies[index];
  }
  const popupFirstPar = document.createElement('p');
  popupFirstPar.setAttribute('class', 'popup-des');
  popupContent.appendChild(popupFirstPar);
  popupFirstPar.textContent = description;

  const popupSecondPar = document.createElement('p');
  popupSecondPar.setAttribute('class', 'popup-des');
  popupContent.appendChild(popupSecondPar);
  popupSecondPar.textContent = description;

  const popupButtonsDiv = document.createElement('div');
  popupButtonsDiv.setAttribute('class', 'buttons');
  popupContent.appendChild(popupButtonsDiv);
  popupButtonsDiv.innerHTML = `<a href="${liveVersion}"><button>See live <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd"
    d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z"
    fill="white" />
</svg>
</button></a>
<a href=${sourceCode}><button>See source <svg width="18" height="20" viewBox="0 0 18 20" fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path
    d="M17.9992 7.46114C17.9992 6.32124 17.6332 5.25043 16.9345 4.31779C17.2007 3.41969 17.2672 2.27979 17.2007 0.967185C17.1674 0.414508 16.7349 0 16.2025 0C15.9031 0 13.3744 0.0345423 11.9105 1.38169C10.6461 1.1399 9.31526 1.1399 8.01766 1.38169C6.58698 0.0345423 4.05833 0 3.72561 0C3.19326 0 2.76073 0.414508 2.72746 0.967185C2.62764 2.27979 2.72746 3.41969 2.99363 4.31779C2.29492 5.28497 1.92894 6.35579 1.92894 7.46114C1.92894 9.8791 3.72561 12.0553 6.45389 13.0915C6.35407 13.2988 6.28753 13.5406 6.22099 13.7824C3.32635 13.4715 1.96221 10.7427 1.89566 10.639C1.66276 10.1209 1.06387 9.91364 0.564795 10.19C0.0657196 10.4318 -0.133911 11.0535 0.132263 11.5717C0.198806 11.7444 2.02875 15.4404 6.05463 15.8549V18.9637C6.05463 19.5509 6.48716 20 7.05278 20H12.8753C13.441 20 13.8735 19.5509 13.8735 18.9637V14.8532C13.8735 14.2314 13.7404 13.6442 13.5075 13.1261C16.2025 12.0553 17.9992 9.91364 17.9992 7.46114Z"
    fill="white" />
</svg>
</button></a>`;
}
closeBtn = document.getElementById('closeBtn');
console.log(closeBtn);

popupRender();
closeBtn.addEventListener('click', closePopup);

