// import './style.css';

const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch('http://localhost:8888/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.get('name'),
      }),
    });

    const { text } = await response.json();

    const result = document.querySelector('#showResult');
    result.innerHTML = text;
});