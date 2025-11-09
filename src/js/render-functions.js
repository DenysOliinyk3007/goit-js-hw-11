
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const loaderClass = document.querySelector('.loader');
const galleryClass = document.querySelector('.gallery');

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function showLoader(){
  loaderClass.classList.remove('hidden');
}

export function removeLoader(){
  loaderClass.classList.add('hidden');
}

export function clearGallery(){
    galleryClass.innerHTML = '';
  }


export function createGallery(images){
    
    galleryClass.innerHTML = images.map( (el) => `<li class="gallery-item">
      <a class="gallery-link" href="${el.largeImageURL}">
        <img
          class="gallery-image"
          src="${el.webformatURL}"
          alt="${el.tags}"
          width="360"
          height="200"
        />
      </a>
      <div class="card">
        <ul>
          <li>
            <p class="title">Likes</p>
            <p class="subtitle">${el.likes}</p>
          </li>
          <li>
            <p class="title">Views</p>
            <p class="subtitle">${el.views}</p>
          </li>
          <li>
            <p class="title">Comments</p>
            <p class="subtitle">${el.comments}</p>
          </li>
          <li>
            <p class="title">Downloads</p>
            <p class="subtitle">${el.downloads}</p>
          </li>
        </ul>
      </div>
    </li>`).join('');
    
    gallery.refresh();
  }