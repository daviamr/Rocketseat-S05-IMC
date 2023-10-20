const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const submitBtn = document.getElementById('submit');
//
const setError = document.getElementById('errorWrapper');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const IMC = document.getElementById('total');

//events
submitBtn.addEventListener('click', result);

closeModal.addEventListener('click', () => {
    hideHandler(modal, 'hide');
});

window.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
        if (modal.classList.length <= 0) {
            hideHandler(modal, 'hide');
        }
    }
})

//functions
function hideHandler(tag, classe) {
    tag.classList.toggle(`${classe}`);
}

function buttonHandler(content, opacity) {
    submitBtn.innerHTML = `${content}`;
    submitBtn.style.opacity = `${opacity}`;
}

function calcIMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2);
}

function result(e) {
    e.preventDefault();

    const weight = weightInput.value;
    const height = heightInput.value;

    if (!weight || !height) {

        hideHandler(setError, 'sError');

        setTimeout(() => {
            hideHandler(setError, 'sError');
        }, 2000);
    } else {

        buttonHandler(`<img class='loading_animation' src='./assets/img/loading.svg'>`, '.5');
        submitBtn.setAttribute('disabled', '1')

        setTimeout(() => {
            const total = calcIMC(weight, height);

            IMC.innerText = `${total}`
            hideHandler(modal, 'hide');

            buttonHandler('Calcular IMC', '1')
            submitBtn.removeAttribute('disabled');

            weightInput.value = ``;
            heightInput.value = ``;
        }, 2000)
    }

}