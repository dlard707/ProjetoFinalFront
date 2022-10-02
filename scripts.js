// Make Cards
const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const videos = [
  {
    title: "Desenvolvimento de Apps - React Native",
    duration: "40 h",
    thumb: "https://cdn.pixabay.com/photo/2018/01/16/05/56/idea-3085367_960_720.jpg",
    video_id: "GykTLqODQuU"
  },
  {
    title: "Desenvolvimento Front-End ",
    duration: "40 h",
    thumb: "https://cdn.pixabay.com/photo/2016/02/07/21/03/computer-1185626_960_720.jpg",
    video_id: "HN1UjzRSdBk"
  },
  {
    title: "Desenvolvimento Back-End ",
    duration: "40 h",
    thumb: "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_960_720.jpg",
    video_id: "rAzHvYnQ8DY"
  },
  {
    title: "Design UI/Ux para aplicativos",
    duration: "40 h",
    thumb: "https://cdn.pixabay.com/photo/2015/05/28/14/38/ux-787980_960_720.jpg",
    video_id: "ghTrp1x_1As"
  },
  {
    title: "Design UI/Ux para web",
    duration: "40 h",
    thumb: "https://cdn.pixabay.com/photo/2015/05/31/13/45/young-woman-791849_960_720.jpg",
    video_id: "GSqR2i-Pq6o"
  },
  {
    title:
      "Inglês Instrumental",
    duration: "40h",
    thumb: "https://cdn.pixabay.com/photo/2017/08/01/00/38/man-2562325_960_720.jpg",
    video_id: "2alg7MQ6_sI"
  }
];

videos.map(video => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", video.video_id);
  cardClone.querySelector("img").src = video.thumb;
  cardClone.querySelector(".title").innerHTML = video.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML =
    video.duration;
  sectionCards.appendChild(cardClone);
});

card.remove();

// Modal actions
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = [...document.querySelectorAll(".cards .card")];

cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.querySelector(
      "iframe"
    ).src = `https://www.youtube.com/embed/${card.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector("iframe").src = ``;
  document.querySelector("body").style.overflow = "initial";
});




// MENU RESPONSIVO