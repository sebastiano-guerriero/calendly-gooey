import "./tailwind.css";

document.addEventListener("DOMContentLoaded", () => {
  const items = [...document.querySelectorAll("[data-menu] li")];
  const gooeyItems = [...document.querySelectorAll("[data-gooey-menu] li")];

  function select(index) {
    items.forEach((item, i) => {
      item.toggleAttribute("data-selected", i === index);
      gooeyItems[i].toggleAttribute("data-selected", i === index);
    });
  }

  items.forEach((item, i) => {
    item.addEventListener("click", () => select(i));
  });

  select(0);
});
