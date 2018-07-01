const form = document.querySelector("form")
const taskInput = document.getElementById("task")

form.addEventListener("submit", addEvent)
/**
 *
 * @param {Object} e - Event Object
 */
function addEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`)

  //Creating elements

  const li = document.createElement("li")

  // //Add class
  li.className = "collection-item"

  // //Add id
  li.id = "new-item"

  // //Add attribute
  li.setAttribute("title", "New Item")

  // //Create text node and append
  li.appendChild(document.createTextNode(taskInput.value))

  // //Create new link element
  const link = document.createElement("a")

  // //Add class
  link.className = "delete-item secondary-content"

  // //Add icon html
  link.innerHTML = '<i class="fa fa-remove"></li>'

  // //Append link to li
  li.appendChild(link)

  // //Append li as child to ul
  document.querySelector("ul.collection").appendChild(li)

  console.log(li)
  //Clear input
  taskInput.value = ""
  e.preventDefault()
}
/**
 * Delete all tasks
 */
const btnClear = document.querySelector(".clear-tasks")
btnClear.addEventListener("click", deleteEvent)

/**
 * @param {Object} e - Event Object
 */
function deleteEvent(e) {
  const list = document.querySelector("ul")
  const lists = document.querySelectorAll("li")
  console.log(lists)
  lists.forEach(function(listItem) {
    listItem.remove()
  })
}
const task = document.querySelector("ul.collection")

// if (task.children) {
//   const itemDelete = document.querySelector("fa fa-remove")

//   itemDelete.addEventListener("click", deleteTask)
//   function deleteTask(e) {
//     console.log(e.target)
//   }
// }
