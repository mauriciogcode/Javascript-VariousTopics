//Define UI variables
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-task')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// Load all event listeners
loadEventListeners();

// Load al event listener
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear task event
  clearBtn.addEventListener('click', clearTasks);
  //Filter task events
  filter.addEventListener('keyup', filterTasks)
}

function addTask(e){
  if (taskInput.value === ''){
    alert('Add a task');
  }

/////////////////////
// Create  element, with class and the text node from input
const li = document.createElement('li');
li.className = 'collection-item';
li.appendChild(document.createTextNode(taskInput.value))
/////////////////////
// Create new link element, with class and a html inside
const link = document.createElement('a')
link.className = 'delete-item secondary-content'
link.innerHTML = '<i class="fas fa-times"></i>'
/////////////////////
//Append the link indide li, append li inside list
li.appendChild(link);
taskList.appendChild(li)
//Clear the input
taskInput.value = '';

e.preventDefault();
}
////////////////////
// Remove task
function removeTask(e){
  // Target the a class inside the i class
  if (e.target.parentElement.classList.contains('delete-item')){
    // remove the parent of the parent the li item
    if(confirm('Are you sure?')){
    e.target.parentElement.parentElement.remove();}
  }

}
// Clear task
function clearTasks(){
  
  if(confirm('Are you sure?')){
    // This  function ask for the fist child if there is one it removes
    //and so until there is no first child in the list
    while(taskList.firstChild) {
      taskList.removeChild(taskList.firstChild)
    }}
  
}

// Filter class event
function filterTasks(e){
const text = e.target.value.toLowerCase();
// queryselector all return a node list so we can use for each
document.querySelectorAll('.collection-item')
.forEach(function(task){
  const item = task.firstChild.textContent;
  console.log('Soy task ///////////////' + task)
  console.log('Soy first child ///////////////' + task.firstChild)
  console.log('Soy textcontent ///////////////' + task.firstChild.textContent)
  if (item.toLowerCase().indexOf(text) != -1){
    task.style.display = 'block'}
    else {
      task.style.display = 'none'
    }
  }
)};
