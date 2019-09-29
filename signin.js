firebase.auth().onAuthStateChanged(function(user) {
	if(user){
		// User is signed in
	}
	else{
		// No user is sined in
	}
});

function login(){

	var userName = document.getElementById("username_field").value;
	var userPassword = document.getElementById("password_field").value;

	window.alert(userName + " " + userEmail);
}