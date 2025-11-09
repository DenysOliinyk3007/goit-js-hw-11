
import axios from 'axios'
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const API_KEY = '53125865-ed9f58673896f3ad0b9dfa3df';

export default function getImagesbyQuery (query){
    let searchParams = new URLSearchParams({
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true
    });
    
    return axios({
      method: 'get',
      url: 'https://pixabay.com/api/?' + searchParams
    })
    .then(response => {
      if (response.data.hits.length !== 0){
        return response.data.hits;
      } else{
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!', 
          position: 'topRight'
        });
        return [];
      }
    })
    .catch(error => {
      console.log(error);
      iziToast.error({
        message: 'Failed to fetch images!', 
        position: 'topRight'
      });
      return [];
    });
  }