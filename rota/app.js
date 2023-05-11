

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keypress', async (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // evitar que a página recarregue
        const breedName = searchInput.value.toLowerCase();
        const breedData = await fetchBreedData(breedName);
        displayBreedData(breedData);
    }
});

async function fetchBreedData(breedName) {
    const response = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${breedName}`);
    const data = await response.json();
    if (data.length > 0) {
        return data[0];
    } else {
        return 'tontonaotem';
    }
}

function displayBreedData(breedData) {
    console.log(breedData); // ou faça algo mais interessante aqui
}