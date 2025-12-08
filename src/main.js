import './style.css';

// Màu pastel cho các item
const colors = [
  'bg-pink-100', 'bg-purple-100', 'bg-yellow-100',
  'bg-green-100', 'bg-blue-100', 'bg-orange-100'
];

// Card chính
const body = document.body;
const card = document.createElement('div');
card.className = "bg-white p-6 rounded-xl shadow-2xl w-full max-w-md border-2 border-purple-300";
body.appendChild(card);

// Title gradient
const title = document.createElement('h1');
title.className = "text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500";
title.textContent = "To-Do App 🌈";
card.appendChild(title);

// Input + Button
const inputWrapper = document.createElement('div');
inputWrapper.className = "flex mb-4 gap-3";
card.appendChild(inputWrapper);

const input = document.createElement('input');
input.id = "todo-input";
input.placeholder = "Thêm việc mới...";
input.className = "flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500";
inputWrapper.appendChild(input);

const addBtn = document.createElement('button');
addBtn.id = "add-btn";
addBtn.textContent = "Thêm";
addBtn.className = "bg-purple-500 text-white px-5 py-2 rounded-lg hover:bg-purple-600 transition";
inputWrapper.appendChild(addBtn);

// List
const list = document.createElement('ul');
list.id = "todo-list";
list.className = "space-y-3";
card.appendChild(list);

// Xử lý thêm item
addBtn.addEventListener('click', () => {
  const value = input.value.trim();
  if (!value) return;

  const li = document.createElement('li');

  // Chọn màu nền ngẫu nhiên
  const color = colors[Math.floor(Math.random() * colors.length)];

  li.className = `flex justify-between items-center ${color} px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition fade-in`;
  li.innerHTML = `
    <span class="text-gray-800 font-medium">${value}</span>
    <button class="text-red-500 hover:text-red-700 font-bold px-2 py-1 rounded-lg transition">Xóa</button>
  `;
  list.appendChild(li);

  li.querySelector('button').addEventListener('click', () => li.remove());
  input.value = '';
});
