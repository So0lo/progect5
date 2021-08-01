const list =document.getElementById(`list`);

// const listElements = [...list.children];
// const toBeDeleted = listElements.filter
// (li => li.textContent.endsWith(`1`) ||
// li.textContent.endsWith(`2`) ||
// li.textContent.endsWith(`5`));
// toBeDeleted.forEach(li => li.remove());
// console.log(listElements);

function createElem (content) {
    const elem = document.createElement(`a`);
    elem.href = `https://google.com`;
    elem.textContent = content;
    return elem;
}

const li = createElem(`item FROM JS`);
const liCopy = li.cloneNode(true);
//list.append(li);
//list.prepend(li);
//list.insertBefore(li, list.children[3]);
//list.after(li);
//list.before(li);
//list.replaceWith(li);
//list.replaceChild(li, list.children[4]);
//console.log(list.cloneNode(true));


// const card = document.getElementById(`card`);
// const a = createElem(`A tag`);
// const btn1 = card.getElementsByTagName(`button`)[0];
// const btn2 = card.children[card.children.length -1];
// const btn3 = card.querySelector(`button`);
// card.insertBefore(a, btn1);


const btn = document.getElementById(`btn`);

// btn.ondblclick = function () {
//     console.log('dbl click');
// };

// btn.oncontextmenu = function () {
//     console.log('context menu');
// };

// list.onmouseenter = function () {
//     console.log('mouse entered');
// };

// list.onclick = function () {
//     console.log('click');
// };

// list.children[2].onclick = function () {
//     console.log('children clicked');
// };

// list.onmousemove = function () {
//     console.log('mouse moves');
// };

// list.onmousedown = function () {
//     console.log('mouse down');
// };

// list.onmouseup = function () {
//     console.log('mouse up');
// };

// window.onresize = function () {
//     console.log('window resize');
// };


// const clickHandler = function () {
//     console.log(`click`);
// };
// list.addEventListener(`click`, clickHandler);
// list.addEventListener(`click`, function () {
//     console.log(`click2`);
// });
// list.removeEventListener(`click`, clickHandler);


const listItems = [...list.children];

const clickHandler = (event) => {
    console.log(event.target.textContent);
};
listItems.forEach((li) => {
    li.addEventListener(`click`, clickHandler)
});

