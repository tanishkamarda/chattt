// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
    apiKey: "AIzaSyB1wCgPSPVevFCQcYKe0jVwdkPCWfo75MI",
    authDomain: "chatbox-87a51.firebaseapp.com",
    projectId: "chatbox-87a51",
    storageBucket: "chatbox-87a51.appspot.com",
    messagingSenderId: "1022595629381",
    appId: "1:1022595629381:web:371b31d93d54abd8647e2c",
    measurementId: "G-5KLD7GFB8Z"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
// Initialize Firebase



function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



