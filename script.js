var $cardTitle = $('.title-input-field');
var $cardURL = $('.main-URL-input-field');
var $enterButton = $('.enter-button');
var $cardList = $('.card-list');

$enterButton.on('click', makeCard);
$cardTitle.on('keyup', enablesButton);
$cardURL.on('keyup', enablesButton);

function makeCard() {
  console.log('makeCard function');
  var createCard = $('<li>');
  createCard.html(`
    <h3 class="main-right-card-title">${$cardTitle.val()}</h3>
  <a class="card-link" href="">${$cardURL.val()}</a>
  <button class="card-button card-button-read">Read</button>
  <button class="card-button card-button-delete">Delete</button>
  `);
  $cardList.append(createCard); 
}

function enablesButton() {
  console.log('enable buttons');
  if ($cardTitle.val() !== '' && $cardURL.val() !== '') {
    $enterButton.prop('disabled', false)
  }
};




