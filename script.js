let elementoTexto = document.getElementById("conselhoConteudo");

async function outroConselho(){
    let conselho = ""

    await fetch("https://api.adviceslip.com/advice")
      .then((resp) => resp.json())
      .then((data) => (conselho = data.slip.advice));

      elementoTexto.innerHTML = conselho;
};