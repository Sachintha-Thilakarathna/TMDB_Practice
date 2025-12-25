const cards1 = document.getElementById("cards");

const card1 = {
  img: "https://media.themoviedb.org/t/p/w220_and_h330_face/wiWAg4mKV2S4vImPxsPRIdj2R2B.jpg",
  name1: "The Monuments Men",
  textColor: "text-white",
  badge_color: "badge-secondary",
  para: "It was the greatest art heist in history",
  badge_color2: "badge-outline",
  label1: "War",
  label2: "History"
};

const card2 = {
  img: "https://media.themoviedb.org/t/p/w220_and_h330_face/8o8kiBkWFK3gVytHdyzEWUBXVfK.jpg",
  name1: "Family Guy",
  textColor: "text-white",
  badge_color: "badge-primary",
  para: "Parental Discretion Advised, that's how you know it's good.",
  badge_color2: "badge-outline",
  label1: "Animation",
  label2: "Comedy"
};

const card3 = {
  img: "https://media.themoviedb.org/t/p/w220_and_h330_face/zBvw25afDn93embB8L7FzvTT2xq.jpg",
  name1: "Kantara - A Legend: Chapter 1 (2025)",
  textColor: "text-white",
  badge_color: "badge-success",
  para: "Parental Discretion Advised, that's how you know it's good.",
  badge_color2: "badge-outline",
  label1: "Drama",
  label2: "Action"
};

// choose which card to show
const {
  img,
  name1,
  textColor,
  badge_color,
  para,
  badge_color2,
  label1,
  label2
} = card1; 


const template = `
<div class="card bg-base-100 w-96 shadow-sm border">
  <figure>
    <img src="${img}" alt="${name1}">
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      ${name1}
      <div class="badge ${badge_color} ${textColor}">NEW</div>
    </h2>
    <p>${para}</p>
    <div class="card-actions justify-end">
      <div class="badge ${badge_color2}">${label1}</div>
      <div class="badge ${badge_color2}">${label2}</div>
    </div>
  </div>
</div>
`;

cards1.innerHTML = template;