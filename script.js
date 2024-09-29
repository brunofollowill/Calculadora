let operacao = "";
let numeroAtual = "";
let numeroAnterio = "";

function adicionarNumero(numero) {
  if (numeroAtual.includes(".") && numero === ".") return;
  numeroAtual += numero;
  atualizaDisplay(numeroAtual);
}

function adicionarOperacao(op) {
  if (numeroAtual === "") return;
  if (numeroAnterio !== "") {
    calcular();
  }

  operacao = op;
  numeroAnterio = numeroAtual;
  numeroAtual = "";
}

function limparDisplay() {
  numeroAtual = "";
  numeroAnterio = "";
  operacao = "";
  atualizaDisplay("0");
}

function atualizaDisplay(valor) {
  document.getElementById("display").value = valor;
}

function calcular() {
  let resultado = 0;
  const num1 = parseFloat(numeroAnterio);
  const num2 = parseFloat(numeroAtual);

  if (isNaN(num1) || isNaN(num2)) return;

  switch (operacao) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        alert("Nao e possivel dividir por zero!");
        limparDisplay()
        return
      }
      resultado = num1 / num2;
      break;
    case "%":
      resultado = num1 % num2;
      break;
    case "+/-":
      resultado = num1 + -1;
      break;
    default:
      return;
  }

  atualizaDisplay(resultado);
  numeroAnterio = resultado.toString();
  numeroAtual = "";
  operacao = "";
}
