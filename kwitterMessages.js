const firebaseConfig = {
    apiKey: "AIzaSyC3VGBTkjhNUvBdL-5OnhNF7U5Vi1YfaaA",
    authDomain: "kwitter-56d73.firebaseapp.com",
    databaseURL: "https://kwitter-56d73-default-rtdb.firebaseio.com",
    projectId: "kwitter-56d73",
    storageBucket: "kwitter-56d73.appspot.com",
    messagingSenderId: "35983115003",
    appId: "1:35983115003:web:9941843e5d4f462813a65e"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function tabName(){
    var roomname = document.getElementById("Room name").value;
    document.getElementById("tabTitle").innerHTML = roomname;
}
function setTopTitle(){
    var roomname = localStorage.getItem("Room name");
    console.log("Room name: " + roomname)
    document.getElementById("topTitle").innerHTML = roomname;
    document.getElementById("tabTitle").innerHTML = roomname;
}
function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}