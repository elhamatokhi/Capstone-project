const hamburger = document.querySelector('.hamberger');
const navLinks = document.querySelector('.navItems');
const links = document.querySelectorAll('.navItems .Items');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');
  links.forEach((link) => {
    link.classList.toggle('fade');
  });
});

const data = [
  {
    icon: 'assests/speaker_01.png',
    title: 'Yochai',
    titre: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    line: '',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A perspiciatis quos sit consectetur molestias praesentium',
  },
  {
    icon: 'assests/speaker_02.png',
    title: 'Kilnam Chon',
    titre: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    line: '',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A perspiciatis quos sit consectetur molestias praesentium ',
  },
  {
    icon: 'assests/speaker_03.png',
    title: 'SohYeong Noh',
    titre: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    line: '',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A perspiciatis quos sit consectetur molestias praesentium ',
  },
  {
    icon: 'assests/speaker_04.png',
    title: 'Julia Leda',
    titre: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    line: '',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A perspiciatis quos sit consectetur molestias praesentium ',
  },
  {
    icon: 'assests/speaker_05.png',
    title: 'Lila Tretikov',
    titre: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    line: '',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A perspiciatis quos sit consectetur molestias praesentium ',
  },
  {
    icon: 'assests/speaker_06.png',
    title: 'Ryan Merkley',
    titre: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    line: '',
    description:
     'Lorem ipsum dolor sit amet consectetur adipisicing elit. A perspiciatis quos sit consectetur molestias praesentium ',
  },
];

const speakerCards = document.querySelector('.speakerCards');

data.forEach((index) => {
  const card = document.createElement('div');
  card.className = 'speakerCard';
  speakerCards.appendChild(card);

  const icon = document.createElement('img');
  icon.className = 'iconspeaker';
  icon.src = index.icon;
  icon.alt = 'Speaker';
  card.appendChild(icon);

  const content = document.createElement('div');
  content.className = 'speakerCardContent';
  card.appendChild(content);

  const title = document.createElement('h2');
  title.className = 'speakerCardTitle';
  title.innerHTML = index.title;
  content.appendChild(title);

  const titre = document.createElement('p');
  titre.className = 'speakerCardTitre';
  titre.innerHTML = index.titre;
  content.appendChild(titre);

  const line = document.createElement('div');
  line.className = 'speakerCardLine';
  content.appendChild(line);

  const description = document.createElement('p');
  description.className = 'speakerCardDescription';
  description.innerHTML = index.description;
  content.appendChild(description);
});