const task = document.querySelector(".task-inp");
const btn_add = document.querySelector(".btn-add");
const tasks = document.querySelector(".tasks");



btn_add.addEventListener("click", () => {
    if(task.value == '') {
        alert("no text entered");
        return
    }
    const tasks_container = document.createElement('div');
    tasks_container.classList.add('tasks-container');
    const todo_ele = document.createElement("p");
    todo_ele.innerHTML = task.value;
    todo_ele.classList.add('todo-ele');
    tasks_container.appendChild(todo_ele);

    const edit_ele = document.createElement("button");
    edit_ele.innerText = "edit";  
    edit_ele.classList.add('edit');
    tasks_container.appendChild(edit_ele);
    edit_ele.addEventListener('click', () => {
        let msg = todo_ele.innerText;
        task.value = msg;
        edit_ele.parentElement.remove();
    })

    const delete_ele = document.createElement("button");
    delete_ele.innerText = "delete";
    delete_ele.classList.add('delete');
    tasks_container.appendChild(delete_ele);
    delete_ele.addEventListener('click', () => {
        delete_ele.parentElement.remove();
    })

    tasks.appendChild(tasks_container);
    task.value = "";
});
