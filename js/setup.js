'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_COUNT = 4;

var userDialog = document.querySelector('.setup');
var similarWizardSetup = document.querySelector('.setup-similar');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();

var getWizardSetup = function (names, surnames, coatColors, eyesColors) {
  var wizardSetup = [];
  for (var i = 0; i < WIZARD_COUNT; i++) {
    var tempObject = {};
    tempObject.name = names[Math.round(Math.random() * (names.length - 1))] + ' ' + surnames[Math.round(Math.random() * (surnames.length - 1))];
    tempObject.coatColor = coatColors[Math.round(Math.random() * (coatColors.length - 1))];
    tempObject.eyesColor = eyesColors[Math.round(Math.random() * (eyesColors.length - 1))];
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

var renderWizard = function (names, surnames, coatColors, eyesColors, wizardCount) {
  for (var i = 0; i < wizardCount; i++) {
    fragment.appendChild(getWizardTemplate(getWizardSetup(names, surnames, coatColors, eyesColors)[i]));
  }
};

renderWizard(NAMES, SURNAMES, COAT_COLORS, EYES_COLORS, WIZARD_COUNT);
similarListElement.appendChild(fragment);
userDialog.classList.remove('hidden');
similarWizardSetup.classList.remove('hidden');
