var defaults = {
	kilos: 2.20462
}

function converter() {
	var a = arguments[0]
	var b = defaults.kilos

	if (a){
		return a/b;
	} else {
		return 1/b;		
	}
}

module.exports = converter;