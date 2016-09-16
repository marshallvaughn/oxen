module.exports = function(list) {

  if (Array.isArray(list)) {

    var x;

    if (list.length === 1) {

      x = list[0];

    } else if (list.length === 2) {

      x = list[0] + ' & ' + list[1];

    } else {

      var tail = list.pop(); // bout to pop off

      x = list.join(', ') + ', & ' + tail; // include that oxford comma!

    }

    return x;

  } else {

    console.error('You fool! Oxfordize only handles arrays.');

  }

}