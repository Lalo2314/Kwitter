const firebaseConfig = {
    apiKey: "AIzaSyBAjxqS-JKags8kgBw7x9bMa1E8EWyWbl4",
    authDomain: "kwitter-a39ec.firebaseapp.com",
    databaseURL: "https://kwitter-a39ec-default-rtdb.firebaseio.com",
    projectId: "kwitter-a39ec",
    storageBucket: "kwitter-a39ec.appspot.com",
    messagingSenderId: "828570333830",
    appId: "1:828570333830:web:ff8f4f961b67ac1bcb5707"
  };

  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  
function send(){    
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    }); 
    

}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { 
    firebase_message_id = childKey; 
    message_data = childData;

//Inicia el código
    console.log(firebase_message_id); 
    console.log(message_data); 
    name = message_data['name']; 
    message = message_data['message']; 
    like = message_data['like']; name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>"; message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"; like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"; span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Me gusta: "+ like +"</span></button><hr>";


    row = name_with_tag + message_with_tag +like_button + span_with_tag;   
    document.getElementById("output").innerHTML += row; 
//Termina el código
 } }); }); } 
getData();

 


function logout(){
    localStorage.removeItem("user_name"); 
    localStorage.removeItem("room_name"); 
    window.location = "index.html";
    }



