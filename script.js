const clock = document.querySelector("#clock");

function getclock(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds(); 
    clock.innerText= `Time now : ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getSeconds()).padStart(2,"0")}`;
}

getclock();
setInterval(getclock, 1000);