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

const lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt',
    captionPosition:'bottom',
    animationSpeed:250});

