// Fungsi untuk menambah tugas
function addTodo() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim(); // Mengambil nilai dari input dan menghilangkan spasi kosong

    if (taskText === '') {
        alert('Masukin text woii'); // Jika input kosong, beri peringatan
        return;
    }

    const todoList = document.getElementById('todo-list');

    // Membuat elemen <li> baru untuk tugas
    const listItem = document.createElement('li');

    // Membuat elemen <span> untuk teks tugas
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Tombol edit untuk mengedit tugas
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.onclick = () => editTask(listItem, taskSpan);

    // Tombol hapus untuk menghapus tugas
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = () => todoList.removeChild(listItem); // Fungsi untuk menghapus elemen <li>

    // Menambahkan teks dan tombol ke dalam <li>
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
