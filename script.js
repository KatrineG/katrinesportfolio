const slides = document.querySelectorAll(".slide");
let currentPage = 0;

// Tastatur-navigation
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") goToNextPage();
  else if (event.key === "ArrowLeft") goToPrevPage();
});

// Knapnavigation
document.querySelector(".next").addEventListener("click", () => goToNextPage());
document.querySelector(".prev").addEventListener("click", () => goToPrevPage());

// ➤ goToNextPage
function goToNextPage() {
  if (currentPage < slides.length - 1) {
    if (currentPage === 4) resetProjectCardsFade();
    slides[currentPage].style.transform = "rotateY(-180deg)";
    currentPage++;
    handlePageActions();
  }
}

// ➤ goToPrevPage
function goToPrevPage() {
  if (currentPage > 0) {
    if (currentPage === 4) resetProjectCardsFade();
    currentPage--;
    slides[currentPage].style.transform = "rotateY(0deg)";
    handlePageActions();
  }
}

// ✅ ➤ goToPage med korrekt rotation
function goToPage(pageNumber) {
  currentPage = pageNumber;

  slides.forEach((slide, index) => {
    if (index < currentPage) {
      slide.style.transform = "rotateY(-180deg)";
    } else {
      slide.style.transform = "rotateY(0deg)";
    }
  });

  handlePageActions();
}

// ➤ Actions pr. slide
function handlePageActions() {
  resetProjectCardsFade();
  if (currentPage === 0) {
    i = 0;
    document.getElementById("typewriter").innerHTML = "";
    initTypeWriterName();
  }

  if (currentPage === 2) {
    j = 0;
    document.getElementById("extra-typewriter").innerHTML = "";
    typeWriterExtra();
    const allImages = document.querySelectorAll(".slide-image");
    allImages.forEach((img) => img.classList.remove("active"));
    allImages[0].classList.add("active");
  }

  if (currentPage === 4) fadeInProjectCards();

  if (currentPage === 5) {
    hintIndex = 0;
    document.getElementById("video-typewriter-text").innerHTML = `<span style="font-style: italic;">${hintStaticPart}</span>`;
    videoHintTypewriter();
  }

  if (currentPage === 11) {
    astroIndex = 0;
    document.getElementById("astro-typewriter-text").innerHTML = `<span style="font-style: italic;">${astroHintStatic}</span>`;
    astroTypewriter();
  }

  if (currentPage === 12) {
    astroHint13Index = 0;
    document.getElementById("astro-hint-typewriter-text").innerHTML = `<span style="font-style: italic;">${astroHint13Static}</span>`;
    astroTypewriter13();
  }

  if (currentPage === 17) {
    nipponHintIndex = 0;
    document.getElementById("nippon-typewriter-text").innerHTML = `<span style="font-style: italic;">${nipponHintStatic}</span>`;
    typeWriterNipponHint();
  }

  if (currentPage === 18) {
    changeSlide(0, "research-slider", "research-dots");
    deskHintIndex = 0;
    document.getElementById("desk-typewriter-text").innerHTML = `<span style="font-style: italic;">${deskHintStatic}</span>`;
    typeWriterDeskHint();
  }

  if (currentPage === 21) {
    contactHintIndex = 0;
    document.getElementById("contact-typewriter-text").innerHTML = `<span style="font-style: italic;">${contactHintStatic}</span>`;
    typeWriterContactHint();
  }
}

// ➤ Typewriter-funktioner
const nameText = "Katrine Guldagers";
let i = 0;
const speed = 100;

function initTypeWriterName() {
  setTimeout(typeWriterName, 1000);
}

function typeWriterName() {
  if (i < nameText.length) {
    document.getElementById("typewriter").innerHTML += nameText.charAt(i);
    i++;
    setTimeout(typeWriterName, speed);
  }
}

const introText = "<em>psst</em>... ";
const extraText = "her er nogle tillægsord, som beskriver mig (især den med kaffen)";
let j = 0;
const extraSpeed = 50;

function typeWriterExtra() {
  document.getElementById("extra-typewriter").innerHTML = introText;
  function writeExtra() {
    if (j < extraText.length) {
      document.getElementById("extra-typewriter").innerHTML += extraText.charAt(j);
      j++;
      setTimeout(writeExtra, extraSpeed);
    }
  }
  writeExtra();
}

function fadeInProjectCards() {
  setTimeout(() => {
    document.getElementById("returnit-card")?.classList.add("fade-in");
    document.getElementById("astro-card")?.classList.add("fade-in");
    document.getElementById("nippon-card")?.classList.add("fade-in");
  }, 100);
}

function resetProjectCardsFade() {
  document.getElementById("returnit-card")?.classList.remove("fade-in");
  document.getElementById("astro-card")?.classList.remove("fade-in");
  document.getElementById("nippon-card")?.classList.remove("fade-in");
}

const hintStaticPart = "psst";
const hintDynamicText = "... klik på skærmene for at afspille hjemmesiden";
let hintIndex = 0;
const videoHintSpeed = 50;

function videoHintTypewriter() {
  const hintElement = document.getElementById("video-typewriter-text");
  function type() {
    if (hintIndex < hintDynamicText.length) {
      hintElement.innerHTML += hintDynamicText.charAt(hintIndex);
      hintIndex++;
      setTimeout(type, videoHintSpeed);
    }
  }
  type();
}

const astroHintStatic = "psst";
const astroHintDynamic = "... Fra bæredygtighed til stjernetegn – på næste side dykker vi ned i et helt andet univers.";
let astroIndex = 0;
const astroHintSpeed = 50;

function astroTypewriter() {
  const astroElement = document.getElementById("astro-typewriter-text");
  function type() {
    if (astroIndex < astroHintDynamic.length) {
      astroElement.innerHTML += astroHintDynamic.charAt(astroIndex);
      astroIndex++;
      setTimeout(type, astroHintSpeed);
    }
  }
  type();
}

const astroHint13Static = "psst";
const astroHint13Dynamic = "... klik på skærmene for at se den digitale oplevelse";
let astroHint13Index = 0;
const astroHint13Speed = 50;

function astroTypewriter13() {
  const element = document.getElementById("astro-hint-typewriter-text");
  function type() {
    if (astroHint13Index < astroHint13Dynamic.length) {
      element.innerHTML += astroHint13Dynamic.charAt(astroHint13Index);
      astroHint13Index++;
      setTimeout(type, astroHint13Speed);
    }
  }
  type();
}

const nipponHintStatic = "psst";
const nipponHintDynamic = "... klik på skærmen for at afspille hjemmesiden";
let nipponHintIndex = 0;
const nipponHintSpeed = 50;

function typeWriterNipponHint() {
  const element = document.getElementById("nippon-typewriter-text");
  function type() {
    if (nipponHintIndex < nipponHintDynamic.length) {
      element.innerHTML += nipponHintDynamic.charAt(nipponHintIndex);
      nipponHintIndex++;
      setTimeout(type, nipponHintSpeed);
    }
  }
  type();
}

const deskHintStatic = "psst";
const deskHintDynamic = "... der er mere deskresearch bag prikkerne";
let deskHintIndex = 0;
const deskHintSpeed = 50;

function typeWriterDeskHint() {
  const element = document.getElementById("desk-typewriter-text");
  function type() {
    if (deskHintIndex < deskHintDynamic.length) {
      element.innerHTML += deskHintDynamic.charAt(deskHintIndex);
      deskHintIndex++;
      setTimeout(type, deskHintSpeed);
    }
  }
  type();
}

const contactHintStatic = "psst";
const contactHintDynamic = "... på næste side kan du finde min kontaktinformation";
let contactHintIndex = 0;
const contactHintSpeed = 50;

function typeWriterContactHint() {
  const element = document.getElementById("contact-typewriter-text");
  function type() {
    if (contactHintIndex < contactHintDynamic.length) {
      element.innerHTML += contactHintDynamic.charAt(contactHintIndex);
      contactHintIndex++;
      setTimeout(type, contactHintSpeed);
    }
  }
  type();
}

// ➤ Billedslider slide 19
function changeSlide(index, sliderId, dotsId) {
  const slides = document.querySelectorAll(`#${sliderId} .research-image`);
  const dots = document.querySelectorAll(`#${dotsId} .research-dot`);

  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });

  dots.forEach((dot, i) => {
    dot.classList.remove("active");
    if (i === index) dot.classList.add("active");
  });
}

// ➤ DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("slider-container").style.opacity = "1";
  }, 300);

  initTypeWriterName();
  changeSlide(0, "research-slider", "research-dots");

  const images = document.querySelectorAll(".slide-image");
  const texts = document.querySelectorAll(".slide-text");
  const dots = document.querySelectorAll(".dot");
  let currentSlide = 0;

  function changeMainSlider(index) {
    images[currentSlide].classList.remove("active");
    texts[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");
    currentSlide = index;
    images[currentSlide].classList.add("active");
    texts[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  dots.forEach((dot, index) =>
    dot.addEventListener("click", () => changeMainSlider(index))
  );

  const videoElements = [
    "desktop-video-returnit",
    "mobile-video-returnit",
    "astro-intro-video",
    "astro-side-video",
    "nippon-video"
  ];

  videoElements.forEach((id) => {
    const video = document.getElementById(id);
    if (video) {
      video.addEventListener("click", () => {
        if (video.paused) video.play();
        else video.pause();
      });
    }
  });
});
