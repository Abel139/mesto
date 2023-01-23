const profileInfoEditButton = document.querySelector ('.profile-info__edit-button');
const profileInfoPersonal = document.querySelector ('.profile-info__personal');
const profileInfoActivity = document.querySelector ('.profile-info__activity');

const profileAddButton = document.querySelector ('.profile__add-button');

const formProfile = document.querySelector ('.popup__form_type_profile');
const formPlace = document.querySelector ('.popup__form_type_place');

const popupInputPersonal = document.querySelector ('.popup__input_type_personal');
const popupInputActivity = document.querySelector ('.popup__input_type_activity');
const popupInputName = document.querySelector('.popup__input_type_name');
const popupInputImage = document.querySelector('.popup__input_type_image');

const popupImageButton = document.querySelector ('.popup__image-button');

const popupProfile = document.querySelector('.popup-profile');
const popupImage = document.querySelector('.popup-image');
const popupPlace = document.querySelector ('.popup-place');

const popupCloseProfile = document.querySelector ('.popup__close-profile');
const popupClosePlace = document.querySelector ('.popup__close-place');
const popupCloseImage = document.querySelector ('.popup__close-image');

const popupBigImage = document.querySelector('.popup__image');
const popupImageName = document.querySelector('.popup__image-name');

const elements = document.querySelector('.elements');
const template = document.querySelector('#elements').content;
const elementImage = document.querySelector('.element__image');
const elementTitle = document.querySelector('.element__title');

const closeButtons = document.querySelectorAll('.popup__close-icon');


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

function openPopup (popup) {
  popup.classList.add ('popup_opened');
}

function closePopup (popup) {
  popup.classList.remove ('popup_opened');
}

profileAddButton.addEventListener('click', () => {
  openPopup(popupPlace);
});

profileInfoEditButton.addEventListener('click', () => {
  popupInputPersonal.value = profileInfoPersonal.textContent;
  popupInputActivity.value = profileInfoActivity.textContent;
  openPopup(popupProfile);
});

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileInfoPersonal.textContent = popupInputPersonal.value;
  profileInfoActivity.textContent = popupInputActivity.value;
  closePopup(popupProfile);
}


const initialCard = ({name, link}) => {
  const card = template.querySelector('.element').cloneNode(true);
  card.querySelector('.element__image').src = link;
  card.querySelector('.element__image').alt = name;
  card.querySelector('.element__title').textContent = name;

  card.querySelector('.element__image').addEventListener('click', () => {
    popupBigImage.src = card.querySelector('.element__image').src;
    popupBigImage.alt = card.querySelector('.element__title').textContent;
    popupImageName.textContent = card.querySelector('.element__title').textContent;
    openPopup(popupImage);
  });

  const elementHeart = card.querySelector ('.element__heart');
  elementHeart.addEventListener ('click', () => {
    elementHeart.classList.toggle ('element__heart_active')
  });

  card.querySelector('.element__delete').addEventListener('click', () => {
    card.remove();
  });

  return card;
}

function addCard(evt) {
  evt.preventDefault();
  const card = initialCard({name: popupInputName.value, link: popupInputImage.value})
  elements.prepend(card);
  closePopup(popupPlace);
  formPlace.reset();
}


elements.append(...initialCards.map(initialCard));

formProfile.addEventListener('submit', handleFormSubmit);

formPlace.addEventListener('submit', addCard);