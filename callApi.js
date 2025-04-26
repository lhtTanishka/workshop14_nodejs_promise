import fetch from 'node-fetch';

function callAPI() {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
      if (!response.ok) {
        throw new Error('API call failed');
      }
      return response.json();
    })
    .then((data) => {
      console.log('API call successful!');
      console.log('Data received:', data);
    })
    .catch((error) => {
      console.error('API call failed:', error.message);
    });
}

callAPI();
