
const btn = document.getElementById(`btn`);
const list = document.getElementById(`list`);
const li = document.getElementById(`btn_wrapper`);
const userName = document.getElementById(`username`);
const submit = document.getElementById(`subm`);
const form = document.getElementById(`form`);

const clickHandler = (event) => {
    if (event.target.nodeName === `LI`) {
        console.log(event.target.textContent);
    }
};

// btn.addEventListener(`click`, clickHandler);
// btn.addEventListener(`click`, function () {console.log(`second`);});
// list.addEventListener(`click`, clickHandler, true);
// li.addEventListener(`click`, clickHandler);

// stopProgaration
// stopImmediateProgaration

list.addEventListener(`click`, clickHandler);


submit.addEventListener(`click`, function (event) {
    event.preventDefault();
    if (!isNaN(userName.value)) {
        console.log(`ok`);
        form.submit();
    } else {
        console.log(`not ok`);
        userName.focus();
    }
    //userName.click();
    //userName.blur();
})



const a = document.getElementById(`google`);
const input2 = document.getElementById(`input2`);
a.addEventListener(`click`, function (event) {
    event.preventDefault();
})

input2.addEventListener(`click`, function () {
    this.blur();
})


const list2 = document.getElementById(`list2`);

// list2.addEventListener(`click`, function (event) {
//     //event.target.classList.remove(`test`);
//     // add
//     // remove
//     // toggle добавляет класс и убирает
//     //console.log(event.target.classList.contains(`test`));

//     // event.target.style.color = 'red';
//     // event.target.style.fontSize = `50px`;
//     // event.target.style.border = `2px solid orange`;
// });
// list2.addEventListener(`mousemove`, function (event) {
//     event.target.style.fontSize = `${event.clientY}px`;
// });


const chek = document.getElementById(`check`);
const test = document.getElementById(`test`);

// test.addEventListener(`click`, function () {
//     // get
//     // has
//     // set
//     console.log(check.setAttribute(`type`, `radio`));
// });

chek.addEventListener(`click`, function () {
    console.log(check.checked);
    test.disabled = !test.disabled;
});

const goods = [
    {
        name: `noski`,
        price: 2
    },
    {
        name: `trusy`,
        price: 10
    },
    {
        name: `shampoo`,
        price: 5
    },
    {
        name: `stanok`,
        price: 100
    }
];

function createElement (goodsName, price) {
    const elem = document.createElement(`li`);
    elem.textContent = goodsName;
    elem.setAttribute(`data-price`, price);
    return elem;
}

goods.forEach((tovar) => list2.append(createElement(tovar.name, tovar.price)));

list2.addEventListener(`click`, function (event) {
    console.log(event.target.dataset.price);
});

