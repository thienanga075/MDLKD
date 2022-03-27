window.addEventListener("load", function () {
  var form = document.querySelector(".form-2");
  var username = document.querySelector(".username");
  var password = document.querySelector(".pwd");
  var rePassword = document.querySelector(".r-pwd");
  var gender = document.querySelector(".gender");
  var displayName = document.querySelector(".name");
  var phone = document.querySelector(".phone");
  var email = document.querySelector(".email");
  var error1 = document.querySelector(".error-1");
  var error2 = document.querySelector(".error-2");
  var error3 = document.querySelector(".error-3");
  var error4 = document.querySelector(".error-4");
  var error5 = document.querySelector(".error-5");
  var error6 = document.querySelector(".error-6");
  var error7 = document.querySelector(".error-7");

  let isUsername = false;
  let isPwd = false;

  form.onsubmit = (e) => {
    e.preventDefault();
    if (username.value == "") {
      error1.innerText = "Bạn cần nhập Tài Khoản, tối thiểu 5 ký tự";
      username.classList.add("invalid");
    }
    if (password.value == "") {
      error2.innerText = "Bạn cần nhập Mật khẩu, tối thiểu 10 ký tự";
      password.classList.add("invalid");
    }
    if (rePassword.value == "") {
      error3.innerText = "Bạn cần nhập đúng mật khẩu đã nhập";
      rePassword.classList.add("invalid");
    }
    if (gender.value == "") {
      error4.innerText = "Bạn cần nhập đúng mật khẩu đã nhập";
      gender.classList.add("invalid");
    }
    if (displayName.value == "") {
      error5.innerText = "Bạn cần nhập tên Hiển thị";
      displayName.classList.add("invalid");
    }
    if (email.value == "") {
      error6.innerText = "Bạn cần nhập email";
      email.classList.add("invalid");
      if(email.valie !== ""){
        const pattern =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!pattern.test(email.value)) {
        error6.innerText = "Bạn cần nhập đúng định dạng email";
        email.classList.add("invalid");
      } else {
          email.classList.remove("invalid");
          error6.innerText = "";
      }
      }
    }
    if (phone.value == "") {
      error7.innerText = "Bạn cần nhập Số điện thoại";
      phone.classList.add("invalid");
    }

    username.onkeyup = () => {
      if (username.value !== "") {
        error1.innerText = "";
        username.classList.remove("invalid");
      }
    };

    password.onkeyup = () => {
      if (password.value !== "") {
        error2.innerText = "";
        password.classList.remove("invalid");
      }
    };

    rePassword.onkeyup = () => {
      if (rePassword.value !== "") {
        error3.innerText = "";
        rePassword.classList.remove("invalid");
      }
    };
    gender.onkeyup = () => {
      if (gender.value !== "") {
        error4.innerText = "";
        gender.classList.remove("invalid");
      }
    };
    displayName.onkeyup = () => {
      if (displayName.value !== "") {
        error5.innerText = "";
        displayName.classList.remove("invalid");
      }
    };
    email.onkeyup = () => {
        if (email.value !== "") {
            error6.innerText = "";
            email.classList.remove("invalid");
          }
    };

    phone.onkeyup = () => {
      if (phone.value !== "") {
        error7.innerText = "";
        phone.classList.remove("invalid");
      }
    };

    if (
      !username.classList.contains("invalid") &&
      !password.classList.contains("invalid") &&
      !rePassword.classList.contains("invalid") &&
      !gender.classList.contains("invalid") &&
      !displayName.classList.contains("invalid") &&
      !email.classList.contains("invalid") &&
      !phone.classList.contains("invalid")
    ) {
      console.log("Form submitted");
      alert("Đăng ký thành công");
    }
  };
});
