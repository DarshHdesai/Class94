
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyAYLOGrtYVRk53nO16fdVlJsDvQTA-A0kM",
      authDomain: "class94-be200.firebaseapp.com",
      projectId: "class94-be200",
      storageBucket: "class94-be200.appspot.com",
      messagingSenderId: "243323344195",
      appId: "1:243323344195:web:bda8f28b5402545986cbf6",
      measurementId: "G-78M06MQG3D"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
 function addUser()
 {
      user_name = document.getElementById("user_name").value;
   firebase.databasea().ref("/").child(user_name).update({
      purpose :"adding user"
   });
     
   

 }