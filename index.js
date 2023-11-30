function add() {
    var task = document.getElementById("input").value
    
    var listitem = document.createElement("li") // <li></li>

    listitem.innerHTML = task + ' <button type="button" id="deletebtn" onclick="delete_list(event)">Delete</button>'   // <li>task + button</li>
    var ulist = document.getElementById("list")


    ulist.append(listitem)


}

function delete_list(event) {

    var btn = document.getElementById("deletebtn")
    
    event.target.parentElement.remove()
}