import { galleryItems } from "./gallery-items.js";
// Change code below this line

document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");

  function renderGallery() {
    const galleryItemsHTML = galleryItems
      .map(
        (item) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
      </li>
    `
      )
      .join("");

    gallery.innerHTML = galleryItemsHTML;

    const lightbox = new SimpleLightbox(".gallery a", {
      captionsData: "alt",
      captionPosition: "bottom",
      captionDelay: 250,
    });
  }

  renderGallery();
});
