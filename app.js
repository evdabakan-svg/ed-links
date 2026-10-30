// ED Links starter. Storage, editable release records and click analytics are planned for the next stage.
document.querySelectorAll(".platform").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.getAttribute("href") === "#") {
      event.preventDefault();
      alert(`Это демонстрационная страница. Ссылка на ${link.dataset.platform || "площадку"} ещё не добавлена.`);
    }
  });
});

// Показываем только площадки, для которых указана поисковая, а не прямая ссылка на релиз.
const demoNote = document.querySelector(".demo-note");
if (demoNote) {
  const searchLinks = [...document.querySelectorAll(".platform")].filter((link) => {
    try {
      const url = new URL(link.href);
      return /\/search(?:\/|$)/i.test(url.pathname) || url.searchParams.has("text") || url.searchParams.has("q");
    } catch {
      return false;
    }
  });
  if (searchLinks.length) {
    const names = searchLinks.map((link) => link.dataset.platform || link.querySelector("b")?.textContent.trim()).filter(Boolean);
    demoNote.textContent = `Ссылки на релиз ещё не добавлены: ${names.join(", ")}.`;
  } else {
    demoNote.remove();
  }
}
