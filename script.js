let elementoTexto = document.getElementById("conselhoConteudo");

aoClicarOutroConselho();
async function aoClicarOutroConselho(){
  try {
    this.buscarOutroConselho();
  } catch (error) {
    console.error(error)
  }
};

async function buscarOutroConselho(){
  const stringVazia = " ";
  let conselho = stringVazia;
  elementoTexto.innerHTML = "Loading...";
  
  await fetch("https://api.adviceslip.com/advice")
  .then((resp) => resp.json())
  .then((data) => (conselho = data.slip.advice));
  
  elementoTexto.innerHTML = stringVazia;
  const words = conselho.split(stringVazia);
  for (let i = 0; i < words.length; i++) {
    elementoTexto.innerHTML += ` ${words[i]}`;

    await new Promise((resolve) => setTimeout(resolve, 200));
  }
}