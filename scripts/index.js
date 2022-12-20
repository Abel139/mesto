let profileInfoEditButton = document.querySelector ('.profile-info__edit-button');
let popup = document.querySelector ('.popup');
let popupCloseIcon = document.querySelector ('.popup__close-icon');
let profileInfoPersonal = document.querySelector ('.profile-info__personal');
let profileInfoActivity = document.querySelector ('.profile-info__activity');
let popupPersonal = document.querySelector ('.popup__input_personal');
let popupActivity = document.querySelector ('.popup__input_activity');
let popupContainer = document.querySelector ('.popup__container');

function openPopup () {
  popup.classList.add ('popup_opened');
  popupPersonal.value = profileInfoPersonal.textContent;
  popupActivity.value = profileInfoActivity.textContent;
}

function closePopup () {
  popup.classList.remove ('popup_opened');
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileInfoPersonal.textContent = popupPersonal.value;
  profileInfoActivity.textContent = popupActivity.value;
  closePopup();
}

profileInfoEditButton.addEventListener('click', openPopup);
popupContainer.addEventListener('submit', handleFormSubmit);
popupCloseIcon.addEventListener ('click', closePopup);