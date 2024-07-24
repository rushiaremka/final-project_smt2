//buka form
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  //buka form
  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
       
  // set attributes
  function setLanguage(lang) {
    var emailLabel = document.getElementById('email-label');
    var passwordLabel = document.getElementById('password-label');
    var forgotPasswordLink = document.getElementById('forgot-password-link');
    var nameLabel = document.getElementById('name-label');
    var emailRegisterLabel = document.getElementById('email-register-label');
    var passwordRegisterLabel = document.getElementById('password-register-label');
    var repeatPasswordLabel = document.getElementById('repeat-password-label');
    var maleLabel = document.getElementById('male-label');
    var femaleLabel = document.getElementById('female-label');
    var secretLabel = document.getElementById('secret-label');
    var loginBtn = document.getElementById('login-btn');
    var registerBtn = document.getElementById('register-btn');
    var englishBtn = document.getElementById('english-btn');
    var indonesianBtn = document.getElementById('indonesian-btn');

          
    // switch ke b indo
  if (lang === 'id') {
    emailLabel.innerHTML = "Surel";
    passwordLabel.innerHTML = "Kata Sandi";
    forgotPasswordLink.innerHTML = "Lupa Kata Sandi?";
    nameLabel.innerHTML = "Nama";
    emailRegisterLabel.innerHTML = "Surel";
    passwordRegisterLabel.innerHTML = "Kata Sandi";
    repeatPasswordLabel.innerHTML = "Ulangi Kata Sandi";
    maleLabel.innerHTML = "Laki-laki";
    femaleLabel.innerHTML = "Perempuan";
    secretLabel.innerHTML = "Rahasia";
    loginBtn.innerHTML = "Masuk";
    registerBtn.innerHTML = "Daftar";
    englishBtn.innerHTML = "Inggris";
    indonesianBtn.innerHTML = "Indonesia";

          
    // switch ke b inggris
  } else {
    emailLabel.innerHTML = "Email";
    passwordLabel.innerHTML = "Password";
    forgotPasswordLink.innerHTML = "Forgot Password?";
    nameLabel.innerHTML = "Name";
    emailRegisterLabel.innerHTML = "Email";
    passwordRegisterLabel.innerHTML = "Password";
    repeatPasswordLabel.innerHTML = "Repeat Password";
    maleLabel.innerHTML = "Male";
    femaleLabel.innerHTML = "Female";
    secretLabel.innerHTML = "Prefer Not to Say";
    loginBtn.innerHTML = "Login";
    registerBtn.innerHTML = "Register";
    englishBtn.innerHTML = "English";
    indonesianBtn.innerHTML = "Indonesia";
    }
  }