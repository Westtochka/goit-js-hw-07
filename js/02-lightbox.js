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

photoList.addEventListener('click', onOpenModal)
function onOpenModal(evt){
  evt.preventDefault();  
  window.addEventListener('keydown',onEscKeyPress)
  
  if(!evt.target.classList.contains("gallery__image")){
    return;
  }

const lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt',
    captionPosition:'bottom',
    animationSpeed:250});

function onEscKeyPress(evt){
  console.log(evt.code)
  if(evt.code==='Escape'){
    instance.close()
  }
}
};