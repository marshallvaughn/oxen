//Declaration of variability!!! Viva la revolución!
var namesList = [];
var html = '';

$("html").hide(0).fadeIn(1000);

for ( i = 0; i < 7; i += 1 ) {
  namesList.push(chance.first());
  html = '<li>' + oxen(namesList) + '</li>';
  $('.examples').append(html);
}

$('.examples li').hide().delay(500);

$(function() {
	$('.examples li').each(function(i) {
	$(this).delay((i++) * 500).fadeTo(1000, 1); })
});
