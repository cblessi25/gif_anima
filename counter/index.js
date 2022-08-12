const displayer = document.querySelector('.fruit__counter');
const start = document.querySelector('#start');
const pauseCounter = document.querySelector('#stop');
const resetCounter = document.querySelector('#reset');
const fruit = document.querySelector('.fruit__img');
const saveEl = document.querySelector('.save-el');
const saveBtn = document.querySelector('#save-btn');
let fruits = 0;

const fruitCount = () => {
    fruits++;

    displayer.innerHTML = `Total fruits: ${fruits}`;

}

saveBtn.onclick = () => {
    save();
}

const save = () => {
    let previous = `${fruits} -`;
    saveEl.innerHTML += `  ${previous}`;

}


const resetCount = () => {
    displayer.innerHTML = `fruits:${0}`;
    fruits = 0;

}

document.addEventListener('DOMContentLoaded', () => {

        (start.onclick) = () => {

            fruit.style.opacity = 1;

            const timer = setInterval(fruitCount, 750);

            pauseCounter.onclick = () => {
                    fruit.style.opacity = .03;
                    clearInterval(timer);
                }
                // if (resetCounter.onclick) {
                //     clearInterval(timer);
                //     resetCount();

            resetCounter.onclick = () => {

                clearInterval(timer);
                resetCount();
            }




        };

    }


)