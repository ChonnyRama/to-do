

const render = function () {
    const projectContainer = document.querySelector('[data-project-container]');
    const todoDisplay = document.querySelector('[data-project-todo-container]')
    const todoTemplate = document.getElementById('todo-template');
    const projectTodoTemplate = document.getElementById('project-todo-template');
    
    const clearElement = (element) => {
        while (element.firstChild) {
            element.removeChild(element.firstChild)
        }
    }

    const renderProjects = (projects) => {
        clearElement(projectContainer);
        projects.forEach((project) => {
            const newProject = document.createElement("ul");
            const newProjectTitle = document.createElement("span");
            newProject.dataset.projectId = project.id;
            newProject.classList.add("project");
            newProjectTitle.innerText = project.name;
            newProject.appendChild(newProjectTitle)

            project.tasks.forEach(task => {
                const todoElement = document.importNode(projectTodoTemplate.content, true);
                const checkBox = todoElement.querySelector("input");
                const label = todoElement.querySelector("label");
                checkBox.id = `project-${task.id}`
                checkBox.htmlFor = checkBox.id
                label.append(task.name)
                checkBox.addEventListener('change', (event) => {
                    checkStyling(event, label, task);
                    syncCheckboxes(task.id,event.target.checked)
                })
                newProject.appendChild(todoElement);
            })


            projectContainer.appendChild(newProject);
        })
    }

    const renderTodos = (projects, currentProjectId) => {
        clearElement(todoDisplay);
        const currentProject = projects.find(project => project.id === currentProjectId);
        const projectTitle = document.createElement('div');
        projectTitle.classList.add('todo-title');
        projectTitle.innerText = currentProject.name
        todoDisplay.appendChild(projectTitle)
        const todoContainer = document.querySelector('.todo-container')

        currentProject.tasks.forEach(task => {
            const todoElement = document.importNode(todoTemplate.content, true);
            const checkBox = todoElement.querySelector("input");
            const label = todoElement.querySelector("label");
            checkBox.id = `todo-${task.id}`
            checkBox.htmlFor = checkBox.id
            label.append(task.name)
            const details = todoElement.querySelector(".todo-details");
            const due = todoElement.querySelector(".todo-due")
            const description = todoElement.querySelector(".todo-description");
            const priority = todoElement.querySelector(".todo-priority");
            due.innerText = task.dueDate
            description.innerText = task.description
            priority.innerText = task.priority
            checkBox.checked = task.complete
            checkBox.addEventListener('change', (event) => {
                checkStyling(event, label, task)
                syncCheckboxes(task.id,event.target.checked)
            })
            todoDisplay.appendChild(todoElement);
        })


    }

    const checkStyling = (event, label, currentTask) => {
        if (event.target.checked) {
            label.style.textDecoration = 'line-through'
        } else {
            label.style.textDecoration = 'none';
        }
        currentTask.complete = event.target.checked;
    }

    const syncCheckboxes = (taskId, isChecked) => {
        // Sync the checkbox and styling in the project list
        const projectCheckbox = document.getElementById(`project-${taskId}`);
        const projectLabel = projectCheckbox ? projectCheckbox.closest('label') : null;
        if (projectCheckbox) {
            projectCheckbox.checked = isChecked;
            if (projectLabel) {
                projectLabel.style.textDecoration = isChecked ? 'line-through' : 'none';
            }
        }

        // Sync the checkbox and styling in the todo display
        const todoCheckbox = document.getElementById(`todo-${taskId}`);
        const todoLabel = todoCheckbox ? todoCheckbox.closest('label') : null;
        if (todoCheckbox) {
            todoCheckbox.checked = isChecked;
            if (todoLabel) {
                todoLabel.style.textDecoration = isChecked ? 'line-through' : 'none';
            }
        }
    };

    return { renderProjects, renderTodos }
}

export const projectHandler = function () {
    const projectContainer = document.querySelector('[data-project-container]');
    const newProjectDialog = document.querySelector('[data-new-project-button]')
    const projectSubmit = document.querySelector('#project-name + button');
    const projectDialog = document.querySelector('#project-prompt');
    let selectedProjectId
    const todoDialog = document.querySelector('#todo-prompt');
    const newTodoButton = document.querySelector('[data-new-todo-button]');
    const todoSubmit = document.querySelector('[data-submit-todo]');
    const todoDelete = document.querySelector('[data-delete-todo-button]');
    const LOCAL_STORAGE_PROJECTS_KEY = 'projects.lists'

    const projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || [];
    render().renderProjects(projects)
    newProjectDialog.addEventListener("click", () => {
        projectDialog.showModal();
    })

    projectSubmit.addEventListener("click", (event) => {
        event.preventDefault()
        const projectName = document.querySelector('#project-name').value;
        if (projectName == null || projectName === '') return;
        const newProject = createProject(projectName);
        projects.push(newProject);
        projectDialog.close();
        document.querySelector('#project-prompt form').reset();
        save();
        render().renderProjects(projects);
    })

    projectContainer.addEventListener("click", (event) => {
        if (event.target.tagName.toLowerCase() === 'span') {
            let selectedElement = event.target.closest('ul');
            if (selectedElement) {
                const allProjects = projectContainer.querySelectorAll('ul');
                allProjects.forEach(project => project.classList.remove('selected-project'));
                selectedElement.classList.toggle("selected-project");
                selectedProjectId = selectedElement.dataset.projectId;
            }
        }
        render().renderTodos(projects, selectedProjectId);
        
    })

    const createProject = (name) => {
        return { id: Date.now().toString(), name: name, tasks: [] }
    };

    newTodoButton.addEventListener("click", () => {
        todoDialog.showModal();
    })

    todoSubmit.addEventListener("click", (event) => {
        todoHandler().submitNewTodo(event, projects, selectedProjectId);
        save();
        render().renderTodos(projects, selectedProjectId);
        render().renderProjects(projects);
    })

    todoDelete.addEventListener("click", (event) => {
        const currentProject = projects.find(project => project.id === selectedProjectId);
        if (currentProject.tasks){
            currentProject.tasks.splice(0,1);
        }
        save();
        render().renderTodos(projects, selectedProjectId);
        render().renderProjects(projects);
    })

    const save = () => {
        localStorage.setItem(LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(projects))
    }


}

const todoHandler = function () {
    const projectDialog = document.querySelector('#todo-prompt');

    const submitNewTodo = (event, projects, currentProjectId) => {
        event.preventDefault()
        const title = document.querySelector('#title').value;
        const desc = document.querySelector('#description').value;
        const dueDate = document.querySelector('#due-date').value;
        const priority = document.querySelector('input[name="priority"]:checked').value;
        if (title == null || title === '') return;
        const newTodo = createTodo(title, desc, dueDate, priority);
        const currentProject = projects.find(project => project.id === currentProjectId);
        if (currentProject) {
            currentProject.tasks.push(newTodo);
        }
        projectDialog.close();
        document.querySelector('#todo-prompt form').reset();
    };

    const createTodo = (name, desc, due, prio) => {
        return { id: Date.now().toString(), name: name, description: desc, dueDate: due, priority: prio, complete: false }
    }

    return { submitNewTodo }
}

// {
//     id: '1',
//     name: "some project",
//     tasks: [{
//         id: "fdwafda",
//         name: "test",
//         description: "some desc",
//         dueDate: "8/2/2024",
//         priority: 'high',
//         complete: false,
//     }]
// }, {
//     id: '2',
//     name: "some other project",
//     tasks: [{
//         id: "fdwafda",
//         name: "test",
//         description: "some other desc",
//         dueDate: "8/3/2024",
//         priority: 'high',
//         complete: false,
//     }]
// }