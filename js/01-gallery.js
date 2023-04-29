import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const photoList=document.querySelector(".gallery")
console.log(photoList)

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


  const gall=galleryItems.forEach((el)=>{el.value})
  console.log(gall)

photoList.addEventListener('click', onGalleryClick)
function onGalleryClick(evt){
  if(!evt.target.classList.contains('gallery__image'))
  {return}

  console.log(evt.target.src)
  evt.target.src=evt.target.dataset.source;
  console.log(evt.target.src)
};
