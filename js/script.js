let alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let codificado = "";
let descriptografar = "";

function cripto(){
    const texto_cripto = document.getElementById("texto_cripto").value.toUpperCase().split("");
    const contidade = document.getElementById("contidade").value;

    const pulo = Number(contidade);
    for (let i = 0; i < texto_cripto.length; i++) {
      if (texto_cripto[i] === " ") {
        codificado += " ";
      } else {
        const posicao = alfabeto.indexOf(texto_cripto[i]);
        const position = posicao + pulo;
  
        if (position >= alfabeto.length) {
          codificado += alfabeto[position - alfabeto.length];
        } else {
          codificado += alfabeto[position];
        }
      }
    }
    document.getElementById("resultado").textContent = codificado;
}

function descripto(){
    const texto_cripto = document.getElementById("texto_cripto").value.toUpperCase().split("");
    const contidade = document.getElementById("contidade").value;

    const pulo = Number(contidade);
    for (let i = 0; i < texto_cripto.length; i++) {
      if (texto_cripto[i] === " ") {
        descriptografar += " ";
      } else {
        const posicao = alfabeto.indexOf(texto_cripto[i]);
        const position = posicao - pulo;
  
        if (position <= 0) {
          let result = parseInt(position) + parseInt(alfabeto.length);
          descriptografar += alfabeto[result];
          console.log(alfabeto.length);
          
        } else {
          descriptografar += alfabeto[position];
        }
      }
    }
    document.getElementById("resultado").textContent = descriptografar;
}

function limpar(){
    document.getElementById("resultado").textContent = "";
    codificado = "";
    descriptografar = "";
    document.getElementById("texto_cripto").value = "";
    document.getElementById("contidade").value = "";
}