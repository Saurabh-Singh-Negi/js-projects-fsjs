const task = document.querySelector(".task-inp");
const btn_add = document.querySelector(".btn-add");
const tasks = document.querySelector(".tasks");

let arr = [];

btn_add.addEventListener("click", () => {
    let msg = task.value;
    arr.push
    console.log(arr);
    const msg_ele = document.createElement("h1");
    msg_ele.innerHTML = msg;
    tasks.append(msg_ele);
});
