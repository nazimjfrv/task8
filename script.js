const eni = document.getElementById("base");
const uzunu = document.getElementById("height");
const btnPerimetr = document.getElementById("periBtn");
const btnSahe = document.getElementById("saheBtn");
const netice = document.getElementById("perimeterResult");

btnPerimetr.addEventListener("click", function () {
  let hesabla = 2 * (Number(eni.value) + Number(uzunu.value));
  netice.innerHTML = hesabla;
  eni.value = "";
  uzunu.value = "";
});