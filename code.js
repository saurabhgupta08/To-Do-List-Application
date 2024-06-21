const inputBox=document.getElementById("input-box");
const listContainer1=document.getElementById("list-container1");

function addTask(){
    if(inputBox.value===''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer1.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData1();
}

listContainer1.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData1();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData1();
    }
},false);

//For save data using browser localstorage

function saveData1(){
    localStorage.setItem("data",listContainer1.innerHTML);
}
function showTask1(){
    listContainer1.innerHTML=localStorage.getItem("data");
}
showTask();