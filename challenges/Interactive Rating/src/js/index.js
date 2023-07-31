let rating = document.querySelectorAll(".rating-number");
rating.forEach((element) => {
  element.addEventListener("click", function () {
    rating.forEach((i) => i.classList.remove("active"));
    element.classList.toggle("active");
  });
});

let submit = document.querySelector(".btn-submit");

let container = document.querySelector(".rating-container");
submit.addEventListener("click", function () {
  container.innerHTML = `
  <div class="thanks-container">
      <img src="./src/assets/images/illustration-thank-you.svg" alt="thank you illustration" />
      <p class="thank-selected">You selected {} out of 5</p>
      <h1 class="think-heaader">Thank you!</h1>
      <p class="think-description">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
</div>
  `;
});
