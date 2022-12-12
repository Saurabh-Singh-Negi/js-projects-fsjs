const task = document.querySelector(".task-inp");
const btn_add = document.querySelector(".btn-add");
const tasks = document.querySelector(".tasks");



btn_add.addEventListener("click", () => {
    const tasks_container = document.createElement('div');
    tasks_container.classList.add('tasks-container');
    const todo_ele = document.createElement("p");
    todo_ele.innerHTML = task.value;
    tasks_container.appendChild(todo_ele);

    const delete_ele = document.createElement("button");
    delete_ele.innerText = "delete";
    delete_ele.classList.add('delete');
    tasks_container.appendChild(delete_ele);
    delete_ele.addEventListener('click', () => {
        delete_ele.parentElement.remove();
    })

    const edit_ele = document.createElement("button");  
    edit_ele.classList.add('edit');
    

    tasks.appendChild(tasks_container);
    task.value = "";
});
