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
    //YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
