window.addEventListener("load", function () {
  var form = document.querySelector(".form-1");
  var username = document.querySelector(".username");
  var password = document.querySelector(".password");
  var error1 = document.querySelector(".error-1");
  var error2 = document.querySelector(".error-2");

  let isUsername = false;
  let isPwd = false;

    form.onsubmit = (e) => {
        e.preventDefault();
        if(username.value == ""){
            error1.innerText = "Bạn cần nhập Tài Khoản, tối đa 5 ký tự";
            username.classList.add('invalid');
        }
        if(password.value == ""){
            error2.innerText = "Bạn cần nhập Mật khẩu, tối đa 10 ký tự";
            password.classList.add('invalid');
        }

        username.onkeyup = () => {
            if(username.value !== ""){
                error1.innerText = "";
                username.classList.remove('invalid');
            }
        }

        password.onkeyup = () => {
            if(password.value !== ""){
                error2.innerText = "";
                password.classList.remove('invalid');
            }
        }

        if(!username.classList.contains('invalid') && !password.classList.contains('invalid')){
            console.log("Form submitted");
            alert("Đăng nhập thành công");
        }
    }
});
