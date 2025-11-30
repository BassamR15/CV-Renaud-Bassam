const cv = document.getElementById("cv");
const moi = document.getElementById("moi");
const projets = document.getElementById("projet");
const homepage = document.getElementById("page1");
const clickable = document.querySelectorAll("li");
const cvPage = document.querySelector(".cv");
const buttonCV = document.getElementById("button-cv");
const buttonProjet = document.getElementById("button-projet");
const projetPage = document.getElementById("projet-page");
const topLeft = document.getElementById("top-left-button");
const portfolio = document.getElementById("portfolio")


const removeBlue = (target) => {
  target.classList.remove("text-primary");
}

const check = (event) => {
  if (!event.currentTarget.classList.contains("text-primary")) {
    cv.classList.add("text-primary");
    removeBlue(moi);
    removeBlue(projets);
    homepage.classList.add("d-none");
    projetPage.classList.add("d-none");
    cvPage.classList.remove("d-none");
  }
}

const checkProject= (event) => {
  if (!event.currentTarget.classList.contains("text-primary")) {
    projets.classList.add("text-primary");
    removeBlue(moi);
    removeBlue(cv);
    homepage.classList.add("d-none");
    cvPage.classList.add("d-none");
    projetPage.classList.remove("d-none");
  }
}

const checkHome= (event) => {
  if (!event.currentTarget.classList.contains("text-primary")) {
    moi.classList.add("text-primary");
    removeBlue(cv);
    removeBlue(projets);
    homepage.classList.remove("d-none");
    cvPage.classList.add("d-none");
    projetPage.classList.add("d-none");
  }
}

cv.addEventListener('click', check);
buttonCV.addEventListener('click', check);

projets.addEventListener('click', checkProject);
buttonProjet.addEventListener('click', checkProject);

topLeft.addEventListener('click', checkHome);
moi.addEventListener('click', checkHome);
portfolio.addEventListener('click', checkHome)
