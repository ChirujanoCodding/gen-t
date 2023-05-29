import { deleteTask, updateTask } from "../database/database.js";

// @ts-check
export class Task {
    /**
     *
     * @param {number} id
     * @param {string} name
     * @param {Date} date
     * @param {boolean} done
     */
    constructor(id, name, date, done = false) {
        this.id = id
        this.name = name
        this.date = date
        this.done = done
    }
}

const SVG_ROUTE = './icons';
const SVG = ['data.svg', 'time.svg', 'edit.svg', 'remove.svg', 'progress.svg', 'done.svg'].map(path => `${SVG_ROUTE}/${path}`);


/**
 *
 * @param {Task} task
 */
export function create(task) {
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('bordered', 'task', 'fade-in-effect');
    const nameSection = document.createElement('div');
    const timeSection = document.createElement('div');
    const infoSection = document.createElement('div');
    nameSection.classList.add('name-task-section');
    timeSection.classList.add('time-task-section');
    infoSection.classList.add('info-task-section');
    const [NAME_SVG, CLOCK_SVG, EDIT_SVG, REMOVE_SVG, PROGRESS_SVG, DONE_SVG] = SVG.map(svg => {
        let img = document.createElement('img'); img.src = svg;
        return img
    });
    const [editButton, removeButton] = [EDIT_SVG, REMOVE_SVG].map(svg => {
        let button = document.createElement('button');
        button.classList.add('btn', 'bg-transparent');
        button.appendChild(svg);
        return button
    });
    const nameTaskInput = document.createElement('input');
    const timeTaskParagraph = document.createElement('p');
    nameTaskInput.id = `input-${task.id}`;
    nameTaskInput.classList.add('input-task');
    nameTaskInput.readOnly = true;
    nameTaskInput.value = task.name;
    timeTaskParagraph.innerText = formatTime(task.date);
    timeTaskParagraph.classList.add('input-time');
    timeTaskParagraph.id = `time-${task.id}`;
    nameSection.appendChild(NAME_SVG);
    nameSection.appendChild(nameTaskInput);
    timeSection.appendChild(CLOCK_SVG);
    timeSection.appendChild(timeTaskParagraph);
    infoSection.appendChild(task.done ? DONE_SVG : PROGRESS_SVG);
    infoSection.appendChild(editButton);
    infoSection.appendChild(removeButton);
    taskContainer.appendChild(nameSection);
    taskContainer.appendChild(timeSection);
    taskContainer.appendChild(infoSection);

    removeButton.addEventListener('click', () => {
        taskContainer.classList.add('fade-out-effect');
        setTimeout(() => {
            taskContainer.remove();
            if (task.done) {
                deleteTask(task)
            } else {
                task.done = true;
                updateTask(task);
            }
        }, 1000);
    })

    nameTaskInput.addEventListener('keyup', ({ key }) => {
        if (key === 'Enter') {
            nameTaskInput.readOnly = true;
            task.name = nameTaskInput.value;
            updateTask(task)

        }
    })

    editButton.addEventListener('click', () => {
        nameTaskInput.readOnly = !nameTaskInput.readOnly;
        if (nameTaskInput.readOnly) {
            task.name = nameTaskInput.value;
            updateTask(task)
        }
    })

    return taskContainer
}

const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function formatTime(date) {
    if (typeof date === 'string') { date = new Date(date) }

    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    const dayOfWeek = DAYS_OF_WEEK[date.getDay()];
    const day = date.getDate();
    const month = MONTHS[date.getMonth()];

    const formattedTime = `${hour}:${minute} ${dayOfWeek} ${day} ${month}`;

    return formattedTime;
}
