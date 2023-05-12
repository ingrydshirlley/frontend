function addDogCard(parentElement) {
    const endpoint = 'https://api.thedogapi.com/v1/images/search';
    const apiKey = 'live_Ph71UcJvRGiHrKl6JzAw2QkFXK0wWpcibWqyjOoBxQ6bCEDYf7JJtGTF7gpsL425';

    fetch(endpoint, {
        headers: {
            'x-api-key': apiKey,
        },
    })
        .then(response => response.json())
        .then(data => {
            const name = data[0].breeds[0].name;
            const image = data[0].url;
            const description = data[0].breeds[0].bred_for;

            const card = document.createElement('div');
            card.classList.add('card');

            const imageElement = document.createElement('img');
            imageElement.setAttribute('src', image);
            card.appendChild(imageElement);

            const nameElement = document.createElement('span');
            nameElement.innerText = name.toUpperCase();
            card.appendChild(nameElement);

            const descriptionElement = document.createElement('span');
            descriptionElement.innerText = description ? description : "";
            card.appendChild(descriptionElement);
            descriptionElement.classList.add('descriptionElement');

            parentElement.appendChild(card);
        })
        .catch(error => console.log(error));
}

document.addEventListener('DOMContentLoaded', () => {
    addDogCard(document.getElementById('container-card'));
    addDogCard(document.getElementById('container-card'));
    addDogCard(document.getElementById('container-card'));
});