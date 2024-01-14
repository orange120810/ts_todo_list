"use strict";
var tasks = [];
function renderTasks() {
    var todoList = document.getElementById('todo-list');
    if (todoList) {
        todoList.innerHTML = '';
        tasks.forEach(function (task) {
            var li = document.createElement('li');
            li.textContent = task.text;
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = function () { return deleteTask(task.id); };
            li.appendChild(deleteButton);
            todoList.appendChild(li);
        });
    }
}
function addTask() {
    var inputElement = document.getElementById('todo-input');
    if (inputElement) {
        var taskText = inputElement.value.trim();
        if (taskText !== '') {
            var newTask = {
                id: tasks.length + 1,
                text: taskText,
            };
            tasks.push(newTask);
            renderTasks();
            inputElement.value = '';
        }
    }
}
function deleteTask(id) {
    tasks = tasks.filter(function (task) { return task.id !== id; });
    renderTasks();
}
renderTasks();
