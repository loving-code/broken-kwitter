
var firebaseConfig = {
      apiKey: "AIzaSyCTY1a9-co3QkY5bCNYGFX96YVNslGEPBo",
      authDomain: "kwitter-51dff.firebaseapp.com",
      databaseURL: "https://kwitter-51dff-default-rtdb.firebaseio.com",
      projectId: "kwitter-51dff",
      storageBucket: "kwitter-51dff.appspot.com",
      messagingSenderId: "975834755333",
      appId: "1:975834755333:web:d28479630e1ff93494476c",
      measurementId: "G-CJGD3D2VXE"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    

    function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<dive class='room_name' id= " +Room_names+"onclick'redirectToRoomName(this.id) >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      loacalStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}


firebase.analytics();
