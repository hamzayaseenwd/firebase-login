const firebaseConfig = {
  apiKey: "AIzaSyAPeCzykxU_jankByqYtNlikF1d-Nygrh8",
  authDomain: "homefort-df670.firebaseapp.com",
  projectId: "homefort-df670",
  storageBucket: "homefort-df670.appspot.com",
  messagingSenderId: "57785666163",
  appId: "1:57785666163:web:9508d1f5db9bb9f7793806"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);



// ****************************login area start **************************
function logIn(){
    var email = document.getElementById("email")
    // console.log(email.value);
    var password = document.getElementById("password")
    // console.log(password.value);

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });

}
// ****************************login area end **************************





// ****************************signup area start **************************
function signUp(){
    var email = document.getElementById("email")
    // console.log(email.value);
    var password = document.getElementById("password")
    // console.log(password.value);

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });


}
// ****************************signup area end **************************





// ****************************forget password area start **************************
function forgetPass(){
    var email = document.getElementById("email")
    // console.log(email.value);
    var password = document.getElementById("password")
    // console.log(password.value);



    firebase.auth().sendPasswordResetEmail(email.value)
  .then(() => {
    // Password reset email sent!
    alert("Password reset email sent!")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
}
// ****************************forget password area end **************************





// ****************************login with google area start **************************
function loginWithGoogle(){
    var email = document.getElementById("email")
    // console.log(email.value);
    var password = document.getElementById("password")
    // console.log(password.value);


    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // IdP data available in result.additionalUserInfo.profile.
      console.log(user);
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });


}
// ****************************login with google area end **************************





// ****************************login with Github area start **************************
function loginWithGithub(){
    var email = document.getElementById("email")
    // console.log(email.value);
    var password = document.getElementById("password")
    // console.log(password.value);


}
// ****************************login with Github area end **************************

