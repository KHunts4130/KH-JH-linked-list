// Variables

var $cardTitle = $('.title-input-field');
var $cardURL = $('.main-URL-input-field');
var $enterButton = $('.enter-button');
var $cardList = $('.card-list');

// Event listeners

$enterButton.on('click', doesCardGetMade);

// functions

function makeCard() {
  var createCard = $('<li>');
  var cardURL = 'https://' + $cardURL.val();
  var cardTitle = $cardTitle.val();
 createCard.html(`
    <h3 class="main-right-card-title">${cardTitle}</h3>
    <a target="_blank" class="card-link" href="${cardURL}">${$cardURL.val()}</a>
    <button class="card-button card-button-read" >Read</button>
    <button class="card-button card-button-delete">Delete</button>
    `);
  $cardList.append(createCard); 
  clearInputFields();
}

function checkTitleField() {
  titleCheck = $cardTitle.val() || 'Enter a title and' 
}

function checkURLField() {
  UrlCheck = $cardURL.val() || 'enter a website'
}

function clearInputFields() {
  $cardTitle.val('');
  $cardURL.val('');
}

function doesCardGetMade() {
  checkTitleField();
  checkURLField();
  if ($cardTitle.val() === '' || $cardURL.val() === '') {
    alert(titleCheck + ' ' + UrlCheck)
  } else {
  makeCard(); 
  }
};











