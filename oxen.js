function oxen (list) {

  var listString = '';

  if ( list.length === 1 ) {

    listString = list[0].toString();

  } else if ( list.length === 2 ) {

    listString = list.join(' & ');

  } else {

    var lastItem = list.pop();
    listString = list.join(', ');
    listString = listString + ', & ' + lastItem;

  }

  console.log(listString);

}

list = ["Brad", "Roger", "Daphne", "Belle"];

list = ["Brad", "Roger"];

oxen(list);
