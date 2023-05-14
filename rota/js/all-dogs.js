const api_key = 'live_Ph71UcJvRGiHrKl6JzAw2QkFXK0wWpcibWqyjOoBxQ6bCEDYf7JJtGTF7gpsL425';
let page = 0;
let url = `https://api.thedogapi.com/v1/images/search?limit=10&page=${page}&api_key=${api_key}`;

const cardContainer = document.querySelector('.card-container-all');
const loadMoreBtn = document.querySelector('.load-more');

function loadCards() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('card-all');
                card.dataset.breedId = item.breeds[0].id;

                const img = document.createElement('img');
                img.src = item.url;

                const name = document.createElement('h2');
                name.textContent = item.breeds[0].name;

                card.appendChild(img);
                card.appendChild(name);

                cardContainer.appendChild(card);

                card.addEventListener('click', () => {
                    const breedId = card.dataset.breedId;
                    loadBreedInfo(breedId);
                });
            });

            page++;
            url = `https://api.thedogapi.com/v1/images/search?limit=10&page=${page}&api_key=${api_key}`;
        })
        .catch(error => {
            console.error(error);
        });
}

function loadBreedInfo(breedId) {
    const breedUrl = `https://api.thedogapi.com/v1/breeds/${breedId}?api_key=${api_key}`;
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breedCard = document.createElement('div');
            breedCard.classList.add('card-all');

            const name = document.createElement('h2');
            name.textContent = data.name;

            const bredFor = document.createElement('p');
            bredFor.textContent = `Bred for: ${data.bred_for}`;

            const lifeSpan = document.createElement('p');
            lifeSpan.textContent = `Life span: ${data.life_span}`;

            const temperament = document.createElement('p');
            temperament.textContent = `Temperament: ${data.temperament}`;

            breedCard.appendChild(name);
            breedCard.appendChild(bredFor);
            breedCard.appendChild(lifeSpan);
            breedCard.appendChild(temperament);

            const modal = document.createElement('div');
            modal.classList.add('modal');

            const modalContent = document.createElement('div');
            modalContent.classList.add('modal-content');

            const closeBtn = document.createElement('span');
            closeBtn.classList.add('close');
            closeBtn.innerHTML = '&times;';
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });

            modalContent.appendChild(closeBtn);
            modalContent.appendChild(breedCard);
            modal.appendChild(modalContent);
            document.body.appendChild(modal);
        })
        .catch(error => {
            console.error(error);
        });
}
loadMoreBtn.addEventListener('click', loadCards);