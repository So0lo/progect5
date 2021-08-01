const list =document.getElementById(`list`);

// const listElements = [...list.children];
// const toBeDeleted = listElements.filter
// (li => li.textContent.endsWith(`1`) ||
// li.textContent.endsWith(`2`) ||
// li.textContent.endsWith(`5`));
// toBeDeleted.forEach(li => li.remove());
// console.log(listElements);

function createElem (content) {
    const elem = document.createElement(`li`);
    elem.textContent = content;
    return elem;
}

const li = createElem(`item FROM JS`);
//list.append(li);
//list.prepend(li);
//list.insertBefore(li, list.children[3]);
//list.after(li);
list.before(li);
