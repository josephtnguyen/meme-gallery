var imageUrls = [];

var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');
var gallery = document.querySelector('main');

addImageButton.addEventListener('click', function () {
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value);
    imageUrlInput.value = '';
    updateGallery();
  }
});

function updateGallery() {
  gallery.innerHTML = '';
  for (var i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.classList.add('gallery-image');
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
};
