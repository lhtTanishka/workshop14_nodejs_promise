import fetch from 'node-fetch';  

function getRandomDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Success! Random Dog Image URL:', data.message);
    })
    .catch((error) => {
      console.error('Failed to fetch dog image:', error.message);
    });
}

getRandomDogImage();
