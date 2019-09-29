function signup(){

	var userName = document.getElementById("username_field").value;
	var userEmail = document.getElementById("email_field").value;
	var userPassword = document.getElementById("password_field").value;

	//window.alert(userName + " " + userEmail);
	firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    	// Handle Errors here.
    	var errorCode = error.code;
    	var errorMessage = error.message;
    	console.log(errorCode);
    	console.log(errorMessage);
  	});

  	writeUserData(firebase.auth().currentUser.uid, userName, userEmail)
}

function writeUserData(userId, userName, email) {
  firebase.database().ref('users/' + userId).set({
  	userid: userId,
    username: userName,
    email: email
  });

  window.alert("Success!");
}