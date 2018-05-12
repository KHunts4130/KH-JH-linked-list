var $cardTitle = $('.title-input-field');
var $cardURL = $('.main-URL-input-field');
var $enterButton = $('.enter-button');
var $cardList = $('.card-list');

$enterButton.on('click', makeCard);
$cardTitle.on('click', enablesButton);
$cardURL.on('click', enablesButton);

function makeCard() {
  console.log('makeCard');
}

function enablesButton() {
  console.log('enable buttons');
  if ($cardTitle.val() !== '' && $cardURL.val() !== '') {
    $enterButton.prop('disabled', false)
  } else {
    $enterButton.prop('disabled', true);
  }
};