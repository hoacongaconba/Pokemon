const container= document.getElementById('container');
let baseUrl = 'https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/'; 
for (let i = 1; i <= 151; i++) {
    const newDiv = document.createElement('div');
    const parentDiv = container.appendChild(newDiv);
    const newImg = document.createElement('img');
    newImg.src = `${baseUrl}${i}.png`;
    parentDiv.appendChild(newImg); // Add the div to the container
    const newSpan = document.createElement("span");
    newSpan.innerText = `#${i}`;
    // img.alt = `Pokemon ${i}`;
    // img.classList.add('pokemon-image');
    // container.appendChild(img);// Add the image to the container
    parentDiv.appendChild(newSpan); // Add the image to the parent div
}