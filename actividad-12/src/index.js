import { create, Task } from "./components/task.js";
import { addTask, filterBy } from "./database/database.js";

const taskContainer = document.getElementById('task-container');
const input = document.getElementById('principal-input');
const filter = document.getElementById('folder');
const separator = document.getElementById('separator');

let counter = 0;

document.addEventListener('DOMContentLoaded', () => {
    const existingTasks = filterBy({ status: 'progress' });
    console.log(existingTasks);
    if (existingTasks.length > 0) {
        counter = Math.max(...existingTasks.map(task => task.id)) + 1;
        existingTasks.forEach(task => {
            const t = create(task);
            taskContainer.appendChild(t);
        });
    }
});

function handleAddTask(key) {
    if (key === 'Enter' && filter.value === 'progress') {
        const task = new Task(counter, input.value.trim(), new Date());
        const t = create(task);
        taskContainer.insertAdjacentElement('afterbegin', t);
        counter++;
        addTask(task);
    }
}

function handleFindTask() {
    const query = input.value.trim();
    if (!query) return;
    const existingTasks = filterBy({ name: query, status: filter.value });
    console.log(existingTasks);
    taskContainer.innerHTML = '';
    if (existingTasks.length > 0) {
        counter = Math.max(...existingTasks.map(task => task.id)) + 1;
        existingTasks.forEach(task => {
            const t = create(task);
            taskContainer.appendChild(t);
        });
    }
}

const addTaskButton = document.getElementById('add-task');
const findTaskButton = document.getElementById('search-task');
addTaskButton.addEventListener('click', handleAddTask);
findTaskButton.addEventListener('click', handleFindTask)

input.addEventListener('keyup', ({ key }) => {
    if (key === 'Enter' && filter.value === 'progress') handleAddTask(key);
});

filter.addEventListener('change', () => {
    if (filter.value !== 'progress') {
        addTaskButton.style.visibility = "hidden";
        separator.style.visibility = "hidden";
    } else {
        addTaskButton.style.visibility = "visible";
        separator.style.visibility = "visible";
    }
    const filteredTasks = filterBy({ status: filter.value });
    taskContainer.innerHTML = '';

    filteredTasks.forEach(task => {
        const t = create(task);
        taskContainer.appendChild(t);
    });
});