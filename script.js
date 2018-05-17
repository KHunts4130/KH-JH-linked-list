
var $cardTitle = $('.title-input-field');
var $cardURL = $('.URL-input-field');
var $enterButton = $('.enter-button');
var $cardList = $('.card-list');
var $removeReadCards = $('.remove-read-cards')

$cardTitle.on('keyup', enableSubmitButton);
$cardURL.on('keyup', enableSubmitButton);
$enterButton.on('click', urlValidate);
$cardList.on('click', 'li .card-button-delete', deleteCard);
$cardList.on('click', 'li .card-button-read', markRead);
$removeReadCards.on('click', removeReadCards);

function makeCard() {
  var createCard = $('<li class="cards">');
  var cardURL = $cardURL.val();
  var cardTitle = $cardTitle.val();
 createCard.html(`
    <h3 class="card-title">${cardTitle}</h3>
    <a target="_blank" class="card-link" href="${'https://' + cardURL}">${cardURL}</a>
    <button class="card-button card-button-read" >Read</button>
    <button class="card-button card-button-delete">Delete</button>
    `);
  $cardList.append(createCard); 
  $enterButton.prop('disabled', true);
  cardCount();
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
    $(this).parent().remove();
  }
  cardCount()
}

function markRead(event) {
  if (event.target.matches('.card-button-read')) {
    $(this).parent().toggleClass('read');
    $(this).toggleClass('card-read-button-clicked')
  } 
  cardCount();
}

function removeReadCards() {
  $('.read').remove();
  cardCount()
}

function cardCount() {
  $numberCards = $('.cards').length;
  $readCards = $('.read').length;
  $unReadCards = $numberCards - $readCards;
  $('.totalcards').text('Number of total cards: ' + $numberCards);
  $('.cardsRead').text('Number of cards read: ' + $readCards);
  $('.cardsUnread').text('Number of cards unread: ' + $unReadCards);
  clearInputFields();
}

function urlValidate(){
  regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test($cardURL.val())) {
      makeCard();
    } else {
      alert('Please enter a valid URL.');
      clearInputFields();
    }
}

 
