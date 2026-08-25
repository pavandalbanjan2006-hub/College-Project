const answers = {
  2: "Descriptive analytics explains what has happened by summarising past data. It helps us understand existing patterns and results.",
  5: "Data analytics is the process of examining data to discover useful patterns and insights. Its main types are descriptive analytics, diagnostic analytics, predictive analytics, and prescriptive analytics. Together, they help us understand what happened, why it happened, what may happen next, and what action should be taken.",
  10: "Data analytics is the systematic process of collecting, cleaning, examining, and interpreting data to discover meaningful patterns and support decisions. The four major types are descriptive analytics, which explains what happened; diagnostic analytics, which explains why it happened; predictive analytics, which estimates what may happen; and prescriptive analytics, which recommends what action to take. These types help organisations turn raw data into useful information for planning and decision-making."
};

const source = {2: "Source: Data Analytics notes · Unit 1", 5: "Source: Data Analytics notes · Unit 1 · Model paper", 10: "Source: Data Analytics notes · Unit 1 · Model paper · PYQ"};
document.querySelectorAll(".mark-tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    const marks = button.dataset.marks;
    document.querySelectorAll(".mark-tabs button").forEach((item) => item.classList.toggle("active", item === button));
    document.querySelector(".answer-meta").textContent = `${marks}-MARK ANSWER · FROM PROVIDED MATERIAL`;
    document.querySelector("#answer-text").textContent = answers[marks];
    document.querySelector("#answer-source").textContent = source[marks];
  });
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), {threshold: .12});
  revealItems.forEach((item) => observer.observe(item));
} else revealItems.forEach((item) => item.classList.add("is-visible"));
