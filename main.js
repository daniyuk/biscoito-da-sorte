const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnOpen = document.querySelector(".btnOpen");
const btnReset = document.querySelector(".btnReset");
const phrases = document.querySelector(".phrases")

let message = [
  "Contanto que você não desista, a verdade está no final.",
  "Mesmo em um futuro distante, nunca esqueça o você de agora.",
  "Mesmo que não pareça decente, encontre as partes boas.",
  "O amanhã que estávamos esperando se torna ontem em algum momento.",
  "A madrugada antes do sol nascer é sempre a mais escura.",
  "Só porque você é diferente não significa que você esteja errado.",
  "Só viva seu próprio caminho, é seu de qualquer maneira.",
  "O amanhã virá novamente, porque nenhuma escuridão, nenhuma estação, pode durar para sempre.",
  "Mesmo que te digam o contrário, se você acreditar em você mesmo, pode fazer qualquer coisa.",
  "Vá devagar com seus passos, tente ir até o fim.",
  "Não seja capturado pelos sonhos dos outros."
]

btnOpen.addEventListener('click', handleOpenClick);
btnReset.addEventListener('click', toggleScreen);

document.addEventListener('keydown', function(e) {
  if(e.key == 'Enter' && screen2.classList.contains('hide')) {
    handleOpenClick();
  } else if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    toggleScreen();
  }
})

function handleOpenClick() {
  toggleScreen()
  let number = Math.round(Math.random() * 10);
  phrases.innerText = message[number];
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
