let buttons = document.querySelectorAll("button");

let results_card = document.querySelector(".results_card");

let form_card = document.querySelector(".form_card");
let submit = document.querySelector(".submit");

let rating = 5;

buttons.forEach((button) => {
  button.onclick = () => {
    rating = button.innerText;
  };
});

submit.onclick = () => {
  form_card.classList.add("hide");
  let indicator = document.querySelector(".indicator");
  indicator.innerText = "You selected " + rating + " of 5";
  results_card.classList.add("show");
};
