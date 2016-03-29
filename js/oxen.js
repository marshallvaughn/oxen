function oxen (list) {

  //Declare your variables up top!
  var listString = '';

  //Here's the tricky bit, we handle lists differently depending on length. English is weird.
  //If list is 1 item long, do this:
  if ( list.length === 1 ) {

    listString = list[0].toString();

  }
  //If list is 2 items long, do this:(we won't need to Oxford Comma here)
  else if ( list.length === 2 ) {

    listString = list.join(' & ');

  }
  //If list is 3 or more items long, do this:
  else {

    //Poppin' off
    var lastItem = list.pop();

    var appendString = ', & ' + lastItem;
    listString = list.join(', ');
    listString = listString + appendString;

    //Push it
    list.push(lastItem);

  }

  //Finally print it out so we know wtf is going on.
  console.log(listString);
  //Return it. You still got the receipt.
  return(listString);

}
