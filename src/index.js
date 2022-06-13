document.addEventListener("DOMContentLoaded", () => {
  // your code here

document.getElementById('create-task-form').addEventListener('submit', (e) => {
  e.preventDefault()
createToDo(document.querySelector('#new-task-description').value);

})

let list = document.createElement('li');
let btn = document.createElement('button');

function createToDo(toDo){
  //adds the work to be done on the list tag
  list.textContent = `${toDo} `;
  //adds the text done to the button
  btn.textContent = 'Done';
  //appends the created list tag to the ToDo list 
  document.querySelector('#tasks').appendChild(list);
  //appends the created button to the created
  list.appendChild(btn);
  
};
btn.addEventListener('click', deletebtn)
function deletebtn (e){
e.target.parentNode.remove();
}


});

