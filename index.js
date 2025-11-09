import{a as m,i as o,S as f}from"./assets/vendor-BkVuWn-o.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const g="53125865-ed9f58673896f3ad0b9dfa3df";function h(i){let e=new URLSearchParams({key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return m({method:"get",url:"https://pixabay.com/api/?"+e}).then(r=>r.data.hits.length!==0?r.data.hits:(o.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),[])).catch(r=>(console.log(r),o.error({message:"Failed to fetch images!",position:"topRight"}),[]))}const d=document.querySelector(".loader"),p=document.querySelector(".gallery");let y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function L(){d.classList.remove("hidden")}function l(){d.classList.add("hidden")}function c(){p.innerHTML=""}function b(i){p.innerHTML=i.map(e=>`<li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.webformatURL}"
          alt="${e.tags}"
          width="360"
          height="200"
        />
      </a>
      <div class="card">
        <ul>
          <li>
            <p class="title">Likes</p>
            <p class="subtitle">${e.likes}</p>
          </li>
          <li>
            <p class="title">Views</p>
            <p class="subtitle">${e.views}</p>
          </li>
          <li>
            <p class="title">Comments</p>
            <p class="subtitle">${e.comments}</p>
          </li>
          <li>
            <p class="title">Downloads</p>
            <p class="subtitle">${e.downloads}</p>
          </li>
        </ul>
      </div>
    </li>`).join(""),y.refresh()}l();const v=document.querySelector(".submit-btn"),w=document.querySelector('input[name = "search-text"]');let u=[];v.addEventListener("click",i=>{i.preventDefault();const e=w.value.trim();if(!e){c(),o.error({message:"Please enter some text!",position:"topRight"});return}c(),L(),h(e).then(r=>{l(),r&&r.length>0&&(u=r,b(u))}).catch(r=>{l(),console.log(r)})});
//# sourceMappingURL=index.js.map
