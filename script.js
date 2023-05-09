console.log("Cześć!");

const showMoreText = "Pokaż więcej";
const showLessText = "Pokaż mniej";

// jeśli w html przekażemy funkcji parametr "this", będziemy mieli tutaj dostęp do klikniętego elemetu
// nazywamy go tu button, ale mógłby mieć każdą inną nazwę
function myFunction(button) {
  let showParagraph = document.querySelector(".close-paragraph");
  showParagraph.classList.toggle("myStyle");

  console.log("button", button);
  // sprawdxzamy jaki tekst jest pokazany na buttonie i ustawiamy tekst przeciwny
  // trim() słuzy usunięciu spacji i enterów
  if (button.textContent.trim() === showMoreText) {
    button.textContent = showLessText;
  } else {
    button.textContent = showMoreText;
  }
}

// const second = document.getElementById("contact");
// console.log(second);

function showAlert() {
  alert("Alert!");
}

//    second.addEventListener("click", () => {
//       console.log("Section Contact!");
//    })
// }
