// Detect outside click and close popup

const elements = document.getElementsByClassName("pop-up_container");
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function (e) {
    elements[i].classList.remove("active");
  });
}
