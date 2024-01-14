interface Task {
    id: number;
    text: string;
  }
  
  let tasks: Task[] = [];
  
  function renderTasks() {
    const todoList = document.getElementById('todo-list');
  
    if (todoList) {
      todoList.innerHTML = '';
  
      tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.text;
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTask(task.id);
  
        li.appendChild(deleteButton);
        todoList.appendChild(li);
      });
    }
  }
  
  function addTask() {
    const inputElement = document.getElementById('todo-input') as HTMLInputElement;
  
    if (inputElement) {
      const taskText = inputElement.value.trim();
  
      if (taskText !== '') {
        const newTask: Task = {
          id: tasks.length + 1,
          text: taskText,
        };
  
        tasks.push(newTask);
        renderTasks();
        inputElement.value = '';
      }
    }
  }
  
  function deleteTask(id: number) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
  }
  
  renderTasks();
  