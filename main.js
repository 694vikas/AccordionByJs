const data = [
  {
    id: "1",
    question: "Q. what is seo ha whta is seo",
    answer:
      "seo is search engine optimization which help us to rank our website on google first page.",
  },
  {
    id: "2",
    question: "Q. what is seo ha whta is seo",
    answer:
      "seo is search engine optimization which help us to rank our website on google first page.",
  },
  {
    id: "3",
    question: "Q. what is seo ha whta is seo",
    answer:
      "seo is search engine optimization which help us to rank our website on google first page.",
  },
  {
    id: "4",
    question: "Q. what is seo ha whta is seo",
    answer:
      "seo is search engine optimization which help us to rank our website on google first page.",
  },
];
const accordionWrapper = document.querySelector(".accordion");
function createAccordionData() {
  accordionWrapper.innerHTML = data
    .map((dataItem) => {
      return `<div class="accordion_item">
        <div class="accordion_title">
        <h3> ${dataItem.question}</h3>
        <i class="fa solid fa-arrow-down"> </i></div>
        <div class="accordion_content">
        <p>${dataItem.answer}</p></div>
        </div>`;
    })
    .join(" ");
}
createAccordionData();

let accordionTitle = document.querySelectorAll(".accordion_title");

accordionTitle.forEach((currentItem) => {
  currentItem.addEventListener("click", (event) => {
    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
    } else {
      getAllActive = document.querySelectorAll(".active");
      getAllActive.forEach((currentActiveItem) => {
        currentActiveItem.classList.remove("active");
      });
    }
    currentItem.classList.add("active");
  });
});
