import getImagesbyQuery from './js/pixabay-api';
import {showLoader, removeLoader, clearGallery, createGallery} from './js/render-functions';


import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



const btnClass = document.querySelector('.submit-btn');
const inputClass = document.querySelector('input[name = "search-text"]');



let imageData = [];

btnClass.addEventListener('click', (evt) => {
  evt.preventDefault();
  
  const query = inputClass.value.trim();
  
  if (!query){
    clearGallery();
    iziToast.error({message: 'Please enter some text!', position: 'topRight'});
    return;
  }
  
  clearGallery();
  showLoader();
  
  getImagesbyQuery(query)
    .then(images => {
      removeLoader();
      
      if (images && images.length > 0) {
        imageData = images;
        createGallery(imageData);
      }
    })
    .catch(error => {
      removeLoader();
      console.log(error);
    });
});




