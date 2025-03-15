// document.addEventListener("DOMContentLoaded", callbackFunction) tells the browser to execute callbackFunction when the initial HTML structure has been fully loaded.
// This prevents scripts from running too early, before the elements they interact with exist in the DOM.
document.addEventListener("DOMContentLoaded", () => {
    getUsername(); // Retrieves the stored username or asks for it if not found.Displays the username on the webpage.
    loadTasks(); // Fetches the stored tasks from localStorage and displays them.Ensures that tasks persist even after page reloads.
    checkReminders(); // Checks if there are any stored reminders