const button = document.getElementById('colorButton');

button.addEventListener('click', () => {
  const gradients = [
    'linear-gradient(to right, #ff7e5f, #feb47b)',
    'linear-gradient(to right, #00c6ff, #0072ff)',
    'linear-gradient(to right, #f7971e, #ffd200)',
    'linear-gradient(to right, #654ea3, #eaafc8)'
  ];

  // Pick a random gradient
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

  // Apply it to the body
  document.body.style.background = randomGradient;
});
