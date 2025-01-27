"use strict";

console.clear();

const menuButton = document.getElementById("menu-button");
const itemsInformation = document.getElementById("items-information");

const aboutMochiNav = document.getElementById("about-mochi-nav");
const aboutMochiContainer = document.getElementById("about-mochi-container");
const aboutMochiDescription = document.getElementById(
  "about-mochi-description"
);
const aboutAssortmentNav = document.getElementById("about-assortment-nav");

const modalOverlay = document.getElementById("modalOverlay");

// ===============================================================

const rafaelloButton = document.getElementById("rafaello-button");
const rafaelloCard = document.getElementById("rafaello-card");

const snickersButton = document.getElementById("snickers-button");
const snickersCard = document.getElementById("snickers-card");

const ferreroButton = document.getElementById("ferrero-button");
const ferreroCard = document.getElementById("ferrero-card");

const bountyButton = document.getElementById("bounty-button");
const bountyCard = document.getElementById("bounty-card");

const oreoButton = document.getElementById("oreo-button");
const oreoCard = document.getElementById("oreo-card");

const lotusButton = document.getElementById("lotus-button");
const lotusCard = document.getElementById("lotus-card");

const blueberryBrownieButton = document.getElementById(
  "blueberry-brownie-button"
);
const blueberryBrownieCard = document.getElementById("blueberry-brownie-card");

const saltedCaramelButton = document.getElementById("salted-caramel-button");
const saltedCaramelCard = document.getElementById("salted-caramel-card");

const passionFruitMangoButton = document.getElementById(
  "passion-fruit-mango-button"
);
const passionFruitMangoCard = document.getElementById(
  "passion-fruit-mango-card"
);

const mangoButton = document.getElementById("mango-button");
const mangoCard = document.getElementById("mango-card");

const kiwiButton = document.getElementById("kiwi-button");
const kiwiCard = document.getElementById("kiwi-card");

const blueberryButton = document.getElementById("blueberry-button");
const blueberryCard = document.getElementById("blueberry-card");

const strawberryButton = document.getElementById("strawberry-button");
const strawberryCard = document.getElementById("strawberry-card");

const strawberryMatchaTeaButton = document.getElementById(
  "strawberry-matcha-tea-button"
);
const strawberryMatchaTeaCard = document.getElementById(
  "strawberry-matcha-tea-card"
);

const raspberryRoseButton = document.getElementById("raspberry-rose-button");
const raspberryRoseCard = document.getElementById("raspberry-rose-card");

const peachButton = document.getElementById("peach-button");
const peachCard = document.getElementById("peach-card");

const mintChocolateButton = document.getElementById("mint-chocolate-button");
const mintChocolateCard = document.getElementById("mint-chocolate-card");

const mohitoButton = document.getElementById("mohito-button");
const mohitoCard = document.getElementById("mohito-card");

const pistachioButton = document.getElementById("pistachio-button");
const pistachioCard = document.getElementById("pistachio-card");

const raspberryPistachioButton = document.getElementById(
  "raspberry-pistachio-button"
);
const raspberryPistachioCard = document.getElementById(
  "raspberry-pistachio-card"
);

const bubbleGumButton = document.getElementById("bubble-gum-button");
const bubbleGumCard = document.getElementById("bubble-gum-card");

const pineappleChiaButton = document.getElementById("pineapple-chia-button");
const pineappleChiaCard = document.getElementById("pineapple-chia-card");

const blueberryLemonButton = document.getElementById("blueberry-lemon-button");
const blueberryLemonCard = document.getElementById("blueberry-lemon-card");

// ==============================================================================

function toggleClass(element, className) {
  element.classList.toggle(className);
}

// ==============================================================================

function checkScreenSizeMenu() {
  if (window.innerWidth <= 768) {
    menuButton.classList.remove("hidden");
    itemsInformation.classList.add("hidden");
  } else {
    menuButton.classList.add("hidden");
    itemsInformation.classList.remove("hidden");
  }
}

if (menuButton && itemsInformation) {
  const menuOpen = () => {
    if (itemsInformation.classList.contains("show")) {
      itemsInformation.classList.remove("show");
      modalOverlay.classList.remove("show");
      menuButton.textContent = "Menu";
    } else {
      itemsInformation.classList.add("show");
      modalOverlay.classList.add("show");
      menuButton.textContent = "Close";
    }
  };

  const closeMenu = () => {
    itemsInformation.classList.remove("show");
    modalOverlay.classList.remove("show");
    menuButton.textContent = "Menu";
  };

  menuButton.addEventListener("click", menuOpen);

  aboutAssortmentNav.addEventListener("click", closeMenu);
}

checkScreenSizeMenu();

window.addEventListener("resize", checkScreenSizeMenu);

// ==============================================================================

if (aboutMochiNav && aboutMochiContainer) {
  const aboutMochiVisibility = () => {
    toggleClass(aboutMochiNav, "show");
    toggleClass(aboutMochiContainer, "hidden");
    toggleClass(modalOverlay, "show");
    toggleClass(document.body, "no-scroll");
  };

  aboutMochiNav.addEventListener("click", aboutMochiVisibility);
  aboutMochiContainer.addEventListener("click", aboutMochiVisibility);
} else {
  console.error("Error: aboutMochiNav or aboutMochiContainer is not found");
}

// ================================================================================

const items = [
  { buttonId: "rafaello-button", cardId: "rafaello-card" },
  { buttonId: "snickers-button", cardId: "snickers-card" },
  { buttonId: "ferrero-button", cardId: "ferrero-card" },
  { buttonId: "bounty-button", cardId: "bounty-card" },
  { buttonId: "oreo-button", cardId: "oreo-card" },
  { buttonId: "lotus-button", cardId: "lotus-card" },
  { buttonId: "blueberry-brownie-button", cardId: "blueberry-brownie-card" },
  { buttonId: "salted-caramel-button", cardId: "salted-caramel-card" },
  {
    buttonId: "passion-fruit-mango-button",
    cardId: "passion-fruit-mango-card",
  },
  { buttonId: "mango-button", cardId: "mango-card" },
  { buttonId: "kiwi-button", cardId: "kiwi-card" },
  { buttonId: "blueberry-button", cardId: "blueberry-card" },
  { buttonId: "strawberry-button", cardId: "strawberry-card" },
  {
    buttonId: "strawberry-matcha-tea-button",
    cardId: "strawberry-matcha-tea-card",
  },
  { buttonId: "raspberry-rose-button", cardId: "raspberry-rose-card" },
  { buttonId: "peach-button", cardId: "peach-card" },
  { buttonId: "mint-chocolate-button", cardId: "mint-chocolate-card" },
  { buttonId: "mohito-button", cardId: "mohito-card" },
  { buttonId: "pistachio-button", cardId: "pistachio-card" },
  {
    buttonId: "raspberry-pistachio-button",
    cardId: "raspberry-pistachio-card",
  },
  { buttonId: "bubble-gum-button", cardId: "bubble-gum-card" },
  { buttonId: "pineapple-chia-button", cardId: "pineapple-chia-card" },
  { buttonId: "blueberry-lemon-button", cardId: "blueberry-lemon-card" },
];

items.forEach(({ buttonId, cardId }) => {
  const button = document.getElementById(buttonId);
  const card = document.getElementById(cardId);

  if (button && card) {
    const toggleCardVisibility = () => {
      toggleClass(card, "show");
      toggleClass(modalOverlay, "show");
      toggleClass(card, "hidden");
      toggleClass(document.body, "no-scroll");
    };

    button.addEventListener("click", toggleCardVisibility);
    card.addEventListener("click", toggleCardVisibility);
  } else {
    console.error(
      `Error: Either button with ID "${buttonId}" or card with ID "${cardId}" is not found`
    );
  }
});
