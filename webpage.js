document.addEventListener('DOMContentLoaded', function() {   //When the DOM is loaded this function runs
    
    const bg = chrome.extension.getBackgroundPage()          //It is retriving the data from the background file and displaying it on the webpage
    Object.keys(bg.bears).forEach(function (url) {           //It is taking from the object using forEach   url 
        const p = document.createElement('p');               //creating a 'p' element 
        p.textContent = `${url}: ${bg.bears[url]}`           //Giving the p element textcontent to be the url followed by the count 
        document.body.appendChild(p)                         //Appending the element into the html page 

    })
}, false)                                                    //In order to signify the iteration can stop



   loadEvents();                                             //When the function runs the the submit, clearList and deleteOrTick is loaded or listened
                                                        
function loadEvents(){                                               //Loads every event in the page
  document.querySelector('form').addEventListener('submit',submit);   //When the add button is clicked it is listened and the submit function runs 
  document.getElementById('clear').addEventListener('click',clearList);   //When the clear is clicked it removes the data visible on the page
  document.querySelector('ul').addEventListener('click',deleteOrTick);    //When the ul is clicked it is listened and either the checkbox is selected or the task is removed

}

function submit(e){                                                          // Submit data function
  e.preventDefault();                                                        // It prevents add to not to add the data or open the action page
  let taskList;                                                              // The list is empty at the start
  let input = document.querySelector('input');                               //Getting the values from the input box
  if(input.value != '')                                                      //If input is not empty then the addTask function runs with input.value as the parameter
    addTask(input.value);
  input.value = '';                                                           //If condition not satisfied value is empty then this code is executed
}


function addTask(task){                                                         // Add tasks function
  let ul = document.querySelector('ul');                                        //ul of html page is selected 
  let li = document.createElement('li');                                       //li elment is created to be displayed on the screen 
  li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${task}</label>`;             //li element consists some additional elements such as the span and the checkbox along with the input text
  ul.appendChild(li);                                                                                      //The element is append into the html
  document.querySelector('.tasksBoard').style.display = 'block';                                           //The taskboard is made visible on the webpage
}


function clearList(e){                                                                                     // Clear the list function                        
  let ul = document.querySelector('ul').innerHTML = '';                                                    //Makes the ul element to be empty
}


function deleteOrTick(e){                                                                                   // deleteTick function 
  if(e.target.className == 'delete')                                                                        //If e data classname is delete then the deleteTask function is invoked
    deleteTask(e);
  else {                                                                                                    // The  checkbox is clicked then the cut out pattern is displayed 
    tickTask(e);
  }
}


function deleteTask(e){                                                                                    // delete task funtion 
  let remove = e.target.parentNode;                                                                        //Its parent node is span so it is removed along with all the selected lines content
  let parentNode = remove.parentNode;                                                                      
  parentNode.removeChild(remove);                                                                          //removes the line along with the child
}


function tickTask(e){                                                                                     // tick a task function
  const task = e.target.nextSibling;                                                                      // Targets the sibling 
  if(e.target.checked){                                                                                   //If it is checked the text decoration is changed 
    task.style.textDecoration = "line-through";
    task.style.color = "#ff0000";
  }else {                                                                                                 //If not checked then the no style is displayed 
    task.style.textDecoration = "none";
    task.style.color = "#2f4f4f";
  }
}
