
//ADD YOUR FIREBASE LINKS
 // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9c1gLm-Qcvj8hCEnHKpbGe2KfmtGtY-k",
    authDomain: "kwitter-e54f6.firebaseapp.com",
    databaseURL: "https://kwitter-e54f6-default-rtdb.firebaseio.com",
    projectId: "kwitter-e54f6",
    storageBucket: "kwitter-e54f6.appspot.com",
    messagingSenderId: "475422778979",
    appId: "1:475422778979:web:3555c009264de263773a56"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  

 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
localStorage.setItem("user_name",user_name);
window.location = "kwitter_room.html";

}