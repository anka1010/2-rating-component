// http://127.0.0.1:5500/thank-you-state.html?rating=3
// http://127.0.0.1:5500/thank-you-state.html?rating=2

const rating = new URLSearchParams(window.location.search).get('rating');

document.querySelector('#rating').textContent = rating;
