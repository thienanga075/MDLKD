window.addEventListener("load", function () {
  var form = document.querySelector(".form-1");
  var username = document.querySelector(".username");
  var password = document.querySelector(".password");
  var error1 = document.querySelector(".error-1");
  var error2 = document.querySelector(".error-2");

  const data = [
    {
      id: 1,
      username: "admin",
      displayName: "administrator",
      password: "admin@123",
      email: "admin@gmail.com",
      role: "admin",
    },
    {
      id: 2,
      username: "member",
      displayName: "member`",
      password: "member@123",
      email: "member@gmail.com",
      role: "member",
    },
  ];

  function setObject(username, password) {
    var user = new Object();
    user.username = username;
    user.password = password;
    return user;
  }
  // const key = "users"
  function setLocale(key, user) {
    localStorage.setItem(key, JSON.stringify(user));
  }

  form.onsubmit = (e) => {
    e.preventDefault();
    if (username.value == "") {
      error1.innerText = "Bạn cần nhập Tài Khoản";
      username.classList.add("invalid");
    }
    if (password.value == "") {
      error2.innerText = "Bạn cần nhập Mật khẩu";
      password.classList.add("invalid");
    }

    if (
      !username.classList.contains("invalid") &&
      !password.classList.contains("invalid")
    ) {
      Login(username.value.toLowerCase(), password.value.toLowerCase());
    }
  };

  function Login(username, password) {
    isUsr = false;
    isPwd = false;
    if (!username && !password) {
      return;
    } else {
      var user = [...data].find((u) => u.username === username && u.password === password);
      console.log(user);
      if (user) {
        isUsr = true;
        isPwd = true;
        var usr = user.username;
        var pwd = user.password;
      } else {
        alert("Tài Khoản Không Tồn Tại");
      }
    }
    if (isUsr && isPwd) {
      var userObject = setObject(usr, pwd);
      setLocale("User", userObject);
      window.location.href = "./index.html";
    }
  }

  function check() {
    username.onkeyup = () => {
      if (username.value !== "") {
        if (username.value.length <= 4) {
          error1.innerText = "Tài khoản phải có ít nhất 4 ký tự";
          username.classList.add("invalid");
        } else {
          error1.innerText = "";
          username.classList.remove("invalid");
        }
      }
    };

    password.onkeyup = () => {
      if (password.value !== "") {
        error2.innerText = "";
        password.classList.remove("invalid");
      }
    };
  }
  check();

});


