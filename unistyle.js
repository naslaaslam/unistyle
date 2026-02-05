let signup = document.getElementById("sign");
let button = document.getElementById("btn");
let loginbtn=document.getElementById("log");
const login=document.getElementById("login")
let signbtn=document.getElementById("reg")

button.addEventListener("click", openSignup);
    
function openSignup(){
  signup.style.display = "flex";
  login.style.display="none"

};

window.onclick = function (e){
  if (e.target === signup || e.target===login) {
    signup.style.display = "none";
    login.style.display="none"
    
  }
};


loginbtn.addEventListener("click",()=>{
    login.style.display="flex";
    signup.style.display="none"
})

signbtn.addEventListener('click',openSignup )