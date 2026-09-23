const projects = [
  {
    city: "Rostov-on-Don\nLCD admiral",
    area: "81 m2",
    time: "3.5 months",
    cost: "Upon request",
  },
  {
    city: "Sochi\nThieves",
    area: "105 m2",
    time: "4 months",
    cost: "Upon request",
  },
  {
    city: "Rostov-on-Don\nPatriotic",
    area: "93 m2",
    time: "3 months",
    cost: "Upon request",
  },
];

const fields = [...document.querySelectorAll("[data-project-field]")];
const selectors = [...document.querySelectorAll("[data-slide]")];
const images = [...document.querySelectorAll("[data-image]")];
const previousButton = document.querySelector('[data-direction="previous"]');
const nextButton = document.querySelector('[data-direction="next"]');

let activeIndex = 0;

function showProject(index) {
  activeIndex = (index + projects.length) % projects.length;
  const project = projects[activeIndex];

  fields.forEach((field) => {
    field.textContent = project[field.dataset.projectField];
  });

  selectors.forEach((selector) => {
    const selected = Number(selector.dataset.slide) === activeIndex;
    selector.classList.toggle("is-active", selected);
    selector.setAttribute("aria-current", selected ? "true" : "false");
  });

  images.forEach((image) => {
    const selected = Number(image.dataset.image) === activeIndex;
    image.classList.toggle("is-active", selected);
    image.setAttribute("aria-hidden", String(!selected));
  });
}

selectors.forEach((selector) => {
  selector.addEventListener("click", () => {
    showProject(Number(selector.dataset.slide));
  });
});

previousButton.addEventListener("click", () => showProject(activeIndex - 1));
nextButton.addEventListener("click", () => showProject(activeIndex + 1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") showProject(activeIndex - 1);
  if (event.key === "ArrowRight") showProject(activeIndex + 1);
});

showProject(0);
