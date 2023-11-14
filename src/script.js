document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const pendingList = document.getElementById('pendingList');
    const completedList = document.getElementById('completedList');

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="complete-btn">Concluir</button>
            <button class="remove-btn">Remover</button>
        `;

        const completeBtn = listItem.querySelector('.complete-btn');
        const removeBtn = listItem.querySelector('.remove-btn');

        completeBtn.addEventListener('click', function () {
            toggleTaskStatus(listItem);
        });

        removeBtn.addEventListener('click', function () {
            removeTask(listItem);
        });

        pendingList.appendChild(listItem);
    }

    function toggleTaskStatus(taskItem) {
        taskItem.classList.toggle('completed');
        const destinationList = taskItem.classList.contains('completed') ? completedList : pendingList;
        destinationList.appendChild(taskItem);
    }

    function removeTask(taskItem) {
        taskItem.remove();
    }
});
