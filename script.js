let textElement = document.getElementById("adviceContent");

onButtonClick();
async function onButtonClick() {
  try {
    await fetchAnotherAdvice();
  } catch (error) {
    console.error(error);
  }
}

async function fetchAnotherAdvice() {
  const emptyString = " ";
  let advice = emptyString;
  textElement.innerHTML = "Loading...";

  await fetch("https://api.adviceslip.com/advice")
    .then((resp) => resp.json())
    .then((data) => (advice = data.slip.advice));

  textElement.innerHTML = emptyString;
  const words = advice.split(emptyString);
  for (let i = 0; i < words.length; i++) {
    textElement.innerHTML += ` ${words[i]}`;

    await new Promise((resolve) => setTimeout(resolve, 200));
  }
}
