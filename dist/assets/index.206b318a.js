(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function d(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(r){if(r.ep)return;r.ep=!0;const n=d(r);fetch(r.href,n)}})();const u=e=>document.querySelector(e).classList.toggle("active"),l=(e,o)=>{e.innerHTML=`
        <iframe 
            width="750" height="400" src="https://www.youtube.com/embed/${o}" 
            title="YouTube video player" 
            frameborder="0" allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
    `},m=e=>{const o=i.map((d,c)=>`
            <a href="#" class="item" data-id="${c}">
              <img src="https://i3.ytimg.com/vi/${d.id}/mqdefault.jpg" />
            </a>
        `);e.innerHTML=o.join("")},i=[{id:"PyMlV5_HRWk"},{id:"XCbMVbeKlCg"},{id:"Fmdb-KmlzD8"},{id:"lOthvD1rMbQ"},{id:"nXDk86lQhto"}];document.querySelector(".slider");const s=document.querySelector(".current"),f=document.querySelector(".container-videos");document.querySelector(".button-next");document.querySelector(".button-prev");let t=0;document.addEventListener("DOMContentLoaded",e=>{l(s,i[t].id),m(f)});document.addEventListener("click",e=>{if(console.log(e.target),(e.target.matches(".button-toggle")||e.target.matches(".button-toggle .material-symbols-outlined"))&&(e.preventDefault(),u(".links")),e.target.matches(".link-more")&&(e.preventDefault(),u(".submenu")),e.target.matches(".button-next")){let o=t;t=t+1<i.length?t+1:t,t!==o&&l(s,i[t].id)}if(e.target.matches(".button-prev")){let o=t;t=t-1>=0?t-1:t,t!==o&&l(s,i[t].id)}e.target.matches(".item img")&&(e.preventDefault(),t=+e.target.parentElement.getAttribute("data-id"),l(s,i[t].id))});
