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

const rafaelloProduct = document.getElementById("rafaello-product");
const rafaelloCard = document.getElementById("rafaello-card");

const snickersProduct = document.getElementById("snickers-product");
const snickersCard = document.getElementById("snickers-card");

const ferreroProduct = document.getElementById("ferrero-product");
const ferreroCard = document.getElementById("ferrero-card");

const bountyProduct = document.getElementById("bounty-product");
const bountyCard = document.getElementById("bounty-card");

const oreoProduct = document.getElementById("oreo-product");
const oreoCard = document.getElementById("oreo-card");

const lotusProduct = document.getElementById("lotus-product");
const lotusCard = document.getElementById("lotus-card");

const blueberryBrownieProduct = document.getElementById(
  "blueberry-brownie-product"
);
const blueberryBrownieCard = document.getElementById("blueberry-brownie-card");

const saltedCaramelProduct = document.getElementById("salted-caramel-product");
const saltedCaramelCard = document.getElementById("salted-caramel-card");

const passionFruitMangoProduct = document.getElementById(
  "passion-fruit-mango-product"
);
const passionFruitMangoCard = document.getElementById(
  "passion-fruit-mango-card"
);

const mangoProduct = document.getElementById("mango-product");
const mangoCard = document.getElementById("mango-card");

const kiwiProduct = document.getElementById("kiwi-product");
const kiwiCard = document.getElementById("kiwi-card");

const blueberryProduct = document.getElementById("blueberry-product");
const blueberryCard = document.getElementById("blueberry-card");

const strawberryProduct = document.getElementById("strawberry-product");
const strawberryCard = document.getElementById("strawberry-card");

const strawberryMatchaTeaProduct = document.getElementById(
  "strawberry-matcha-tea-product"
);
const strawberryMatchaTeaCard = document.getElementById(
  "strawberry-matcha-tea-card"
);

const raspberryRoseProduct = document.getElementById("raspberry-rose-product");
const raspberryRoseCard = document.getElementById("raspberry-rose-card");

const peachProduct = document.getElementById("peach-product");
const peachCard = document.getElementById("peach-card");

const mintChocolateProduct = document.getElementById("mint-chocolate-product");
const mintChocolateCard = document.getElementById("mint-chocolate-card");

const mohitoProduct = document.getElementById("mohito-product");
const mohitoCard = document.getElementById("mohito-card");

const pistachiProduct = document.getElementById("pistachio-product");
const pistachioCard = document.getElementById("pistachio-card");

const raspberryPistachiProduct = document.getElementById(
  "raspberry-pistachio-product"
);
const raspberryPistachioCard = document.getElementById(
  "raspberry-pistachio-card"
);

const bubbleGumProduct = document.getElementById("bubble-gum-product");
const bubbleGumCard = document.getElementById("bubble-gum-card");

const pineappleChiaProduct = document.getElementById("pineapple-chia-product");
const pineappleChiaCard = document.getElementById("pineapple-chia-card");

const blueberryLemonProduct = document.getElementById(
  "blueberry-lemon-product"
);
const blueberryLemonCard = document.getElementById("blueberry-lemon-card");

const buttonAssortment = document.querySelectorAll(
  '[data-js="button-assortment"]'
);

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
      menuButton.setAttribute("aria-expanded", "false");
    } else {
      itemsInformation.classList.add("show");
      modalOverlay.classList.add("show");
      menuButton.textContent = "Close";
      menuButton.setAttribute("aria-expanded", "true");
    }
  };

  const closeMenu = () => {
    itemsInformation.classList.remove("show");
    modalOverlay.classList.remove("show");
    menuButton.textContent = "Menu";
    menuButton.setAttribute("aria-expanded", "false");
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
  { productId: "rafaello-product", cardId: "rafaello-card" },
  { productId: "snickers-product", cardId: "snickers-card" },
  { productId: "ferrero-product", cardId: "ferrero-card" },
  { productId: "bounty-product", cardId: "bounty-card" },
  { productId: "oreo-product", cardId: "oreo-card" },
  { productId: "lotus-product", cardId: "lotus-card" },
  { productId: "blueberry-brownie-product", cardId: "blueberry-brownie-card" },
  { productId: "salted-caramel-product", cardId: "salted-caramel-card" },
  {
    productId: "passion-fruit-mango-product",
    cardId: "passion-fruit-mango-card",
  },
  { productId: "mango-product", cardId: "mango-card" },
  { productId: "kiwi-product", cardId: "kiwi-card" },
  { productId: "blueberry-product", cardId: "blueberry-card" },
  { productId: "strawberry-product", cardId: "strawberry-card" },
  {
    productId: "strawberry-matcha-tea-product",
    cardId: "strawberry-matcha-tea-card",
  },
  { productId: "raspberry-rose-product", cardId: "raspberry-rose-card" },
  { productId: "peach-product", cardId: "peach-card" },
  { productId: "mint-chocolate-product", cardId: "mint-chocolate-card" },
  { productId: "mohito-product", cardId: "mohito-card" },
  { productId: "pistachio-product", cardId: "pistachio-card" },
  {
    productId: "raspberry-pistachio-product",
    cardId: "raspberry-pistachio-card",
  },
  { productId: "bubble-gum-product", cardId: "bubble-gum-card" },
  {
    productId: "pineapple-chia-product",
    cardId: "pineapple-chia-card",
  },
  {
    productId: "blueberry-lemon-product",
    cardId: "blueberry-lemon-card",
  },
];

items.forEach(({ productId, cardId }) => {
  const product = document.getElementById(productId);
  const card = document.getElementById(cardId);
  const button = document.querySelector(
    `[data-js="button-assortment"][data-product="${productId}"]`
  );

  if (product && card && button) {
    const toggleCardVisibility = () => {
      toggleClass(card, "show");
      toggleClass(modalOverlay, "show");
      toggleClass(card, "hidden");
      toggleClass(document.body, "no-scroll");

      const isExpanded = card.classList.contains("show");
      product.setAttribute("aria-expanded", isExpanded ? "true" : "false");
    };

    product.addEventListener("click", toggleCardVisibility);
    card.addEventListener("click", toggleCardVisibility);

    if (window.matchMedia("(hover: hover)").matches) {
      product.addEventListener("mouseenter", () => {
        button.style.boxShadow =
          "1px 1px 10px 1px rgba(134, 62, 121, 0.262), -1px -1px 10px 1px rgba(134, 62, 121, 0.262), inset 1px 1px 10px 1px rgba(134, 62, 121, 0.262), inset -1px -1px 10px 1px rgba(134, 62, 121, 0.262)";
      });

      product.addEventListener("mouseleave", () => {
        button.style.boxShadow =
          "1px 1px 15px 3px rgba(255, 255, 255, 1), -1px -1px 15px 3px rgba(255, 255, 255, 1), inset 1px 1px 2px 1px rgba(134, 62, 121, 0.262), inset -1px -1px 2px 1px rgba(134, 62, 121, 0.262)";
      });
    }
  } else {
    console.error(
      `Error: Either product "${productId}", card "${cardId}" or button is not found`
    );
  }
});

// ==============================================================================

function updateOverlayHeight() {
  document.documentElement.style.setProperty(
    "--body-height",
    `${document.body.scrollHeight}px`
  );
}

window.addEventListener("load", updateOverlayHeight);
window.addEventListener("resize", updateOverlayHeight);
window.addEventListener("scroll", updateOverlayHeight);
