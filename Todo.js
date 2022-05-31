const todo = document.getElementById("todos");
// const form=document.getElementsById("form");

addEventListener('submit', e => {
    e.preventDefault();
    addTodo();
});
function setError(input, msg) {
    const formControl = input.parentElement;
    console.log(formControl);
    const small = formControl.querySelector('small');
    console.log(small);
    formControl.classname = "fields error";
    small.innerHTML = msg;
}
function createTodo(todoValue) {

    const newElement = document.createElement("div");
    newElement.innerText = todoValue;
    // console.log(newElement);
    
    const list = document.getElementById("lists");
    list.append(newElement);
    
    newElement.style.padding = "10px";
    newElement.style.marginBottom = "5px";
    newElement.style.textAlign = "center";
    
    // single click red mark the list of element
    newElement.addEventListener('click', function () {
        newElement.style.color = "red";
        newElement.style.opacity = "0.3";
    });
    
    // double click delete the element
    newElement.addEventListener('dblclick', function () {
        newElement.remove(todo);
    });
}
function addTodo() {
    const todoValue = todo.value;

    if (todoValue === "") {
        setError(todo, "add Some Todo");
        // return;
    } else {
        createTodo(todoValue);
    }
    
    // console.log(todoValue);
    todo.value = "";
}