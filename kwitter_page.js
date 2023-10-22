const firebaseConfig = {
    apiKey: "AIzaSyDOJYflBmPYMmoF3vu3oEJBY_uB65fD8m8",
    authDomain: "kwitter-b4ca1.firebaseapp.com",
    databaseURL: "https://kwitter-b4ca1-default-rtdb.firebaseio.com",
    projectId: "kwitter-b4ca1",
    storageBucket: "kwitter-b4ca1.appspot.com",
    messagingSenderId: "768109029620",
    appId: "1:768109029620:web:64cfc42484f0b71a6b56a1"
  };
  
     firebase.initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  
  function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
  
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
  
  function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
  }
  