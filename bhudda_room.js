const firebaseConfig = {
      apiKey: "AIzaSyBR2z_TY_v4onpOKm-ZAjsTVWmt9I0j2RE",
      authDomain: "bhudda-mail.firebaseapp.com",
      databaseURL: "https://bhudda-mail-default-rtdb.firebaseio.com",
      projectId: "bhudda-mail",
      storageBucket: "bhudda-mail.appspot.com",
      messagingSenderId: "344204299412",
      appId: "1:344204299412:web:b419aeb39a26a568017881",
      measurementId: "G-DT6DH6J830"
    };
    
    
      firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }
    