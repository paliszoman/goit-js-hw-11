import './sass/index.scss';
import { imageGet } from './js/imageGet';
let page = 1;
let perPage = 40;
const quote = document.querySelector('.header_form-input');
const button = document.querySelector('.header_form-submit');
const gallery = document.querySelector('.gallery')
let count = 0;

button.addEventListener('click', (event) => {
    event.preventDefault();
    imageGet(quote.value,page,perPage)
        .then(response => { buildGallery(response)})
        .catch(error => { console.log(error)})
})

let buildGallery = (dataset) => {
    const markup = dataset
        .map(({webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads}) => {
            return `<div class="photo-card">
            <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="info">
            <p class="info-item">
            <b>Likes: ${likes}</b>
            </p>
            <p class="info-item">
            <b>Views: ${views}</b>
            </p>
            <p class="info-item">
            <b>Comments: ${comments}</b>
            </p>
            <p class="info-item">
            <b>Downloads: ${downloads}</b>
            </p>
            </div>
            </div>`
         })
          .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}

