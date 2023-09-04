if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('service-worker.js')
        .then(registration => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                ${taskText}
                <span class="delete-button">Delete</span>
            `;
            taskList.appendChild(listItem);
            taskInput.value = "";

            listItem.querySelector(".delete-button").addEventListener("click", () => {
                listItem.remove();
            });
        }
    });

    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("service-worker.js")
            .then(registration => {
                console.log("Service Worker registered with scope:", registration.scope);
            })
            .catch(error => {
                console.error("Service Worker registration failed:", error);
            });
    }
});
