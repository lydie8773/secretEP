
function login() {
	console.log("......");
	var username = document.getElementById('form-username').value;
	var password = document.getElementById('form-password').value;
	if(username.trim()==null||username.trim()==''||password.trim()==null||password.trim()==''){
		return;
	}
	if(validateUser(username,password)){
		window.location.href = "./success.html";
	}else{
		window.location.href = "./error.html";
	}
}
function validateUser(name, passd) {
	if(name=='Z23KXU'&&passd=='decathlon.'){
		return true;
	}else{
		return false;
	}
}
