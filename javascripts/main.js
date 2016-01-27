function getParameterByName(name) {
	var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);

	return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

function getDisplayRow(name, value) {
	var row = document.createElement("div");

	row.setAttribute('class', 'row');

	var nameColumn = document.createElement("div");

	nameColumn.setAttribute('class', 'col-md-1');

	var nameNode = document.createTextNode(name);

	nameColumn.appendChild(nameNode);

	row.appendChild(nameColumn);

	var valueColumn = document.createElement("div");

	valueColumn.setAttribute('class', 'col-md-4');

	var valueNode = document.createTextNode(value);

	valueColumn.appendChild(valueNode);

	row.appendChild(valueColumn);

	return row;
}
