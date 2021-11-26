console.log("It's dictionary time.");
//function onClickSound() {}

function wordToInput() {
  let wordInput = document.getElementById("#Word Input").value;
  console.log(wordInput);
  changeWordInput();
}

async function changeWordInput(wordInput) {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${wordInput}`
  );
  const data = await response.json();
  console.log(response);
}

// const audioButton = document.querySelector(".Audio button");
// audioButton.addEventListener("click", onClickSound);

const wordButton = document.querySelector(".Word search");
wordButton.addEventListener("click", wordToInput);

//Theres a search box, you can search any word.
//It gives the definition, pronunciation (As an audio button), and synonyms.

//code

//Button sequence and code associated
//addEventListener for click of searchButton, that searches the entered word.
//Function that call the object, that has the listed above components (the attributes of the word).
//The function changes word at the end of the url to be the users inputed word.
//We're appendingChild the information from the json object under the search button as an unordered list.

//html 2 buttons and then a space centred for information and a catchy title.

//Function that is attached to the audio button, which calls the audio file for the searched word.
//addEventListener for click of audioButton,
//that is only active if a word has been typed in the search box and is a valid word and then plays back the sound.
