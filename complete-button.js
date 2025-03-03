document.addEventListener('DOMContentLoaded', function() {
    
    var completionButtons = document.querySelectorAll('.bg-blue-600.text-white.px-4.py-2.rounded-lg.text-sm');
    completionButtons.forEach(function(button) {
        if (button.textContent.trim() === 'Completed') {
            button.classList.add('completion-button');
        }
    });
    
    document.body.addEventListener('click', function(event) {
        if (event.target.classList.contains('completion-button')) {
            event.preventDefault();
            
            var navValue = parseInt(document.getElementById('nav-value').textContent.trim());
            var taskValue = parseInt(document.getElementById('task-value').textContent.trim());
            
            document.getElementById('nav-value').textContent = navValue + 1;
            document.getElementById('task-value').textContent = taskValue - 1;
            
            var taskCard = event.target.closest('.bg-indigo-100');
            var taskName = taskCard.querySelector('h2.font-bold.text-lg').textContent;
            
            addToActivityLog(taskName);
            
            event.target.disabled = true;
            event.target.textContent = 'Completed';
            event.target.style.backgroundColor = 'transparent';
            event.target.style.color = 'indigo'; 
            event.target.style.border = '1px solid indigo';  
            event.target.style.cursor = 'not-allowed';  
            event.target.classList.add('disabled-button'); 
            
            alert("Board Updated Successfully");

            
            if (taskValue - 1 === 0) {
                alert("🎉 Congratulations! You've completed all tasks!");
            }
        }
    });
    
    function addToActivityLog(taskName) {
        var activityLog = document.querySelector('aside');
        
        var logEntry = document.createElement('div');
        logEntry.className = 'bg-white p-3 rounded-lg mt-3 shadow-md';
        
        var timeString = new Date().toLocaleTimeString();
        
        logEntry.innerHTML = '<p class="text-sm text-gray-600">You completed the task <strong>' + taskName + '</strong> at ' + timeString + '</p>';
        
        activityLog.insertBefore(logEntry, activityLog.querySelector('.text-center').nextSibling);
    }
    
    document.querySelector('aside button').addEventListener('click', function() {
        var logEntries = document.querySelectorAll('aside .bg-white.p-3');
        logEntries.forEach(function(entry) {
            entry.remove();
        });
    });
});
