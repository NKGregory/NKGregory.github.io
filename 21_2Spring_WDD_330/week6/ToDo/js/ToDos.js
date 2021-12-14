function showAllToDos(){
    var storedToDoString = localStorage.getItem("all_ToDos");
    var ToDoList = JSON.parse(storedToDoString);
    if(ToDoList != null){
        var ToDoDisplay = document.getElementById("list");
        ToDoDisplay.innerHTML = null;
        var numberOfToDos = ToDoList.length;
        document.getElementById("ToDosLeft").innerHTML = "Tasks Left: " + numberOfToDos;
        var ToDoCount = 0;
        for (var i = 0; i < numberOfToDos; i++) {
            var ToDo = ToDoList[i].ToDo;
            var ToDoid = ToDoList[i].id;
            var ToDoCheck = ToDoList[i].completed;
            if(ToDoCheck == true){
                finishclass = "completed"
            }else{
                finishclass = "incomplete"
                ToDoCount++;
            }
            ToDoDisplay.innerHTML += "<p class = " + finishclass + "><label><input type= 'checkbox' id=" + 
            ToDoid + ">" + 
            ToDo + "</label><button class ='delete' id=" + ToDoid + ">X</button></p>";
            document.getElementById("ToDosLeft").innerHTML = "Tasks Left: " + ToDoCount;

        }
    }
    CompleteToDo();
    RemoveToDo();
};


function AddToDo(){
    var timestamp = Date.now();
    var ToDoDescription = document.getElementById("input").value;
    if(ToDoDescription == ""){
        return;
    }
    var ToDo = {
        "id" : timestamp, 
        "ToDo" : ToDoDescription, 
        "completed" : false,
    };
    var ToDoList = null
    var storedToDoString = localStorage.getItem("all_ToDos");
    var ToDoList = JSON.parse(storedToDoString);
    if(ToDoList == null){
        ToDoList = []
    }
    else{
        ToDoList = JSON.parse(storedToDoString)
    }
    ToDoList.push(ToDo);
    var allToDoString = JSON.stringify(ToDoList);
    localStorage.setItem("all_ToDos", allToDoString);
    showAllToDos();
    document.getElementById("input").value = null;
};

function CompleteToDo(){
    var storedToDoString = localStorage.getItem("all_ToDos");
    var ToDoList = JSON.parse(storedToDoString);
    if(ToDoList != null){
        var numberOfToDos = ToDoList.length;
        //Add Event Listener to Checkbox
        checkboxes = document.querySelectorAll('input[type=checkbox]')
        for (i = 0; i < checkboxes.length; i++) {
            checkboxes[i].addEventListener("change", function(e) {
                targetID = e.target.id;
                for (var i = 0; i < numberOfToDos; i++) {
                    if(ToDoList[i].id == targetID){
                        ToDoList[i].completed = !ToDoList[i].completed;
                        var allToDoString = JSON.stringify(ToDoList);
                        localStorage.setItem("all_ToDos", allToDoString);
                        RemoveToDo();
                        showAllToDos();
                    }
                }

            })
        }
    }

}


function RemoveToDo(){
    var storedToDoString = localStorage.getItem("all_ToDos");
    var ToDoList = JSON.parse(storedToDoString);
    if(ToDoList != null){
        var numberOfToDos = ToDoList.length;
        //Add Event Listener to deletebox
        deletebuttons = document.querySelectorAll('.delete')
        for (i = 0; i < deletebuttons.length; i++) {
            deletebuttons[i].addEventListener("click", function(e) {
                targetID = e.target.id;
                for (var i = 0; i < numberOfToDos; i++) {
                    if(ToDoList[i].id == targetID){
                        ToDoList.splice(i, 1);
                        var allToDoString = JSON.stringify(ToDoList);
                        localStorage.setItem("all_ToDos", allToDoString);
                        location.reload();
                    }
                }

            })
        }
    }

}


function ShowCompleteToDos(){
    var storedToDoString = localStorage.getItem("all_ToDos");
    var ToDoList = JSON.parse(storedToDoString);
    if(ToDoList != null){
        var ToDoDisplay = document.getElementById("list");
        ToDoDisplay.innerHTML = null;
        var numberOfToDos = ToDoList.length;
        for (var i = 0; i < numberOfToDos; i++) {
            var ToDo = ToDoList[i].ToDo;
            var ToDoid = ToDoList[i].id;
            var ToDoCheck = ToDoList[i].completed;
            if(ToDoCheck == true){
                finishclass = "completed"
                ToDoDisplay.innerHTML += "<p class = " + finishclass + "><label><input type= 'checkbox' id=" + ToDoid + ">" + 
                ToDo + "</label><button class ='delete' id=" + ToDoid + ">X</button></p>";
            }
        }
    CompleteToDo();
    RemoveToDo();
    }
}

function ShowIncompleteToDos(){
    var storedToDoString = localStorage.getItem("all_ToDos");
    var ToDoList = JSON.parse(storedToDoString);
    if(ToDoList != null){
        var ToDoDisplay = document.getElementById("list");
        ToDoDisplay.innerHTML = null;
        var numberOfToDos = ToDoList.length;
        for (var i = 0; i < numberOfToDos; i++) {
            var ToDo = ToDoList[i].ToDo;
            var ToDoid = ToDoList[i].id;
            var ToDoCheck = ToDoList[i].completed;
            if(ToDoCheck == false){
                finishclass = "incompleted"
                ToDoDisplay.innerHTML += "<p class = " + finishclass + "><label><input type= 'checkbox' id=" + ToDoid + ">" + 
                ToDo + "</label><button class ='delete' id=" + ToDoid + ">X</button></p>";
            }
        }
    CompleteToDo();
    RemoveToDo();
    }
}

function date(){
const yearoptions = {year:'numeric'};
document.getElementById('currentyear').textContent = new Date().toLocaleDateString('en-US', yearoptions);

const options = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);
}