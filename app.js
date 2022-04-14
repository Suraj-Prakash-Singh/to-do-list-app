var delbtns = document.querySelectorAll('#list .delete');

//turn ainto array
delbtns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const li = e.target.parentElement;

        li.parentElement.removeChild(li);
    })
})

//we can also prebvent the default behaviour of events
//a is a link to another website we want to stop to go towards it on clicking the link 

// const link = document.querySelector('#banner a');

// link.addEventListener('click',function(e){
//     e.preventDefault();
//     console.log('navigation to',e.target.textContent,'Was prevented');
// })