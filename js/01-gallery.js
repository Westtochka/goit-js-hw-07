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
// evt.target.src=evt.target.dataset.source;
const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`, 
{
  onShow: instance=>{
    window.addEventListener('keydown',onEscKeyPress)
    
  },
  onClose: instance=>{
    window.removeEventListener('keydown',onEscKeyPress)
  }
})
instance.show()
function onEscKeyPress(evt){
  console.log(evt.code)
  if(evt.code==='Escape'){
    instance.close()
  }
}
};



// function onCloseModal(evt){
//   window.removeEventListener('keydown',onEscKeyPress)
// if(evt.currentTarget===evt.current){
//   instance.delete(show);
// }
// }


