const list = document.querySelector('#list ul');

//delete tasks
list.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        // li.parentElement.removeChild(li);
        //or
        list.removeChild(li);
    }
})


const addForm = document.forms['add-task'];

addForm.addEventListener('submit',function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    //mY way-> clone a li and edit the text
    // const l = document.querySelector('#list ul li');
    // if (typeof value !== 'undefined' && value) {
    //     //deal with value'
    //     const clonedl = l.cloneNode(true);
    //     clonedl.querySelector('.name').innerHTML = value;
    //     l.parentNode.appendChild(clonedl);
    // }

    //net ninja way

    //1. Create elements
    const l = document.createElement('li');
    const taskname = document.createElement('span');
    const delbtn = document.createElement('span');

    //2. Add content to elements
    taskname.textContent = value;
    delbtn.textContent = 'Delete';

    //3. Add classes
    taskname.classList.add('name');
    delbtn.classList.add('delete');

    //4. Append elements to the DOM
    l.appendChild(taskname);
    l.appendChild(delbtn);
    list.appendChild(l);
})

// hide tasks
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change',function(e){
    if(e.target.checked){
        list.style.display = "none";
    }
    else{
        list.style.display = "initial";
    }
})

//filter tasks
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup',function(e){
    const term = e.target.value.toLowerCase();
    const tasks = list.getElementsByTagName('li');
    Array.from(tasks).forEach(function(element){
        const title = element.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term)!=-1){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    });
})
    