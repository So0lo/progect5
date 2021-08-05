
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





