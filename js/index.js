const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");

// 1. TIL 등록 기능 구현
tilForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const dateInput = document.querySelector("#til-date").value;
  const titleInput = document.querySelector("#til-title").value;
  const contentInput = document.querySelector("#til-content").value;

  const newArticle = document.createElement("article");
  newArticle.classList.add("til-item");
  // 애니메이션 효과를 위해 초기 스타일 설정
  newArticle.style.opacity = "0";
  newArticle.style.transform = "translateX(-20px)";

  newArticle.innerHTML = `
    <time>${dateInput}</time>
    <h3>${titleInput}</h3>
    <p>${contentInput}</p>
  `;

  tilList.prepend(newArticle); // 최신 글이 위로 오도록 prepend 사용

  // 부드럽게 나타나는 효과
  setTimeout(() => {
    newArticle.style.opacity = "1";
    newArticle.style.transform = "translateX(0)";
  }, 10);

  tilForm.reset();
});

// 2. 스크롤 애니메이션 (Intersection Observer)
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.content-section').forEach(section => {
  observer.observe(section);
});

