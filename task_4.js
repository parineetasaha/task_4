
// To-Do List Logic
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        const btn = document.createElement('button');
        btn.textContent = "❌";
        btn.onclick = () => { deleteTask(index); };
        li.appendChild(btn);
        taskList.appendChild(li);
    });
}

function addTask() {
    const task = taskInput.value.trim();
    if (task) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = '';
        loadTasks();
    }
}

function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
}

window.onload = loadTasks;

// Product Listing Logic
const products = [
    { name: "Laptop", category: "electronics", price: 500 },
    { name: "T-Shirt", category: "clothing", price: 20 },
    { name: "Headphones", category: "electronics", price: 80 },
    { name: "Jeans", category: "clothing", price: 40 },
    { name: "Operating System", category: "book", price: 50 },
    { name: "Full-Stack Development", category: "book", price: 30 },
    { name: "Smart-Watch", category: "electronics", price: 50 },
    { name: "Database", category: "book", price: 40 }
];

function filterAndSortProducts() {
    const category = document.getElementById('categoryFilter').value;
    const sort = document.getElementById('sortPrice').value;
    let filtered = [...products];

    if (category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
    }

    if (sort === 'low-high') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'high-low') {
        filtered.sort((a, b) => b.price - a.price);
    }

    const container = document.getElementById('productContainer');
    container.innerHTML = '';
    filtered.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `<strong>${product.name}</strong><br>Category: ${product.category}<br>Price: $${product.price}`;
        container.appendChild(div);
    });
}

filterAndSortProducts();
