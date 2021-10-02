var firebaseConfig = {
    apiKey: "AIzaSyD_yKW5FrSsalWfHsMk7jvlyc38NneQ4E4",
    authDomain: "mogacast-faa20.firebaseapp.com",
    databaseURL: "https://mogacast-faa20-default-rtdb.firebaseio.com",
    projectId: "mogacast-faa20",
    storageBucket: "mogacast-faa20.appspot.com",
    messagingSenderId: "387805808105",
    appId: "1:387805808105:web:4f60021ddb4701a1f7f778"
  };
   firebase.initializeApp(firebaseConfig);



user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");


function Send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    name:user_name, message: msg , like:0
});
document.getElementById("msg").value="";



}





function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();