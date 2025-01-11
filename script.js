"use strict";

console.clear();

const contact = document.querySelector('[data-js="contact"]');
const contactsSection = document.getElementById("contacts");

// Додаємо обробник події для кнопки
contact.addEventListener("click", () => {
  // Ховаємо вміст
  // contactsSection.classList.add("hidden");
  // Показуємо контакти
  contactsSection.classList.remove("hidden-contact");
  // contact.style.visibility = "hidden";
});

contactsSection.addEventListener("click", () => {
  // contact.classList.add("hidden");
  contact.classList.remove("hidden-contact");
  contactsSection.classList.add("hidden-contact");
  // contact.style.visibility = "visible";
});
