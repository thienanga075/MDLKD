window.addEventListener("load", function () {
    var form = document.querySelector(".form-1");
    var username = document.querySelector(".username");
    var password = document.querySelector(".password");
    var error1 = document.querySelector(".error-1");
    var error2 = document.querySelector(".error-2");

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
        console.log("Form submitted");
            alert("Đăng nhập thành công");
        }else{
            alert("Đăng nhập thất bại");
        }
    };

    function check() {
        username.onkeyup = () => {
        if (username.value !== "") {
            if (username.value.length < 10) {
            error1.innerText = "Tài khoản phải có ít nhất 10 ký tự";
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
