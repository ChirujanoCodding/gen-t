import { Task } from "../components/task.js";

/**
 * 
 * @param {Task} task 
 */
export function addTask(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

/**
 * 
 * @param {Task} task 
 */
export function getTask(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (!tasks) return null;
    return tasks.find(t => t.id === task.id);
}

/**
 * 
 * @param {Task} task 
 */
export function deleteTask(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (!tasks) return;
    const updatedTasks = tasks.filter(t => t.id !== task.id);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

/**
 * 
 * @param {Task} task 
 */
export function updateTask(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (!tasks) return;
    const index = tasks.findIndex(t => t.id == task.id);
    if (index !== -1) {
        tasks[index] = task;
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

/**
 * 
 * @returns {Task[]} 
 */
export function getAllTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return tasks.sort((a, b) => b.date - a.date);
}

export function filterBy({ name, status }) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(t => {
        t.date = new Date(t.date);
    });

    return tasks.filter(task => {
        if (name && !task.name.includes(name)) {
            return false;
        }

        if (status && status !== 'all' && task.done !== (status === 'done')) {
            return false;
        }

        return true;
    }).sort((a, b) => {
        if (a.done && !b.done) {
            return 1;
        } else if (!a.done && b.done) {
            return -1;
        }

        return b.date - a.date;
    });
}
