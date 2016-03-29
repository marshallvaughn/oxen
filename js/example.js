//Declaration of variability!!! Viva la revolución!
var namesList = [];
var html = '';

for ( i = 0; i < 7; i += 1 ) {
  namesList.push(chance.first());
  html += '<li>' + oxen(namesList) + '</li>';
}

document.getElementById('examples').innerHTML = html;
