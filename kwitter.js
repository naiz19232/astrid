function login(){
    var username = document.getElementById("usernameInput").value;
    localStorage.setItem("user_name", username);
    window.location = "kwitter_room.html";
}