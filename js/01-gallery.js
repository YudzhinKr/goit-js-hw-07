import { galleryItems } from "./gallery-items.js";

document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");

  function createGalleryItem(arr) {
    return arr
      .map(
        ({ preview, original, description }) => `
          <li class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </li>
        `
      )
      .join("");
  }

  function openModal(event) {
    event.preventDefault();

    if (event.target.nodeName === "IMG") {
      const largeImageURL = event.target.dataset.source;

      const lightboxContent = `
      <img src="${largeImageURL}" alt="${event.target.alt}" />
    `;

      const instance = basicLightbox.create(lightboxContent);
      instance.show();
    }
  }

  function renderGallery() {
    gallery.innerHTML = createGalleryItem(galleryItems);
  }

  gallery.addEventListener("click", openModal);
  renderGallery();
});
