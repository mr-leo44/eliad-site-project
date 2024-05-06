const scroll_indicator = document.getElementById("scroll-indicator");

window.addEventListener("scroll", function () {
  const maxScrollHeight = document.body.scrollHeight - window.innerHeight;

  const currentScrollHeight = (window.scrollY / maxScrollHeight) * 100;
  scroll_indicator.style.width = `${currentScrollHeight}%`;
});

/** Counter */

const numbers = document.querySelectorAll(".number");

numbers.forEach((num) => {
  const incrementCounter = () => {
    const target_number = +num.getAttribute("data-target-number");
    const current_number = parseInt(num.innerText);

    if (current_number < target_number) {
      num.innerText = Math.floor(current_number + target_number / 100);
      setTimeout(incrementCounter, 100);
    } else {
      num.innerText = target_number.toLocaleString();
    }
  };
  incrementCounter();
});

/* slides */

const container = document.querySelector(".slides-container");
const cards = document.querySelector(".cards");

/* keep track of user's mouse down and up */
let isPressedDown = false;
/* x horizontal space of cursor from inner container */
let cursorXSpace;

container.addEventListener("mousedown", (e) => {
  isPressedDown = true;
  cursorXSpace = e.offsetX - cards.offsetLeft;
  container.style.cursor = "grabbing";
});

container.addEventListener("mouseup", () => {
  container.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  isPressedDown = false;
});

container.addEventListener("mousemove", (e) => {
  if (!isPressedDown) return;
  e.preventDefault();
  cards.style.left = `${e.offsetX - cursorXSpace}px`;
  boundCards();
});

function boundCards() {
  const container_rect = container.getBoundingClientRect();
  const cards_rect = cards.getBoundingClientRect();

  if (parseInt(cards.style.left) > 0) {
    cards.style.left = 0;
  } else if (cards_rect.right < container_rect.right) {
    cards.style.left = `-${cards_rect.width - container_rect.width}px`;
  }
}


/* scroll reveal */

window.sr = ScrollReveal({
  reset: true,
});

sr.reveal(".hero .intro", {
  duration: 2000,
  origin: "left",
  distance: "200px",
});
sr.reveal(".hero .intro .btn", {
  duration: 2000,
  origin: "left",
  distance: "200px",
  delay: 200,
});

sr.reveal(".hero .image", {
  duration: 2000,
  origin: "right",
  distance: "200px",
});

// about
sr.reveal(".about .intro", {
  duration: 2000,
  origin: "right",
  distance: "200px",
});

sr.reveal(".about .img", {
  duration: 2000,
  origin: "left",
  distance: "200px",
  rotate: {
    x: 60,
    y: 45,
  },
});

/* services */
sr.reveal(".services .intro", {
  duration: 2000,
  origin: "top",
  distance: "200px",
});

sr.reveal(".services .img", {
  duration: 2000,
  origin: "bottom",
  distance: "200px",
});

// portfolio
sr.reveal(".portfolio .intro", {
  duration: 2000,
  origin: "bottom",
  distance: "200px",
});

// clients
sr.reveal(".clients .intro", {
  duration: 2000,
  origin: "right",
  distance: "200px",
});

sr.reveal(".clients .img", {
  duration: 2000,
  origin: "left",
  distance: "200px",
});
