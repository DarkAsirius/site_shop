let a = 0;
let images2 = ["3", "4"];

// Функция для отображения предыдущей картинки
function previousImage1(galleryId) {
  const gallery = document.getElementById(galleryId);
  const image = gallery.querySelector('#image2');
  if (a === 0) {
    a = images2.length - 1;
  } else {
    a--;  
  }
  
  image.src = "images/" + images2[a] + ".png";
}

// Функция для отображения следующей картинки
function nextImage1(galleryId) {
  const gallery = document.getElementById(galleryId);
  const image = gallery.querySelector('#image2');
  if (a === images2.length - 1) {
    a = 0;
  } else {
    a++;
  }
  
  image.src = "images/" + images2[a] + ".png";
}
