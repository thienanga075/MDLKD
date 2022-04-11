var formLienHe = document.getElementById('form_contact');

function validateLH(formLienHe){
  if (formLienHe.name.value.length<4){
    alert('Tên dài hơn 4 ký tự!!!');
    formLienHe.name.focus();
    return false;
  }
  var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (reg.test(formLienHe.email.value)==false){
    alert('Email không đúng!!!');
    formLienHe.email.focus();
    return false;
  }
  if(formLienHe.number.value.length<10){
      alert('Số điện thoại không đúng định dạng!!!');
      formLienHe.number.focus();
      return false;
  }
  if (formLienHe.content.value.length<10){
    alert('Nội dung liên hệ từ 10 ký tự');
    formLienHe.content.focus();
    return false;
  }
  return true;
}