const colors = [
    'blue',
    'red',
    'green',
    'yellow',
    'orange',
    'purple',
    'pink'
];

const heading = document.getElementById('heading');
const button = document.getElementById('colorButton');

button.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];

    heading.style.backgroundColor = randomColor;

    // Keep the heading text readable
    heading.style.color =
        randomColor === 'yellow' || randomColor === 'pink'
            ? 'black'
            : 'white';
});
