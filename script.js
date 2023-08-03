const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const finalList = document.querySelector('.list-tasks')

let myItemList = []

function addNewTask() {
   myItemList.push({
      task: input.value,
      completed: false,
   })

   input.value = ''

   showTasks()
}

function showTasks() {
   let newList = ''

   myItemList.forEach((item, position) => {
      newList =
         newList +
         `

        <li class="task ${item.completed && 'done'}">
            <img src="./img/checked.png" alt="check-task" onclick="completeTask(${position})">
            <p>${item.task}</p>
            <img src="./img/trash.png" alt="delete task" onclick="deleteItem(${position})">
        </li>
        
        `
   })

   finalList.innerHTML = newList

   localStorage.setItem('list', JSON.stringify(myItemList))
}

function completeTask(position) {
   myItemList[position].completed = !myItemList[position].completed

   showTasks()
}

function deleteItem(position) {
   myItemList.splice(position, 1)

   showTasks()
}

function reloadTasks() {
   const tasksLocalStorage = localStorage.getItem('lista')

   if (tasksLocalStorage) {
      myItemList = JSON.parse(tasksLocalStorage)
   }

   showTasks()
}

reloadTasks()
button.addEventListener('click', addNewTask)