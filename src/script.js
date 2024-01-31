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
  let conselho = ""

  await fetch("https://api.adviceslip.com/advice")
    .then((resp) => resp.json())
    .then((data) => (conselho = data.slip.advice));

    elementoTexto.innerHTML = conselho;
}