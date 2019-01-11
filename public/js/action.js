/*** ajax request to server**/
window.onload = function(){
  const btn= document.getElementById('login')
  btn.addEventListener("click", myFunction);
  function myFunction(event) {
  var username=document.getElementById("username").value;
  var password=document.getElementById("password").value;
  console.log(username);
  console.log(password);
  event.preventDefault();
  $.ajax({
    type:"POST",
    url:"/",
    contentType:"application/json",
    data:JSON.stringify({"username":username,"password":password}),
    success:(data)=>{
      console.log(data)
    }
  });}
}
