let tasks = [];
let currentEditIndex = null;

document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const taskName = document.getElementById('task-name').value;
    const taskDescription = document.getElementById('task-description').value;

    if (currentEditIndex !== null) {
        // 编辑任务
        editTask(currentEditIndex, taskName, taskDescription);
        currentEditIndex = null;
    } else {
        // 添加任务
        addTask(taskName, taskDescription);
    }

    document.getElementById('task-form').reset();
});

// 添加任务到后端
function addTask(taskName, taskDescription) {
    fetch('/api/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: taskName,
            description: taskDescription,
            completed: false,
        }),
    })
    .then(response => response.json())
    .then(data => {
        tasks.push(data);
        renderTasks();
    })
    .catch(error => console.error('Error:', error));
}

// 渲染任务列表
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

// 切换任务完成状态
function toggleComplete(index) {
    const taskId = tasks[index].id;
    fetch(`/api/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: !tasks[index].completed }),
    })
    .then(response => response.json())
    .then(updatedTask => {
        tasks[index] = updatedTask;
        renderTasks();
    });
}

// 编辑任务
function editTask(index) {
    const task = tasks[index];
    document.getElementById('task-name').value = task.name;
