import { galleryItems } from "./gallery-items.js";

const ulRef = document.querySelector(".js-gallery");
const modalRef = document.querySelector(".js-lightbox");
const backdropRef = document.querySelector(".lightbox__overlay");
const imageRef = document.querySelector(".lightbox__image");

const closeBtn = document.querySelector('[data-action="close-lightbox"]');

const cartMarkup = createPictureCartMarkup(galleryItems);
ulRef.insertAdjacentHTML("beforeend", cartMarkup);

ulRef.addEventListener("click", onPictureClick);
closeBtn.addEventListener("click", onCloseBtnClick);
modalRef.addEventListener("click", onBackdropClick);

function createPictureCartMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
    `;
    })
    .join("");
}

function onPictureClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  window.addEventListener("keydown", onEscBtnPress);
  modalRef.classList.add("is-open");
  imageRef.src = event.target.dataset.source;
}

function onCloseBtnClick() {
  modalRef.classList.remove("is-open");
  window.removeEventListener("keydown", onEscBtnPress);
  imageRef.src = "";
}

function onBackdropClick(event) {
  if (backdropRef === event.target) {
    onCloseBtnClick();
  }
}

function onEscBtnPress(event) {
  if (event.code === "Escape") {
    onCloseBtnClick();
  }
}
