document.addEventListener("DOMContentLoaded", () => {
	const columnInput = document.getElementById("column");
	columnInput.addEventListener("input", inputHandler, false);

	const findIndexButton = document.getElementById("get-index");
	findIndexButton.addEventListener("click", buttonHandler, false);
});

const inputHandler = (e) => {
	if (e.target.value.length > 6) {
		e.target.value = e.target.value.substring(0, 6);
	}

	e.target.value = e.target.value.toUpperCase();
};

const buttonHandler = () => {
	const messageContainer = document.getElementById("message");
	const columnInput = document.getElementById("column");

	if (isValid(columnInput.value)) {
		const index = getIndex(columnInput.value) - 1;	
		messageContainer.innerText = `Index is ${index}`;
	} else {
		messageContainer.innerText = "Wrong format. You can only type capital letters.";
	}
};

const isValid = (str) => {
	for (let i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
			return false;	
		}
	}

	return true;
};

const getIndex = (str) => {
	const startsAt = 65;
	const numberOfLetters = 26;
	const charNumber = str.charCodeAt(0) % startsAt + 1;

	if (str.length === 1) {
  	 return charNumber;
  } else {
  	return getIndex(str.substring(1)) + (charNumber * Math.pow(numberOfLetters, str.length - 1));
  }
}
