function generateNames(event) {
  event.preventDefault();

  new Typewriter("#aiOutput", {
    strings: "Catname",
    autoStart: true,
    delay: 100,
    cursor: "",
  });
}

let catNamesForm = document.querySelector("#inputForm");
catNamesForm.addEventListener("submit", generateNames);
