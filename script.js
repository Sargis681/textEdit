let a = "";
let b = "";
let c = "";
let selectedLiText = ""; 
let selectedLiIndex = -1; 

// Create and append headers
const headers = document.createElement("div");
document.body.appendChild(headers);
headers.innerHTML = `
  <div class="all">
    <ul>
      <li>Hdm</li>
      <li>Chgrancvat ashxatox</li>
      <li>Ankanxiki stugum</li>
      <li>Gner chshtutyan stugum</li>
    </ul>
  </div>
`;

// Add event listeners to list items
const listItems = document.querySelectorAll("li");
listItems.forEach((li, i) => {
  li.addEventListener("click", () => {
    selectedLiIndex = i;

    listItems.forEach(el => el.classList.remove("clicked"));
    li.classList.add("clicked");

    generateSelectedLiText();
  });
});

const container = document.createElement("div");
document.body.appendChild(container);

container.innerHTML = `
  <div class="textLoaders">
    <input class="inputOne" type="text" placeholder="Введите первое значение">
    <input class="inputTwo" type="text" placeholder="Введите второе значение">
    <input class="inputThree" type="text" placeholder="Введите третье значение">
    <button class="updateButton">Обновить текст и скопировать</button>
  </div>
  <p class="paragraf"></p>
`;

const inputOne = document.querySelector(".inputOne");
const inputTwo = document.querySelector(".inputTwo");
const inputThree = document.querySelector(".inputThree");
const button = document.querySelector(".updateButton");
const paragraf = document.querySelector(".paragraf");

function copyTextToClipboard(text) {
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = text;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
}

function generateSelectedLiText() {
  a = inputOne.value;
  b = inputTwo.value;
  c = inputThree.value;

  switch (selectedLiIndex) {
    case 0:
      selectedLiText = `Hdm ${a} ${b} ${c}`;
      break;
    case 1:
      selectedLiText = `Chgrancvat ashxatox ${a} ${b} ${c}`;
      break;
    case 2:
      selectedLiText = `Ankanxiki stugum ${a} ${b} ${c}`;
      break;
    case 3:
      selectedLiText = `Gner chshtutyan stugum ${a} ${b} ${c}`;
      break;
    default:
      selectedLiText = `barlus ${a} ${b} ${c}`;
  }

  // Update the paragraph text with selectedLiText
  paragraf.textContent = selectedLiText;
}
function updateText() {
  generateSelectedLiText();

  copyTextToClipboard(selectedLiText);
}

button.addEventListener("click", updateText);
