function parseJSON(jsonObject) {
	var out = "";
	var i;

	for (i = 0; i < jsonObject.length; i++) {
		out += '<p>' + jsonObject[i].name + '</p>';
	}

	return out;
}