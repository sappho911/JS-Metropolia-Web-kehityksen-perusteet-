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

const ul = document.querySelector('ul');
const dialog = document.querySelector('dialog');
const addBtn = document.querySelector('.add-btn');
const form = document.querySelector('form');

addBtn.addEventListener('click', () => {
  dialog.showModal();
});

todoList.forEach(function (todo) {
  const isCompleted = todo.completed ? 'checked' : '';

  const html = `<li id=todo-id-${todo.id}> 
                  <input type="checkbox" id="todo-${todo.id}" ${isCompleted}>
                  <label for="todo-${todo.id}">${todo.task}</label>
                  <button class="btn-delete" data-id="${todo.id}">Delete</button>
                </li>`;

  ul.insertAdjacentHTML('beforeend', html);

  const checkbox = document.querySelector(`#todo-${todo.id}`);
  const btnDel = document.querySelector(`[data-id="${todo.id}"]`);

  checkbox.addEventListener('change', () => {
    todo.completed = checkbox.checked;
    console.log(todoList);
  });

  btnDel.addEventListener('click', function () {
    const index = todoList.findIndex((item) => item.id === todo.id);

    if (index !== -1) {
      todoList.splice(index, 1);
    }

    const li = document.querySelector(`#todo-id-${todo.id}`);

    ul.removeChild(li);

    console.log(todoList);
  });
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(`submitted`);

  const text = form.querySelector('input').value;

  const newToDo = {
    id: todoList.length + 1,
    task: text,
    completed: false,
  };

  todoList.push(newToDo);

  const html = `<li id=todo-id-${newToDo.id}> 
                  <input type="checkbox" id="todo-${newToDo.id}">
                  <label for="todo-${newToDo.id}">${newToDo.task}</label>
                  <button class="btn-delete" data-id="${newToDo.id}">Delete</button>
                </li>`;

  ul.insertAdjacentHTML('beforeend', html);

  console.log(newToDo);
  dialog.close();
});
