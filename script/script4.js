let c = 0;
let images4 = ["7", "8"];
// Функция для отображения предыдущей картинки
function previousImage3(galleryId) {
  const gallery = document.getElementById(galleryId);
  const image = gallery.querySelector('#image4');
  if (c === 0) {
    c = images4.length - 1;
  } else {
    c--;  
  }
  
  image.src = "images/" + images4[c] + ".png";
}

// Функция для отображения следующей картинки
function nextImage3(galleryId) {
  const gallery = document.getElementById(galleryId);
  const image = gallery.querySelector('#image4');
  if (c === images4.length - 1) {
    c = 0;
  } else {
    c++;
  }
  
  image.src = "images/" + images4[c] + ".png";
}