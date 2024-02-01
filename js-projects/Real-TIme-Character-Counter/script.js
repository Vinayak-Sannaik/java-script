const TotalCharEl = document.querySelector("#totalChar-count");
const RemainingCharEl = document.querySelector("#RemainingChar-count");
const InputTextEl = document.querySelector("#input");

InputTextEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  TotalCharEl.innerHTML = InputTextEl.value.length;
  RemainingCharEl.innerHTML = InputTextEl.getAttribute("maxLength") - InputTextEl.value.length;
}
