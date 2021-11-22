var selectObj = document.querySelector("#select");
selectObj.disable = "true";
var radios = document.querySelectorAll("input[name=course]");
function addOption(selectObj,optionText,optionValue) {
    var optionObj = document.createElement('option');
    optionObj.innerHTML = optionText;
    optionObj.value = optionValue;
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

console.log(window);
console.log(document);



var regBtn = document.querySelector("#registerBtn");
var close = document.querySelector(".close");
var modal = document.querySelector(".modal");
console.log(modal.style);
regBtn.addEventListener('click',function(){
    modal.style.display = "block";
});
close.addEventListener('click',function(){
    modal.style.display = "none";
})
window.addEventListener('click',function(event){
    if (event.target == modal) {
        modal.style.display = "none";
    }
})
