function insert(num){
	document.form.textview.value=document.form.textview.value+num;
}

function clr(){
	document.form.textview.value="";
}

function back(){
	var remove=document.form.textview.value;

	document.form.textview.value=remove.substring(0,remove.length-1);
}

function equal(){
	var result=document.form.textview.value;
	if(result){
		document.form.textview.value=eval(result);
	}
}