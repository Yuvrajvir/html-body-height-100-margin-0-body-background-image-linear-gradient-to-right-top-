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
    
   
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
}

      } });  }); }
getData();


function logout()  {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
           windows.location = "bhudda.html";
      }