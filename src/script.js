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
  let prompt = `Please generate 5 cat names based on these keywords provided to descripe the cat:${userInput.value}. please provide only the names following this html set up: "<span class="material-symbols-outlined"> pets </span>
      Catname <br />
      <span class="material-symbols-outlined"> pets </span>
      Catname <br />
      <span class="material-symbols-outlined"> pets </span>
      Catname"`;
  let context = "You are an expert on cat names";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(generateNames);
}

let catNamesForm = document.querySelector("#inputForm");
catNamesForm.addEventListener("submit", callAI);
