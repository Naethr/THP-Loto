const resultElement = document.querySelector("#result");
const lotoForm = document.querySelector("#loto-form");

const displayResult = (message) => {
  resultElement.textContent = message;
};

const generateWinningNumbers = () => {
  const winningNumbers = [];

  while (winningNumbers.length < 6) {
    const randomNumber = Math.floor(Math.random() * 49) + 1;

    if (!winningNumbers.includes(randomNumber)) {
      winningNumbers.push(randomNumber);
    }
  }

  return winningNumbers;
};

const hasValidLotoGrid = (lotoNumbers) => {
  if (lotoNumbers.length !== 6) {
    return false;
  }

  for (let i = 0; i < lotoNumbers.length; i += 1) {
    const number = lotoNumbers[i];

    if (!Number.isInteger(number) || number < 1 || number > 49) {
      return false;
    }
  }

  return true;
};

const hasWinningGrid = (lotoNumbers, winningNumbers) => {
  for (let i = 0; i < lotoNumbers.length; i += 1) {
    if (!winningNumbers.includes(lotoNumbers[i])) {
      return false;
    }
  }

  for (let i = 0; i < winningNumbers.length; i += 1) {
    if (!lotoNumbers.includes(winningNumbers[i])) {
      return false;
    }
  }

  return true;
};

const checkLoto = (firstname, lastname, email, lotoNumbers) => {
  if (firstname === "") {
    displayResult("Veuillez fournir un prénom");
    return;
  }

  if (lastname === "") {
    displayResult("Veuillez fournir un nom");
    return;
  }

  if (email === "") {
    displayResult("Veuillez fournir un email");
    return;
  }

  const emailRegex = /^[^\s@]{1,}@[^\s@]+\.[a-zA-Z]{2,3}$/;

  if (email.length <= 8 || email.length >= 30 || !emailRegex.test(email)) {
    displayResult("Votre email n'est pas valide");
    return;
  }

  if (!hasValidLotoGrid(lotoNumbers)) {
    displayResult("Veuillez fournir 6 nombres valides entre 1 et 49");
    return;
  }

  const winningNumbers = generateWinningNumbers();

  // Pour tester la victoire, remplacer temporairement le tirage aléatoire par :
  // const winningNumbers = [1, 2, 3, 4, 5, 6];

  if (hasWinningGrid(lotoNumbers, winningNumbers)) {
    displayResult("Félicitations, vous avez gagné 1 million!!!!!");
    return;
  }

  displayResult(
    `Désolé, vous avez perdu, les nombres gagnants sont: ${winningNumbers.join(", ")}`
  );
};

lotoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstname = document.querySelector("#firstname").value.trim();
  const lastname = document.querySelector("#lastname").value.trim();
  const email = document.querySelector("#email").value.trim();
  const lotoInputs = document.querySelectorAll('input[name="loto-number"]');
  const lotoNumbers = [];

  for (let i = 0; i < lotoInputs.length; i += 1) {
    lotoNumbers.push(Number(lotoInputs[i].value));
  }

  checkLoto(firstname, lastname, email, lotoNumbers);
});
