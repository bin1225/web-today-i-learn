const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");

tilForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const dateInput = document.querySelector("#til-date").value;
  const titleInput = document.querySelector("#til-title").value;
  const contentInput = document.querySelector("#til-content").value;

  const newArticle = document.createElement("article");
  newArticle.classList.add("til-item");

  const timeEl = document.createElement("time");
  timeEl.textContent = dateInput;

  const h3El = document.createElement("h3");
  h3El.textContent = titleInput;

  const pEl = document.createElement("p");
  pEl.textContent = contentInput;

  newArticle.appendChild(timeEl);
  newArticle.appendChild(h3El);
  newArticle.appendChild(pEl);

  tilList.appendChild(newArticle);

  tilForm.reset();
});
