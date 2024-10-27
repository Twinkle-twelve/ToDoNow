let tasks = [];
let currentEditIndex = null;

document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const taskName = document.getElementById('task-name').value;
    const taskDescription = document.getElementById('task-description').value;

    if (currentEditIndex !== null) {
        // 编辑任务
        tasks[currentEditIndex] = { name: taskName, description: taskDescription, completed: false };
        currentEditIndex = null;
    } else {
        // 添加任务
        tasks.push({ name: taskName, description: taskDescription, completed: false });
    }

    document.getElementById('task-form').reset();
    renderTasks();
});

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';

        li.innerHTML = `
            <span>${task.name}: ${task.description}</span>
            <div>
                <button onclick="toggleComplete(${index})">${task.completed ? '未完成' : '完成'}</button>
                <button onclick="editTask(${index})">编辑</button>
                <button onclick="deleteTask(${index})">删除</button>
            </div>
        `;

        taskList.appendChild(li);
    });
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function editTask(index) {
    const task = tasks[index];
    document.getElementById('task-name').value = task.name;
    document.getElementById('task-description').value = task.description;
    currentEditIndex = index;
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
