let profileInfoEditButton = document.querySelector ('.profile-info__edit-button');
let popup = document.querySelector ('.popup');
let popupCloseIcon = document.querySelector ('.popup__close-icon');
let profileInfoPersonal = document.querySelector ('.profile-info__personal');
let profileInfoActivity = document.querySelector ('.profile-info__activity');
let popupPersonal = document.querySelector ('.popup__personal');
let popupActivity = document.querySelector ('.popup__activity');
let popupSaveButton = document.querySelector ('.popup__save-button');
let popupContainer = document.querySelector ('.popup__container');

function openPopup () {
  popup.classList.add ('popup_opened');
}

profileInfoEditButton.addEventListener('click', openPopup);

function closePopup () {
  popup.classList.remove ('popup_opened');
}

popupCloseIcon.addEventListener ('click', closePopup);

popupPersonal.value = profileInfoPersonal.textContent;
popupActivity.value = profileInfoActivity.textContent;

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileInfoPersonal.textContent = popupPersonal.value;
  profileInfoActivity.textContent = popupActivity.value;
}

popupContainer.addEventListener('submit', handleFormSubmit);
popupSaveButton.addEventListener('click', closePopup);