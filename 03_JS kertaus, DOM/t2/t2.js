// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const ul = document.querySelector('.todo');

todoList.forEach(function (task) {
  const li = document.createElement('li');
  const input = document.createElement('input');
  const label = document.createElement('label');

  input.type = 'checkbox';
  input.id = `todo-${task.id}`;
  input.checked = task.completed;

  label.htmlFor = `todo-${task.id}`;
  label.textContent = task.task;

  li.appendChild(input);
  li.appendChild(label);
  ul.appendChild(li);
});
