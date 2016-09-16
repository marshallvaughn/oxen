var oxfordize = require('./index');

var tests = [
[ 'Charlie', 'Mac', 'Dee' ],
[ 'Charlie' ],
{ 'name': 'Charlie', 'name': 'Mac', 'name': 'Dee' },
[ 'Charlie', 'Mac' ],
]

for (var i = 0; i < tests.length; i++) {
	console.log( JSON.stringify(tests[i]) + ' oxfordizes to: "' + oxfordize(tests[i]) + '"');
}