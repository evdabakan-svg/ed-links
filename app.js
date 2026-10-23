// ED Links starter. Storage, editable release records and click analytics are planned for the next stage.
document.querySelectorAll(".platform").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.getAttribute("href") === "#") {
      event.preventDefault();
      alert(`Это демонстрационная страница. Ссылка на ${link.dataset.platform || "площадку"} ещё не добавлена.`);
    }
  });
});