var selectObj = document.querySelector("#select");
selectObj.disable = "true";
var radios = document.querySelectorAll("input[name=course]");
function addOption(selectObj,text,value) {
    var optionObj = document.createElement('option');
    optionObj.innerHTML = text;
    optionObj.value = value;
    selectObj.appendChild(optionObj);
} 


function radioChk(event) {
    console.log(event);
    selectObj.disable = false;
    selectObj.innerHTML = "";
    if (event.target.value == "english") {
        for (var key in english) {
            addOption(selectObj,key,english[key]);
        }
    }else if (event.target.value == "career") {
        for (var key in career) {
            addOption(selectObj,key,career[key]);
        }
    }
}

window.addEventListener('load',function(){
    var inputObj = document.querySelectorAll("input");
    for (var i=0; i<radios.length; i++) {
        radios[i].addEventListener('change',radioChk);
    }
    for (var i=0; i<inputObj.length; i++) {
        inputObj[i].addEventListener('focus',changeBg);
        inputObj[i].addEventListener('blur',changeBg);
    }
});


var english = {
    "ESL":"ESL", 
    "Tofel":"Tofel", 
    "Ielts":"Ielts"
}

var career = {
    "Web Development":"WD",
    "User Interface":"UI", 
    "User experience":"UX", 
    "Hospitality Management": "HM", 
    "Digital Marketing":"DM"
}

function changeBg(event) {
    console.log(event);
    if (event.type == 'focus') {
        event.target.style.backgroundColor = "lightBlue";
    }else if (event.type == 'blur') {
        event.target.style.backgroundColor = "white";
    }
}

var regBtn = document.querySelector("#registerBtn");
var close = document.querySelector(".close");
var RegModal = document.querySelector(".RegModal");
regBtn.addEventListener('click',function(){
    RegModal.style.display = "block";
});
close.addEventListener('click',function(){
    RegModal.style.display = "none";
});
window.addEventListener('click',function(event){
    if (event.target == RegModal) {
        RegModal.style.display = "none";
    }
});

// function for log
var LogBtn = document.querySelector("#loginBtn");
var LogModal = document.querySelector(".LogModal");
var Close = document.querySelector(".Close");
LogBtn.addEventListener('click',function(){
    LogModal.style.display = "block";
});
Close.addEventListener('click',function(){
    LogModal.style.display = "none";
});
window.addEventListener('click',function(event){
    if (event.target == LogModal) {
        LogModal.style.display = "none";
    }
})
