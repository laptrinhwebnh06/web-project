function Checkname() {
  const name = document.getElementById('name').value;
  const errorname = document.getElementById('errorname');
  const length = name.length;
  if(name == ""){
    errorname.innerHTML = "Phải nhập đầy đủ tên";
  }
  else if(length!=0 && length<6){
    errorname.innerHTML = "Tên phải dài hơn 6 ký tự"
  }
  else errorname.innerHTML = "";
}
function Checkpass() {
  const pass = document.getElementById('pass').value;
  const errorpass = document.getElementById('errorpass');
  const length = pass.length;
  if(pass == ""){
    errorpass.innerHTML = "Phải nhập đầy đủ mật khẩu";
  }
  else if(length!=0 && length<6){
    errorpass.innerHTML = "Mật khẩu phải dài hơn 6 ký tự"
  }
  else errorpass.innerHTML = "";
}
const phone = document.getElementById('phone');
const errorphone = document.getElementById('errorphone');
phone.addEventListener('blur',function(){
  const phoneValue = phone.value;
  const length = phoneValue.length;
  if(phoneValue == ""){
    errorphone.innerHTML = "Hãy nhập SDT";
  } 
  else if(length != 10)
    errorphone.innerHTML = " SĐT phải đủ 10 số";
  else errorphone.innerHTML ="";
});

phone.addEventListener('keyup',function(){
  const char = /^[0-9]+$/;
  const phoneValue = phone.value;
  if(!char.test(phoneValue))
    errorphone.innerHTML = "SDT chỉ được phép chứa ký tự chữ!";
  else errorphone.innerHTML = "";
});
function Checkemail() {
  const email = document.getElementById('email').value;
  const erroremail = document.getElementById('erroremail');
  const length = email.length;
  if(email == ""){
    erroremail.innerHTML = "Phải nhập đầy đủ email";
  }
  if(!email.includes('@gmail.com')) {
    erroremail.innerHTML = " Email phải kết thúc bằng @gmail.com";
  }
  else erroremail.innerHTML = "";
}

function Submit() {
  const name = document.getElementById('name').value;
  const errorname = document.getElementById('errorname');

  const pass = document.getElementById('pass').value;
  const errorpass = document.getElementById('errorpass');

  const phone = document.getElementById('phone').value;
  const errorphone = document.getElementById('errorphone');

  const email = document.getElementById('email').value;
  const erroremail = document.getElementById('erroremail');
  if(pass == "")
    errorpass.innerHTML = "Hãy nhập mk!";
  if(name == "")
    errorname.innerHTML = "Hãy nhập tên!";
  if(phone == "")
    errorphone.innerHTML = "Hãy nhập SDT!";
  if(email =="")
    erroremail.innerHTML = "Hãy nhập email!";
  if(name != "" && pass != "" && phone != "" && email != ""){
    alert('Register sucessful !');}
}