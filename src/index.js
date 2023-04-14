const cards = document.querySelectorAll('.main__container__card');
const extra = document.querySelectorAll('.main__container__card__extra-customer-data');


const test0 = cards[0];
const test1 = extra[0];

console.log(test0)
console.log(test1)

cards.forEach((card, index) => {
    card.addEventListener('mouseover', () => {

        if (index || index === 0) {
            extra[index].classList.add('main__container__card__extra-customer-data--active');
        };
    })

    card.addEventListener('mouseout', () => {
        if (index || index === 0) {
            extra[index].classList.remove('main__container__card__extra-customer-data--active');
        }
    })
})
