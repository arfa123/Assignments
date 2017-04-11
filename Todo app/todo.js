var array = [];

function addTodo() {
    
    var GetInputValue = document.getElementById("input").value;
    if (GetInputValue == " " || GetInputValue == "") {
        alert("Please write some thing");
    }
    else {
        array.push(GetInputValue);
    }
    if (array.length >= 1) {
        document.getElementById("heading").innerHTML = "Todo List:";
    }
    show();
}

function show() {
    var todoList = document.getElementById("todo_list");
    var data = '';
    
    for (var i = 0; i < array.length; i++) {
        data += "<li class='list' id='"+ i +"'>" + (parseInt(i)+1) + '. ' + array[i] + "<div>" +"<button class='button' onClick='edit(this.id);' id=' "+ 'a' + i  +" '>" + 'edit' + "</button>" + "<button class='button' onClick='removed(this.id);' id=' "+'b'+ i  +" '>" + 'Delete' + "</button>" + "</div>" + "</li>";
        todoList.innerHTML = data;
        console.log(data);
    }
    data = "";
    document.getElementById("input").value = ""
}

function removed(x) {
    var b = x.charAt(2);
	if (array.length == 1){
		all_remove();
	}
	else{
        	array.splice(b,1);
        	show();
	}
}

function all_remove() {
	document.getElementById("todo_list").innerHTML = "";
    		array = [];
	}
function edit(y) {
    var a = y.charAt(2);
    var edit = document.getElementById(a);
    var data2 = '';
    data2 = '<input type="text" name="edit1" id="edit" value="'+ array[a] +'"/><div><button class="'+ a +'" onClick="save(this.className);">'+"Save"+'</button></div>';
    edit.innerHTML = data2;
    
}
function save(w){
    var edited = document.getElementById('edit').value;
    array[w] = edited;
    show();
}
