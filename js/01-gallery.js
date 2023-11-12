import { galleryItems } from "./gallery-items.js";
// Change code below this line

document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");

  function createGalleryItem(item) {
    const listItem = document.createElement("li");
    listItem.classList.add("gallery__item");

    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.href = item.original;

    const image = document.createElement("img");
    image.classList.add("gallery__image");
    image.src = item.preview;
    image.setAttribute("data-source", item.original);
    image.alt = item.description;

    link.appendChild(image);
    listItem.appendChild(link);
    return listItem;
  }

  function openModal(event) {
    event.preventDefault();

    if (event.target.classList.contains("gallery__image")) {
      const largeImageURL = event.target.dataset.source;

      const lightboxContent = `
                <img src="${largeImageURL}" alt="${event.target.alt}" />
            `;

      const instance = basicLightbox.create(lightboxContent);
      instance.show();
    }
  }

  function renderGallery() {
    galleryItems.forEach((item) => {
      const galleryItem = createGalleryItem(item);
      gallery.appendChild(galleryItem);
    });
  }

  gallery.addEventListener("click", openModal);
  renderGallery();
});
