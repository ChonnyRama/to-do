const render = function() {
    const projectContainer = document.querySelector('[data-project-container]');

    const clearElement = (element) => {
        while(element.firstChild){
            element.removeChild(element.firstChild)
        }
    }

    const renderProjects = (projects)=>{
        clearElement(projectContainer);
        projects.forEach((project)=> {
            const newProject = document.createElement("ul");
            const newProjectTitle = document.createElement("span");
            newProject.dataset.projectId = project.id;
            newProject.classList.add("project");
            newProjectTitle.innerText = project.name;
            newProject.appendChild(newProjectTitle)
            projectContainer.appendChild(newProject);
        })
    }
    return {renderProjects}
}

export const projectHandler = function() {
    const projectContainer = document.querySelector('[data-project-container]');
    const newProjectDialog = document.querySelector('[data-new-project-button]')
    const submitButton = document.querySelector('#project-name + button');
    const dialog = document.querySelector('#project-prompt');
    let selectedProjectId
    const projects = [
        {
        id: 1,
        name: "some project",
        tasks: [{
            id : "fdwafda",
            name: "test",
            description: "some desc",
            dueDate: "8/2/2024",
            complete:false,
        }]
    },{
        id: 2,
        name: "some other project",
        tasks: [{
            id : "fdwafda",
            name: "test",
            description: "some other desc",
            dueDate: "8/3/2024",
            complete:false,
        }]
    }];

    newProjectDialog.addEventListener("click", ()=> {
        dialog.showModal();
    })

    submitButton.addEventListener("click", (event) => {
        event.preventDefault()
        const projectName = document.querySelector('#project-name').value;
        if (projectName == null || projectName === '') return;
        const newProject = createProject(projectName);
        projects.push(newProject);
        dialog.close();
        document.querySelector('#project-prompt form').reset();
        render().renderProjects(projects);
    })

    projectContainer.addEventListener("click",(event)=> {
        if (event.target.tagName.toLowerCase() === 'span'){
            selectedProjectId = event.target.closest('ul');
            if (selectedProjectId) {
                const allProjects = projectContainer.querySelectorAll('ul');
                allProjects.forEach(project => project.classList.remove('selected-project'));
                selectedProjectId.classList.toggle("selected-project");
            }
        }
    })

    const createProject = (name)=>{
        return {id: Date.now().toString(),name:name, tasks: []}
    }
    

}

const todoHandler = function(projects) {
    const dialog = document.querySelector('#todo-prompt');
    const submitButton = document.querySelector('#title + button');

    newTodoDialog.addEventListener("click", ()=> {
        dialog.showModal();
    })

    submitButton.addEventListener("click", (event) => {
        event.preventDefault()
        const title = document.querySelector('#title').value;
        const desc = document.querySelector('#description').value;
        const dueDate = document.querySelector('#due-date').value;
        const priority = document.querySelector('input[name="priority"]:checked').value;
        if (title == null || title === '') return;
        const newTodo = createTodo(title,desc,dueDate,priority);
        projects.tasks.push(newTodo);
        dialog.close();
        document.querySelector('#todo-prompt form').reset();
    })

    const createTodo = (name,desc,due,prio) => {
        return {id: Date.now().toString(),name:name, description: desc,dueDate:due,priority:prio,complete:false }
    }
}