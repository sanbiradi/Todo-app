        //catch the dom elements in variable
        var form = document.querySelector('form');
        var todoList = document.querySelector('ul');
        var button = document.getElementById('clear');
        var input = document.querySelector('input');
    
        //localStorage
        var todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []; 
        localStorage.setItem('todos',JSON.stringify(todosArray));
        var storage = JSON.parse(localStorage.getItem('todos'));
        //adding event listener to the element with addEventListener() method
    
        
    
        form.addEventListener('submit',function(e){
            e.preventDefault();
            todosArray.push(input.value);
            localStorage.setItem('todos',JSON.stringify(todosArray));
            
            todoMaker(input.value);
            input.value = '';
        });
    
        //creating function todomaker
        var todoMaker = function(text){
            var todo = document.createElement('li');
            todo.textContent = text;
            todoList.appendChild(todo);
        }    
    
        for(i = 0; i < storage.length; i++)
        {
            todoMaker(storage[i]);
        }
        //clear todos function
    
        button.addEventListener('click',function(){
            while(todoList.firstChild)
            {
               todoList.removeChild(todoList.firstChild);
            }
            localStorage.clear();
        });