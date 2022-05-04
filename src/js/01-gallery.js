import { galleryItems } from './gallery-items.js';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createListImages(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createListImages(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <li style="list-style: none"> 
    <a class="gallery__item" href="${original}">
        <img
            style="display:block" 
            class="gallery__image"
            src="${preview}" 
            alt="${description}"
        />
    </a>
  </li>
    `;
    })
    .join('');
}
new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
