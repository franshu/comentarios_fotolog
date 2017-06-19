function saveData(){
	var name=document.getElementById("name").value;
	var coment=document.getElementById("valor").value;
	sessionStorage.setItem(name, coment);
}
savedata();

function cleanData(){
	document.getElementById("data").innerHTML="clearcomentarios. savecomentarios";
}
cleanData();

function borrarTodo(){
	sessionStorage.clear(); recoverData();
}
borrar();