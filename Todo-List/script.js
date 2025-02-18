document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');
    const taskTime = document.getElementById('taskTime');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '' || taskDate.value === '' || taskTime.value === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const taskDateTime = new Date(`${taskDate.value}T${taskTime.value}`);
    const currentDateTime = new Date();

    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${taskInput.value} - ${taskDate.value} ${taskTime.value}</span>
        <button class="complete-btn">Concluir</button>
        <button class="edit-btn">Editar</button>
        <button class="delete-btn">Excluir</button>
    `;

    if (taskDateTime < currentDateTime) {
        li.querySelector('.task-text').classList.add('overdue');
    }

    li.querySelector('.complete-btn').addEventListener('click', function() {
        li.querySelector('.task-text').classList.toggle('completed');
    });

    li.querySelector('.edit-btn').addEventListener('click', function() {
        const taskText = li.querySelector('.task-text');
        const currentText = taskText.textContent.split(' - ')[0];
        const currentDate = taskText.textContent.split(' - ')[1].split(' ')[0];
        const currentTime = taskText.textContent.split(' - ')[1].split(' ')[1];

        taskInput.value = currentText;
        taskDate.value = currentDate;
        taskTime.value = currentTime;

        taskList.removeChild(li);
    });

    li.querySelector('.delete-btn').addEventListener('click', function() {
        taskList.removeChild(li);
    });

    taskList.appendChild(li);
    taskInput.value = '';
    taskDate.value = '';
    taskTime.value = '';
});