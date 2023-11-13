document.addEventListener('DOMContentLoaded', function (){
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const pendingList = document.getElementById('pendingList');
    const completedList = document.getElementById('completedList');

    
    taskForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o comportamento padrão do formulário

        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = ''; // Limpa o campo de entrada
        }
    });

    function addTask(taskText) {
        // Cria um novo item de lista
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="remove-btn">Remover</button>
        `;

        //Marcar a tarefa como concluída
        listItem.addEventListener('click', function () {
            toggleTaskStatus(listItem);
        });

        // Remover a tarefa
        const removeBtn = listItem.querySelector('.remove-btn');
        removeBtn.addEventListener('click', function () {
            removeTask(listItem);
        });

        // Adiciona na lista de tarefas pendentes
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



