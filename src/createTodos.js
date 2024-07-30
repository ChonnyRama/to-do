import { todoItem } from "./todoItem";

const createProject = function (name) {
    const nav = document.querySelector('nav')
    const newProject = document.createElement('div');
    const createItem = document.createElement('button');
    const todoItems = [];

    newProject.classList.add('project');
    const projectNameDiv = document.createElement('div');
    projectNameDiv.textContent = name;
    const todosContainer = document.createElement('div');
    todosContainer.classList.add('todos-container');

    newProject.appendChild(projectNameDiv);
    newProject.appendChild(todosContainer)
    nav.appendChild(newProject);
    nav.appendChild(createItem);

    createItem.textContent = "Create To-Do Item";
    createItem.addEventListener('click', () => {
        todoDialogHandler((newTodoItem) => {
            todoItems.push(newTodoItem);

            while (todosContainer.firstChild) {
                todosContainer.removeChild(todosContainer.lastChild)
            }

            todoItems.forEach((item) => {
                const newTodo = document.createElement("div");
                newTodo.classList.add('project-todo');
                newTodo.textContent = item.title;
                todosContainer.appendChild(newTodo);
            });
        });
    });
};

export const projectDialogHandler = function () {
    const dialog = document.querySelector('#project-prompt');
    const submitButton = document.querySelector('#project-name + button');
    const createProjectButton = document.querySelector('.create-project');
    // const projectForm = document.querySelector("#project-prompt form");

    createProjectButton.addEventListener('click',()=>{
        dialog.showModal();
    })

    submitButton.addEventListener("click", () => {
        const projectName = document.querySelector('#project-name').value;
        createProject(projectName);
        dialog.close();
        document.querySelector('#project-prompt form').reset();
    })




}

const todoDialogHandler = (callback) => {
    const dialog = document.querySelector('#todo-prompt');
    dialog.showModal();

    const submitButton = document.querySelector("#todo-prompt>form>button")

    const newSubmitButton = submitButton.cloneNode(true);
    submitButton.parentNode.replaceChild(newSubmitButton, submitButton);
    
    newSubmitButton.addEventListener('click', (event) => {
        event.preventDefault();

        const title = document.querySelector('#title').value;
        const desc = document.querySelector('#description').value;
        const dueDate = document.querySelector('#due-date').value;
        const priority = document.querySelector('input[name="priority"]:checked').value;

        const newTodoItem = todoItem(title, desc, dueDate, priority);
        dialog.close();
        document.querySelector('#todo-prompt>form').reset();

        if (callback) {
            callback(newTodoItem);
        }
    })
}

