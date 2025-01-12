"use strict";

console.clear();

const contact = document.querySelector('[data-js="contact"]');
const contactsSection = document.getElementById("contacts");
const menuButton = document.getElementById("menu-button");
const itemsInformation = document.getElementById("items-information");

contact.addEventListener("click", () => {
  contactsSection.classList.remove("hidden");
});

contactsSection.addEventListener("click", () => {
  contact.classList.remove("hidden");
  contactsSection.classList.add("hidden");
});

function checkScreenSize() {
  if (window.innerWidth <= 950) {
    menuButton.classList.remove("hidden");
    itemsInformation.classList.add("hidden");
    itemsInformation.style.position = "absolute";
    itemsInformation.style.zIndex = "999";
    itemsInformation.style.right = "50%";
    itemsInformation.style.transform = "translateX(50%)";
  } else {
    menuButton.classList.add("hidden");
    itemsInformation.classList.remove("hidden");
    itemsInformation.style.position = "relative";
    itemsInformation.style.right = "";
    itemsInformation.style.transform = "";
  }
}

menuButton.addEventListener("click", () => {
  if (itemsInformation.classList.contains("hidden")) {
    itemsInformation.classList.remove("hidden");
    menuButton.textContent = "Close";
  } else {
    itemsInformation.classList.add("hidden");
    menuButton.textContent = "Menu";
  }
});

checkScreenSize();

window.addEventListener("resize", checkScreenSize);
