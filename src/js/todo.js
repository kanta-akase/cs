"use strict"; //strictモード：開発者が安全に開発できるようになる

const addTaskTarget = document.getElementsByClassName('js-addTask-target')[0];
const addTaskValue = document.getElementsByClassName('js-addTask-value')[0];
const addTaskTrigger = document.getElementsByClassName('js-addTask-trigger')[0];

const removeTask = removeButton => {
  const listItem = document.createElement('li');
  addTaskTarget.removeChild(targetTask);
};

const addTask = task => {
  const listItem = document.createElement('li');
  const removeButton = document.createElement('button');

  removeButton.innerText = 'delete cs';
  removeButton.addEventListener('click', () => removeTask(removeButton));

  listItem.innerText = task;

  listItem.append(removeButton);
  addTaskTarget.appendChild(listItem);
};

addTaskTrigger.addEventListener('click', event => {
  const task = addTaskValue.value;
  addTask(task);
  addTaskValue.value = '';
});
