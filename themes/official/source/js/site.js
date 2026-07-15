const switcher = document.querySelector(".language-switcher");

if (switcher) {
  const button = switcher.querySelector("button");

  button.addEventListener("click", () => {
    const open = switcher.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(open));
  });

  document.addEventListener("click", (event) => {
    if (!switcher.contains(event.target)) {
      switcher.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
    }
  });
}
