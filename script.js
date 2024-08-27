document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        
        const listItem = document.createElement('li');
        listItem.className = 'task-item';

        const taskTextNode = document.createTextNode(taskText);
        listItem.appendChild(taskTextNode);

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'deleteBtn';
        deleteBtn.innerText = 'Delete';
        deleteBtn.addEventListener('click', function() {
            deleteTask(listItem);
        });

        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);

        // Clear input
        taskInput.value = '';
    }
}

function deleteTask(taskItem) {
    taskItem.style.opacity = '0';
    setTimeout(() => {
        taskItem.remove();
    }, 300); // Wait for the transition to complete before removing
}
