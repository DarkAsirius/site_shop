/*СКРИПТ ДЛЯ ЗВЕЗДОЧЕК В ОТЗЫВЕ */                                      
function selectRating(rating) {
    selectedRating = rating;
    highlightStars(rating);
  }

  function highlightStars(rating) {
    const stars = document.getElementsByClassName('star');
    for (let i = 0; i < stars.length; i++) {
      if (i < rating) {
        stars[i].style.color = 'gold'; // Закрашиваем звезды, которые выбраны
      } else {
        stars[i].style.color = 'gray'; // Оставшиеся звезды оставляем серыми
      }
    }
  }

  /*СКРИПТ ДЛЯ ЗВЕЗДОЧЕК В ОТЗЫВЕ */                                      
function selectRating2(rating2) {
  selectedRating2 = rating2;
  highlightStars2(rating2);
}

function highlightStars2(rating2) {
  const stars2 = document.getElementsByClassName('star1');
  for (let i = 0; i < stars2.length; i++) {
    if (i < rating2) {
      stars2[i].style.color = 'gold'; // Закрашиваем звезды, которые выбраны
    } else {
      stars2[i].style.color = 'gray'; // Оставшиеся звезды оставляем серыми
    }
  }
}

/*СКРИПТ ДЛЯ ЗВЕЗДОЧЕК В ОТЗЫВЕ */                                      
function selectRating3(rating3) {
  selectedRating3 = rating3;
  highlightStars3(rating3);
}

function highlightStars3(rating3) {
  const stars3 = document.getElementsByClassName('star2');
  for (let i = 0; i < stars3.length; i++) {
    if (i < rating3) {
      stars3[i].style.color = 'gold'; // Закрашиваем звезды, которые выбраны
    } else {
      stars3[i].style.color = 'gray'; // Оставшиеся звезды оставляем серыми
    }
  }
}
