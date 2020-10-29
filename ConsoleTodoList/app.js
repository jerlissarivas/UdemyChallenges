let todos = [];

let whatToDo = prompt("What would you like to do?");


while (whatToDo !== "quit") {
    if (whatToDo === "list") {
            console.log("******")
            for (let i = 0; i < todos.length; i++) {
                console.log(`${i}: ${todos[i]}`);
            }
            console.log("******")
        } else if (whatToDo === "new") {
                let newTodo = prompt("List your todo");
                todos.push(newTodo);
                console.log(`Your todo: "${newTodo}" was added!`)
        } else if (whatToDo === "delete") {
                let deleteWhat = prompt("What number would you like to delete?")
                todos.splice(deleteWhat, 1)
            }
    whatToDo = prompt("What would you like to do?")    
}
console.log("You have quit the app!");