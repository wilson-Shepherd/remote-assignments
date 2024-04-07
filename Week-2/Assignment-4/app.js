// Click to Change Text
const changeText = document.getElementById('change');
changeText.addEventListener('click', function() {
    this.innerHTML = '<strong>Have a Good Time!</strong>';
});

// Click to Show More Content Boxes
const button = document.getElementById('button');
button.addEventListener('click', function() {
    let container6 = document.querySelector('.container6');
    let container7 = document.querySelector('.container7');
    container6.style.display = 'flex';
    container7.style.display = 'flex';
});