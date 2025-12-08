const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
  const value = input.value.trim();
  if (!value) return;

  const li = document.createElement('li');
  li.className = "flex justify-between items-center bg-gray-100 px-3 py-2 rounded hover:bg-gray-200 transition";
  li.innerHTML = `
    <span>${value}</span>
    <button class="text-red-500 hover:text-red-700">Xóa</button>
  `;
  list.appendChild(li);

  li.querySelector('button').addEventListener('click', () => {
    li.remove();
  });

  input.value = '';
});