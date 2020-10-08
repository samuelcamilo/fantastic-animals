// Retorne no console todas as imagens do site

const animalImages = document.querySelectorAll('.animals-list li');

animalImages.forEach(function(value, index){
    console.log(`Item: ${value}, index: ${index}`);
});
