let currectYear = new Date().getFullYear();

const ResolveAge = () => {
    let year = document.getElementById('year').value;
    let result = document.getElementById('result');
    let incorrect = document.getElementById('incorrect');

    year = parseInt(year);

    if (Number.isNaN(year)) {
        let error = new Audio('./error.wav');
        incorrect.style.display = 'block';
        result.style.display = 'none';
        incorrect.style.color = 'red';
        error.play();
    } else {
        let cor = new Audio('./cor.wav');
        let res = currectYear - year;
        result.style.display = 'block';
        incorrect.style.display = 'none';
        result.innerHTML = "Ваш возрост " + res;
        result.style.color = 'green';
        cor.play();
    }
}