const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create new list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.classList.add("delete-btn");

  // Add delete functionality
  delBtn.addEventListener("click", function() {
    li.remove();
  });

  // Add everything to the list
  li.appendChild(delBtn);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
});
