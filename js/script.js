// Remove same unit conversion
// Remove other characters then numbers (eE-.)
// Round the result on one decimal


document.querySelector(".btn-convert").addEventListener("click", function () {
	let userInput = document.querySelector(".input-number").value; // Dobimo vrednost inputa
	let dropDownFrom = document.querySelector(".convert-from"); // targetiramo from dropdown
	let dropDownTo = document.querySelector(".convert-to"); // targetiramo to dropdown
	
	let dropDownFromValue = dropDownFrom.options[dropDownFrom.selectedIndex].value; // Dobimo vrednost dropdowna
	let dropDownToValue = dropDownTo.options[dropDownTo.selectedIndex].value; // Dobimo vrednost dropdowna
	
	let result = document.getElementById("result"); // Targetiramo rezultat label
	
	if (dropDownFromValue === "kb") { // Če je prvi drop down kb
		result.textContent = kbConverter(userInput, dropDownToValue); // Uporabi Kb funkcijo
	} else if (dropDownFromValue === "mb") {
		result.textContent = mbConverter(userInput, dropDownToValue);
	} else if (dropDownFromValue === "gb") {
		result.textContent = gbConverter(userInput, dropDownToValue);
	} else if (dropDownFromValue === "tb") {
		result.textContent = tbConverter(userInput, dropDownToValue);
	}
});

// blabla
// Disable characters on keyboard
function disableKey(event) {
	var x = event.keyCode;
	if (x == 69) {
		event.preventDefault();
	} else if (x == 190) {
		event.preventDefault();
	} else if (x == 189) {
		event.preventDefault();
	} else if (x == 188) {
		event.preventDefault();
	} else if (x == 187) {
		event.preventDefault();
	}
}


function kbConverter (input, to) {
	if (to === "mb") {
		return input / 1000 + " MB";
	} else if (to === "gb") {
		return input / 10000 + " GB";
	} else if (to === "tb") {
		return input / 1000000 + " TB";
	} else {
		return "Chose another unit!";
	}
}

function mbConverter (input, to) {
	if (to === "kb") {
		return input * 1000 + " KB";
	} else if (to === "gb") {
		return input / 1000 + " GB";
	} else if (to === "tb") {
		return input / 1000000 + " TB";
	} else {
		return "Chose another unit!";
	}
}

function gbConverter (input, to) {
	if (to === "kb") {
		return input * 1000000 + " KB";
	} else if (to === "mb") {
		return input * 1000 + " MB";
	} else if (to === "tb") {
		return input / 1000 + " TB";
	} else {
		return "Chose another unit!";
	}
}

function tbConverter (input, to) {
	if (to === "kb") {
		return input * 1000000000 + " KB";
	} else if (to === "mb") {
		return input * 1000000 + " MB";
	} else if (to === "gb") {
		return input * 1000 + " GB";
	} else {
		return "Chose another unit!";
	}
}



