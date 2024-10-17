// Fungsi untuk menambah tugas
function addTodo() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Masukin text woii'); 
        return;
    }

    const todoList = document.getElementById('todo-list');

    
    const listItem = document.createElement('li');

    
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;


    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.onclick = () => editTask(listItem, taskSpan);


    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = () => todoList.removeChild(listItem); // Fungsi untuk menghapus elemen <li>

 
    listItem.appendChild(taskSpan);
    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);

    // Menambahkan <li> baru ke dalam daftar <ul>
    todoList.appendChild(listItem);

    // Kosongkan input setelah menambah tugas
    input.value = '';
}

// Fungsi untuk mengedit tugas
function editTask(listItem, taskSpan) {
    const newTask = prompt('Edit Tulisan Kamu:', taskSpan.textContent); // Tampilkan prompt untuk mengedit tugas

    if (newTask && newTask.trim() !== '') {
        taskSpan.textContent = newTask.trim(); // Update teks tugas dengan yang baru
    }
}
