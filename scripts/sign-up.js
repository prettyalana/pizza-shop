function checkUsername() {
    let username = document.getElementById("usernameBox");
    let usernameText = username.value;
  }
  function checkPassword() {
    let password = document.getElementById("passwordBox");
    let passwordText = password.value;
    if (passwordText == "cruffin") {
      return true;
    } else {
      alert("Please input a username and password");
      return false;
    }
  }