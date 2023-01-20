const profileInfoEditButton = document.querySelector ('.profile-info__edit-button');
const profileInfoPersonal = document.querySelector ('.profile-info__personal');
const profileInfoActivity = document.querySelector ('.profile-info__activity');

const popupInputPersonal = document.querySelector ('.popup__input_type_personal');
const popupInputActivity = document.querySelector ('.popup__input_type_activity');
const popupContainer = document.querySelector ('.popup__container');
const popupCloseIcon = document.querySelector ('.popup__close-icon');

const profileAddButton = document.querySelector ('.profile__add-button');

const formPlace = document.querySelector ('.popup__form_type_place');

const popupImageButton = document.querySelector ('.popup__image-button');
const popupPlace = document.querySelector ('.popup-place');
const popupProfile = document.querySelector('.popup-profile');

const popupCloseProfile = document.querySelector ('.popup__close-profile');
const popupClosePlace = document.querySelector ('.popup__close-place');
const popupCloseImage = document.querySelector ('.popup__close-image');

const popup = document.querySelector ('.popup');
const popupImage = document.querySelector('.popup-image');

const popupBigImage = document.querySelector('.popup__image');
const popupImageName = document.querySelector('.popup__image-name');

const elements = document.querySelector('.elements');
const template = document.querySelector('#elements').content;
const elementImage = document.querySelector('.element__image');
const elementTitle = document.querySelector('.element__title');

function openPopup () {
  popup.classList.add ('popup_opened');
}

function closePopup () {
  popup.classList.remove ('popup_opened');
}

function openPopupPlace () {
  popupPlace.classList.add ('popup_opened');
}

function closePopupPlace () {
  popupPlace.classList.remove ('popup_opened');
}

function openPopupProfile () {
  popupProfile.classList.add ('popup_opened');
  popupInputPersonal.value = profileInfoPersonal.textContent;
  popupInputActivity.value = profileInfoActivity.textContent;
}

function closePopupProfile () {
  popupProfile.classList.remove ('popup_opened');
}

function openPopupImage () {
  popupImage.classList.add ('popup_opened');
}

function closePopupImage () {
  popupImage.classList.remove ('popup_opened');
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileInfoPersonal.textContent = popupInputPersonal.value;
  profileInfoActivity.textContent = popupInputActivity.value;
  closePopupProfile();
}

profileInfoEditButton.addEventListener('click', openPopupProfile);
popupContainer.addEventListener('submit', handleFormSubmit);
popupCloseProfile.addEventListener ('click', closePopupProfile);
profileAddButton.addEventListener('click', openPopupPlace);
popupClosePlace.addEventListener('click', closePopupPlace);
popupCloseImage.addEventListener('click', closePopupImage);


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


const initialCard = ({name, link}) => {
  const card = template.querySelector('.element').cloneNode(true);
  card.querySelector('.element__image').src = link;
  card.querySelector('.element__title').textContent = name;

  card.querySelector('.element__image').addEventListener('click', () => {
    popupBigImage.src = card.querySelector('.element__image').src;
    popupImageName.textContent = card.querySelector('.element__title').textContent;
    openPopupImage ();
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

elements.append(...initialCards.map(initialCard));

function addCard(evt) {
  evt.preventDefault();
  const popupInputName = formPlace.querySelector('.popup__input_type_name').value;
  const popupInputImage = formPlace.querySelector('.popup__input_type_image').value;
  const card = initialCard({name: popupInputName, link: popupInputImage})
  elements.prepend(card);
  closePopupPlace();
  formPlace.reset();
}

popupImageButton.addEventListener('click', addCard);