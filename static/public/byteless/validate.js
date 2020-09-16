var seats = 0;
document.querySelector("#seats").innerHTML = "There are only " + seats + " passes left.";

function decode(str) {
  var input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  var index     = x => input.indexOf(x);
  var translate = x => index(x) > -1 ? output[index(x)] : x;
  return str.split('').map(translate).join('');
}

function validate() {
	if (seats == 0) {
		alert("No more passes for you!");
	}
	else {
		alert("Your pass" + decode("V trg n olgr jvgu n yvggyr uryc sebz zl sevraqf."));
	}
}
