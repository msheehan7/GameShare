//this changes whether the login div shows or the log out div shows

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("logoutBox").style.display = "block";
      document.getElementById("loginBox").style.display = "none";
      document.getElementById("SignUpBox").style.display = "none";

    // This is to make the profile specific to the customer 
  var user = firebase.auth().currentUser; //sets the current user to variable
  var name, email, photoUrl, uid, emailVerified;
  //the null thing is to make sure the user is still logged in dude
  if (user != null) {
    var email_id = user.email;
      //remember don't freak about innerHTML it just gets the info from the page
    document.getElementById("loggedin").innerHTML = "welcome    " + email_id

    }
    } else { //dique syntax on a parenthesis
      // No user is signed in.
      
      document.getElementById("logoutBox").style.display = "none";
      document.getElementById("loginBox").style.display = "block";
     // document.getElementById("SignUpBox").style.display = "block";
  }
  });


//this actually logs you in dude and has a meassage if you mess up
function login(){
    var userEmail = document.getElementById("emailInput").value;
    var userPassword = document.getElementById("passwordInput").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert("Error :" + errorMessage);
      });
}

////// Aii dude now it's time to mke the logout.....///////
function logout(){
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log("I'm signed out");
  }).catch(function(error) {
    // An error happened.
});
}

function SignUp(){
   
    var NewEmail = document.getElementById("emailInputSignUp").value;
    var NewPassword = document.getElementById("passwordInputSignUp").value;
    firebase.auth().createUserWithEmailAndPassword(NewEmail,NewPassword).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
    });

   document.getElementById("emailInputSignUp").value = "";
   document.getElementById("passwordInputSignUp").value = "";


}









































