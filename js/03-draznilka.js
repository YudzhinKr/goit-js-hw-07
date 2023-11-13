document.addEventListener("DOMContentLoaded", function () {
  const btnMagic = document.querySelector(".btn-magic");

  let randomBodyParts = ["вухо", "губа", "рука", "нога"];
  let randomAdjectives = [
    "вонючу",
    "дурацьку",
    "маленьку",
    "потворну",
    "жахливу",
  ];
  let randomWords = ["свиню", "курицю", "мишу", "мавпу"];

  btnMagic.addEventListener("click", () => {
    let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 4)];
    let randobAdject = randomAdjectives[Math.floor(Math.random() * 5)];
    let randomWord = randomWords[Math.floor(Math.random() * 4)];

    let jsDraznilka =
      "У кожного орка " +
      randomBodyPart +
      " схоже на " +
      randobAdject +
      " " +
      randomWord +
      "!!!";

    console.log(jsDraznilka + "\n");
  });
});
