function generateNames(response) {
  new Typewriter("#aiOutput", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function callAI(event) {
  event.preventDefault();

  let userInput = document.querySelector("#input");

  let apiKey = "fa25b40fcffa301t230o795c80b7e53f";
  let prompt = `Please generate 2 1 word cat names and 3 2 word cat names based on these keywords provided to descripe the cat:${userInput.value}. please provide only the names following this set up: "<span class="material-symbols-outlined"> pets </span>
      Catname <br />
      <span class="material-symbols-outlined"> pets </span>
      Catname <br />
      <span class="material-symbols-outlined"> pets </span>
      Catname"`;
  let context = "You are an expert on cat names";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let aiOutputElement = document.querySelector("#aiOutput");
  aiOutputElement.classList.remove("hidden");
  aiOutputElement.innerHTML = `<div class="loader">
  <div class="square" id="sq1"></div>
  <div class="square" id="sq2"></div>
  <div class="square" id="sq3"></div>
  <div class="square" id="sq4"></div>
  <div class="square" id="sq5"></div>
  <div class="square" id="sq6"></div>
  <div class="square" id="sq7"></div>
  <div class="square" id="sq8"></div>
  <div class="square" id="sq9"></div>
</div>Generating cat names...`;

  axios.get(apiUrl).then(generateNames);
}

let catNamesForm = document.querySelector("#inputForm");
catNamesForm.addEventListener("submit", callAI);
