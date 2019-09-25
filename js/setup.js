'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARD_COUNT = 4;

var similarWizardSetup = document.querySelector('.setup-similar');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = document.querySelector('.setup-similar-list');

var getRandomNumber = function (min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

var showElement = function (elem) {
  elem.classList.remove('hidden');
};

var hideElement = function (elem) {
  elem.classList.add('hidden');
};

var getWizardSetup = function (names, surnames, coatColors, eyesColors, wizardCount) {
  var wizardSetup = [];

  for (var i = 0; i < wizardCount; i++) {
    var tempObject = {};
    tempObject.name = names[getRandomNumber(0, names.length - 1)] + ' ' + surnames[getRandomNumber(0, surnames.length - 1)];
    tempObject.coatColor = coatColors[getRandomNumber(0, coatColors.length - 1)];
    tempObject.eyesColor = eyesColors[getRandomNumber(0, eyesColors.length - 1)];
    wizardSetup.push(tempObject);
    tempObject = {};
  }

  return wizardSetup;
};

var getWizardTemplate = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function (names, surnames, coatColors, eyesColors, wizardCount) {
  var fragment = document.createDocumentFragment();
  var setup = getWizardSetup(names, surnames, coatColors, eyesColors, wizardCount);

  for (var i = 0; i < wizardCount; i++) {
    var template = getWizardTemplate(setup[i]);
    fragment.appendChild(template);
  }

  similarListElement.appendChild(fragment);
};

renderWizards(NAMES, SURNAMES, COAT_COLORS, EYES_COLORS, WIZARD_COUNT);
showElement(similarWizardSetup);

// --------------------------------------------------------------

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupInput = setup.querySelector('.setup-user-name');
var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  showElement(setup);
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  hideElement(setup);
  document.removeEventListener('keydown', onPopupEscPress);
};

setupInput.addEventListener('keydown', function (evt) {
  evt.stopPropagation();
});

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = COAT_COLORS[getRandomNumber(0, COAT_COLORS.length - 1)];
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = EYES_COLORS[getRandomNumber(0, EYES_COLORS.length - 1)];
});

wizardFireball.addEventListener('click', function () {
  var randomColor = FIREBALL_COLORS[getRandomNumber(0, FIREBALL_COLORS.length - 1)];
  wizardFireball.style.backgroundColor = randomColor;
  wizardFireball.querySelector('input').value = randomColor;
});
