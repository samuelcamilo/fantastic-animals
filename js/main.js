// Retorne no console todas as imagens do site.

const allImages = document.querySelectorAll('img');

allImages.forEach(function(value, index){
    console.log(`All Imagens - Item: ${value}, index: ${index+1}`);
});

// Retorne no console apenas as imagens que começarem com a palavra
// imagem.

const animalImages = document.querySelectorAll('img[src^="./img/imagem"]');

animalImages.forEach(function(value, index) {
    console.log(`Animal Imagens - Item: ${value}, index: ${index+1}`);
});

// Selecione todos os links internos (onde href começa com #).

const allLinks = document.querySelectorAll('[href^="#"]');

allLinks.forEach(function(value, index) {
    console.log(`All Links - Item: ${value.textContent}, index: ${index+1}`);
});

// Selecione o primeiro h2 dentro de animals-description.

const firstH2 = document.querySelectorAll('.animals-description h2');

console.log(`The first one h2: ${firstH2[0].innerHTML}`);

// Selecione o ultimo p do site.

const lastP = document.querySelectorAll('footer p');

console.log(`The last P: ${lastP[0].innerHTML}`);
