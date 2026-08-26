import "./tailwind.css";

document.addEventListener("DOMContentLoaded", () => {
  const items = [...document.querySelectorAll("[data-menu] li")];
  const gooeyItems = [...document.querySelectorAll("[data-gooey-menu] li")];
  const connectItems = [...document.querySelectorAll("[data-gooey-connect] li")];

  function select(index) {
    items.forEach((item, i) => {
      const selected = i === index;
      item.toggleAttribute("data-selected", selected);
      gooeyItems[i].toggleAttribute("data-selected", selected);
      connectItems[i].toggleAttribute("data-selected", selected);
    });
  }

  items.forEach((item, i) => {
    item.addEventListener("click", () => select(i));
  });

  select(0);
});
