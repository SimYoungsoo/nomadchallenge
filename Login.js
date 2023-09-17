const loginform = document.querySelector("#loginform");

function clicking(event){
    event.preventDefault();
    const loginput = document.querySelector("#loginput");
    const welcome = document.querySelector("#welcome");
    const username = loginput.value;
    if(username==""||username.length>10) {
        alert("Please check your name!");
    } else{
        welcome.innerText = `Hello ${username}!`;
        localStorage.setItem("loginuser",username);
        loginform.classList.add("hidden");
        welcome.classList.remove("hidden");
    }
}

const loginuser = localStorage.getItem("loginuser");

if(loginuser==null){
    loginform.classList.remove("hidden");
    loginform.addEventListener("submit", clicking);

} else{
    welcome.classList.remove("hidden");
    welcome.innerText = `Hello ${loginuser}!`;
}

