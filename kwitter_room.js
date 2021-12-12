var firebaseConfig = {
  apiKey: "AIzaSyA9c1gLm-Qcvj8hCEnHKpbGe2KfmtGtY-k",
  authDomain: "kwitter-e54f6.firebaseapp.com",
  databaseURL: "https://kwitter-e54f6-default-rtdb.firebaseio.com",
  projectId: "kwitter-e54f6",
  storageBucket: "kwitter-e54f6.appspot.com",
  messagingSenderId: "475422778979",
  appId: "1:475422778979:web:3555c009264de263773a56"
};
  firebase.initializeApp(config);

  

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-"+ Room_names);
row = "<div class = 'room_name' id="+Room_names+"onclick = 'redirectToRoomName(this.id)'># "+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

user_name = localStorage.getItem ("user_name");
document.getElementById("user_name").innerHTML = "WELCOME" + user_name +"!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name," room_name);
  window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html"
}
function send(){
  msg = document.getElementById ("mag").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });
}
