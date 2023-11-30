// Program title

document.getElementById("btn").addEventListener("click", MadLib);

function MadLib() {
  // INPUT
  let member = document.getElementById("member").value;
  let noun = document.getElementById("noun").value;
  let action = document.getElementById("action").value;
  // PROCESS
  let madlib = `My ${member} loves to eat  ${noun} and then ${action} .`;

  // OUTPUT

  document.getElementById("madlib").innerHTML = madlib;
}
