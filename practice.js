const one = document.querySelector('#list li:nth-child(2) .name');
// console.log(one);
var list = document.querySelectorAll('#list li .name');
console.log(list);

Array.from(list).forEach(function(lists){
lists.textContent+='(task title)';
});

// const ok = document.querySelector('#banner h1');
// ok.textContent = "AmAnLODU";

const listx = document.querySelector('#list');
console.log(listx);
listx.innerHTML = '<h2> Samjh Gya</h2>';
listx.innerHTML += '<p>Ok ok ok ok</p>'

const banner = document.querySelector('#banner');
console.log('#banner node type is',banner.nodeType);
console.log('#banner node name is',banner.nodeName);
console.log('#banner has child nodes:',banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);
console.log("Cloned node is: ",clonedBanner);

console.log('The parent node is:',listx.parentNode);
console.log('the parent element is:',listx.parentElement.parentElement);

//logging childNodes and ChildElements
// console.log('Child Nodes:',listx.childNodes);
// console.log('Child elements:',listx.children);

const wrap = document.querySelector('#wrapper');
console.log('Child Nodes:',wrap.childNodes);
console.log('Child elements:',wrap.children);

console.log('list next sibling is:',listx.nextSibling);
console.log('list next element is:',listx.nextElementSibling);

console.log('list previous sibling is:',listx.previousSibling);
console.log('list previous element is:',listx.previousElementSibling);

listx.previousElementSibling.querySelector('p').innerHTML+='<br/> Too cool for everyone else';

//adding event listeners
var h2 = document.querySelector('#list h2');
h2.addEventListener('click',function(e){
    console.log(e.target);
    console.log(e);
    if(e.shiftKey){
        h2.innerHTML += '<p>Shift is pressed</p>';
    }
})