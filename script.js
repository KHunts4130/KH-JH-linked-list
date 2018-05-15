// Variables

var $cardTitle = $('.title-input-field');
var $cardURL = $('.main-URL-input-field');
var $enterButton = $('.enter-button');
var $cardList = $('.card-list');
var $removeReadCards = $('.remove-read-cards')

// Event listeners

$cardTitle.on('keyup', enableSubmitButton);
$cardURL.on('keyup', enableSubmitButton);
$enterButton.on('click', makeCard);
$cardList.on('click', deleteCard);
// $cardList.on('click', markRead);
$removeReadCards.on('click', removeReadCards);

// functions

function makeCard() {
  var createCard = $('<li>');
  var cardURL = $cardURL.val();
  var cardTitle = $cardTitle.val();
 createCard.html(`
    <h3 class="main-right-card-title">${cardTitle}</h3>
    <a target="_blank" class="card-link" href="${'https://' + cardURL}">${cardURL}</a>
    <button class="card-button card-button-read" >Read</button>
    <button class="card-button card-button-delete">Delete</button>
    `);
  $cardList.append(createCard); 
  $enterButton.prop('disabled', true);
  var $readButton = $('.card-button-read');
  $readButton.on('click', markRead)
  clearInputFields();
}

function clearInputFields() {
  $cardTitle.val('');
  $cardURL.val('');
}

function enableSubmitButton() {
  if ($cardTitle.val() === '' || $cardURL.val() === '') {
    $enterButton.prop('disabled', true)
  } else {
    $enterButton.prop('disabled', false)
  }
};

function deleteCard(event) {
  if (event.target.matches('.card-button-delete')) {
  event.target.closest('li').remove();
  }
}

function markRead(event) {
  if (event.target.matches('.card-button-read')) {
    $(this).parent().toggleClass('read');
  } 
}

function removeReadCards() {
  $('.read').remove();
}




