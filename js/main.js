// Mostre no console cada paragrafo do site

const p = document.querySelectorAll('p');

p.forEach((item, index) => {
    console.log(`${index} - ${item}`);
});

// Mostro o texto dos parágrafos  no console

p.forEach((item, index) => {
    console.log(`${index} - ${item.textContent}`);
});
