// Array zur Speicherung der Aufgaben
let tasks = [];

// Funktion zum Hinzufügen einer neuen Aufgabe
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    tasks.push(taskText);
    taskInput.value = "";
    updateTaskList();
  }
}

// Funktion zum Anzeigen der Aufgaben
function updateTaskList() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Löschen";
    deleteButton.onclick = () => deleteTask(index);

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  });
}

// Funktion zum Löschen einer Aufgabe
function deleteTask(index) {
  tasks.splice(index, 1);
  updateTaskList();
}

// Initialisierung beim Laden der Seite
window.onload = updateTaskList;