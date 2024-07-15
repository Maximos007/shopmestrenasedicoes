// Make Cards
const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const videos = [
  {
    title: "CorelDRAW 2024 em Português é um ambiente rico em conteúdo e software profissional de design gráfico, edição de fotos e ilustração vetorial",
    duration: "",
    thumb: "https://www.digitec.ch/im/productimages/4/0/8/8/0/5/0/2/5/3/2/8/5/6/8/9/8/3/9/6f34d15b-da98-4ee6-b399-5b7d16e71ac1_cropped.jpg?impolicy=product&resizeWidth=720",
    video_id: ""
  },
  {
    title: "Wilcom fornece o melhor software de bordado para digitalizadores profissionais, lojas de bordados, educadores da indústria, decoradores de vestuário e amadores.",
    duration: "",
    thumb: "https://i.shgcdn.com/72b039f9-d107-419a-ae92-797b1203e678/-/format/auto/-/preview/3000x3000/-/quality/lighter/-/resize/900x/",
    video_id: ""
  },
  {
    title: "Com o Illustrator e a IA generativa, qualquer pessoa pode criar logotipos, designs para embalagens, imagens para a Web e muito mais.",
    duration: "",
    thumb: "https://blog-frontend.envato.com/cdn-cgi/image/width=2616,quality=75,format=auto/uploads/sites/2/2022/06/Screen-Shot-2022-06-15-at-3.39.07-pm.png",
    video_id: ""
  },
  {
    title: "O software Adobe Photoshop 2024 acelera sua jornada da imaginação à imagem. Perfeito para fotógrafos, designers gráficos e web designers",
    duration: "",
    thumb: "https://www.classcentral.com/report/wp-content/uploads/2022/05/Adobe-Photoshop-BCG-Banner-1.png",
    video_id: ""
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
    ).src = ``;
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