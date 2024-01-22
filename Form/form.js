// // Initialize Firebase
// const firebaseConfig = {
//     apiKey: "AIzaSyB6_13xy3fvYR_CLDa-frntAfOzOupLgvo",
//     authDomain: "event-app-9a42a.firebaseapp.com",
//     projectId: "event-app-9a42a",
//     storageBucket: "event-app-9a42a.appspot.com",
//     messagingSenderId: "1015520439291",
//     appId: "1:1015520439291:web:bfb3144a6f115ea3e0b95e",
//     measurementId: "G-M8LNWFMD59"
//   };
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    //Get value
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get form value
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company: company,
      email: email,
      phone: phone,
      message: message
    });
  }
  