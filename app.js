document.querySelector('button').addEventListener('click', () => {
    alert('Button clicked!');
});


document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get('name'));
    console.log(formData.get('email'));
    console.log(formData.get('message'));
});