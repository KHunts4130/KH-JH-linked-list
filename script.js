var $cardTitle = $('.main-input-field');
var $cardList = $('.card-list');
var $cardURL = $('.main-inputURL-field');
var $enterButton = $('.enter-button');

$cardList.on('click', deleteCard);
$cardList.on('click', markAsRead);
$enterButton.on('click', emptyInputField);


function appendCard() {

};


function emptyInputField() {
  if(cardTitle.val('') || cardURL.val('')){
    alert('Error, emtpy input fields');
  } else {
    appendCard();
  }
};


