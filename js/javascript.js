
var list = [];

function addTodo(event){
    console.log("Added");
    event.preventDefault();
    var inputForTodo = document.getElementsByClassName("newTodo form-control")[0];
    var newList = returnNewDivElementWithTodo(inputForTodo.value);
    if(inputForTodo.value == '')
        return;
    var size = list.length;
    list.push("todoList"+size.toString());
    var lista = document.getElementById("container");
    inputForTodo.value = "";
    console.log(lista);
    lista.appendChild(newList);
}

function returnNewDivElementWithTodo(todo){
    var div = document.createElement("div");
    div.setAttribute("class", "todoClass");
    var inp = document.createElement("input");
    inp.type = "checkbox";
    inp.id = "todoList" + list.length;
    var label = document.createElement("label");
    label.setAttribute("for", inp.id);
    label.innerHTML = todo;
    div.appendChild(inp);
    div.appendChild(label);
    return div;
}


function clearAll(event){
    event.preventDefault();
    for(var id in list){
        var act = document.getElementById(list[id]);
        act.checked = false;
    }
}

function mark(event){
    event.preventDefault();
    for(var id in list){
        var act = document.getElementById(list[id]);
        act.checked = true;
    }
}

function rem(event){
    var par = document.getElementById("container");
    var sz = par.childNodes.length;
    for(var i = 0; i < sz-1; i++){
        par.removeChild(par.childNodes[1]);
    }
    list = [];
}

function main(){
    console.log("HELLO");
    var postTodo = document.getElementById("postB");
    postTodo.addEventListener("click", addTodo);

    var clearAllTodos = document.getElementById("clearB");
    clearAllTodos.addEventListener("click", clearAll);

    var markAll = document.getElementById("markB");
    markAll.addEventListener("click", mark);

    var removeAll = document.getElementById("removeAll");
    removeAll.addEventListener("click", rem);
}



main();
