const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');



let editTodo =null;


//function to add todo
const addTodo =()=>{
    const inputText= inputBox.value.trim();
    if (inputText<=0){
        alert ("you must write something in your to do ")
        return 0;
    }
     
    if(addBtn.value==='Edit'){
        editTodo.target.previousElementSibling.innerHTML=inputText;
        addBtn.value='Add';
        inputBox.value='';
    }

    else{
         //create p tag
         const li= document.createElement('li');
         const p= document.createElement('p');
        p.innerHTML= inputText;
        li.appendChild(p);
        //create edit button
        const editbtn= document.createElement('button');
        editbtn.innerText="Edit";
         editbtn.classList.add("btn","editbtn");
        li.appendChild(editbtn);
    
        
    
        //create delete button
         const deletebtn= document.createElement('button');
        deletebtn.innerText='Remove';
        deletebtn.classList.add("btn", "deletebtn");
        li.appendChild(deletebtn);
    
         todoList.appendChild(li);
        inputBox.value="";

        saveLocalTodos(inputText);

    }
   
}

//function to update todo
const updateTodo = (e)=>{
    //console.log(e.target.innerHTML);
    if (e.target.innerText ==='Remove')
    {
        //console.log(e.target.parentElement);
        todoList.removeChild(e.target.parentElement);
    }
     
    if(e.target.innerText=== "Edit"){
        inputBox.value= e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value='Edit';
        editTodo=e;
        
    }


}

const saveLocalTodos= (todo)=>{
    let todos =[];
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos))
    // console.log(todos)

}
addBtn.addEventListener('click',addTodo);
todoList.addEventListener('click', updateTodo)


