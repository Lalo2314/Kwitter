//AGREGA TUS ENLACES DE FIREBASE AQUÍ
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

    document.getElementById("user_name").innerHTML = "Hola" + user_name;

function addRoom() { room_name = document.getElementById("room_name").value; firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html"; }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código
      console.log("Room_Name - " + Room_names);


      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

      //Finaliza el código
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout(){
   localStorage.removeItem("user_name"); 
    localStorage.removeItem("room_name"); 
    window.location = "index.html";
   }
