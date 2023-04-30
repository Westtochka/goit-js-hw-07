import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const photoList=document.querySelector(".gallery")
// console.log(photoList)

const imgCard=createImgCards(galleryItems);
photoList.insertAdjacentHTML('beforeend', imgCard)

function createImgCards(galleryItems) {
    return galleryItems
    .map(({preview, original, description})=>{
    return `
<li class="gallery__item">
<a class="gallery__link"
href="${original}">
<img 
class="gallery__image" 
src="${preview}"
data-source="${original}"
alt="${description}" width=100%></img>
</a> 
</li>
    `
}).join("")}
console.log(imgCard)
console.log(photoList)

photoList.addEventListener('click', onGalleryClick)

function onGalleryClick(evt){
  evt.preventDefault();
  if(!evt.target.classList.contains("gallery__image")){
    return;
  }
evt.target.src=evt.target.dataset.source;

const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)
instance.show()
};

// window.addEventListener('keydown',onCloseModal)

// function onCloseModal(evt){
// if(evt.currentTarget===evt.current){
//   console.log("це воно")
//   instance.delete(show);
// }
// }

