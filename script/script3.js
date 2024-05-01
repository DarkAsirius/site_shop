let b = 0;
let images3 = ["5", "6"];
// Функция для отображения предыдущей картинки
function previousImage2(galleryId) {
  const gallery = document.getElementById(galleryId);
  const image = gallery.querySelector('#image3');
  if (b === 0) {
    b = images3.length - 1;
  } else {
    b--;  
  }
  
  image.src = "images/" + images3[b] + ".png";
}

// Функция для отображения следующей картинки
function nextImage2(galleryId) {
  const gallery = document.getElementById(galleryId);
  const image = gallery.querySelector('#image3');
  if (b === images3.length - 1) {
    b = 0;
  } else {
    b++;
  }
  
  image.src = "images/" + images3[b] + ".png";
}

