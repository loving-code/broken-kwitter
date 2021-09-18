//YOUR FIREBASE LINKS
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

    room_name=localStorage.getItem("room_name");
    user_name=localStorage.getItem("user_name");

    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_nmae,
                message:msg,
                like:0
          });
          document.getElementById("msg").value;
    }
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1 = message_data['name'];
message = message_data['message']
like = message_data['like'];
name_with_tag = "<h4> " + name1 + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4> class='message_h4'>" + message + "</h4>"
like_button = "<button class='btn btn-warning' id=" + firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_wth_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like "+ like +"</span></button><hr>";

row= name_with_tag + message_with_tag +like_button + span_wth_tag;
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();
function updateLike(message_id){
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}
firebase.analytics();

function logout(){
      localStorage.removeItem("user_nmae");
      localStorage.removeItem("room_nmae");
      localStorage.replace("kwitter.html");
}

