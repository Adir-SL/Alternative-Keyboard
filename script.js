window.abcEng = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
window.abcHeb = ["א","ב","ג","ד","ה","ו","ז","ח","ט","י","כ","ך","ל","מ","ם","נ","ן","ס","ע","פ","ף","צ","ץ","ק","ר","ש","ת"]
temp = window.abcHeb;
window.keyNum = 0;
window.wordNum = 0;
function changeLang(){
    var x = document.getElementsByClassName("keyButton");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].setAttribute("keyValue",temp[i]);
        if(temp[0] == "a"){
            x[i].className = "keyButton engButton";
        }else{
            x[i].className = "keyButton";
        }
        if(x[i].getAttribute("keyValue") == "undefined"){
            x[i].className += " hideMe";
        }
    }
    var x = document.getElementsByClassName("keepLang");
    var i;
    for (i = 0; i < x.length; i++) {
        if(temp[0] == "a"){
            x[i].className = "keepLang engButton";
        }else{
            x[i].className = "keepLang";
        }
    }
}
function keyCheck(e) {
    console.log(e.target.getAttribute("keyValue"));
    e.target.style.transform = "translateY(-50%)";
    setTimeout(function () {
        setTimeout(function () {
            e.target.style.transform = "translateY(0)";
        }, 100);
    }, 100);
    if (document.getElementById("textField").getElementsByTagName("button").length < 9) {
        if(temp[0] == "a"){
            document.getElementById("textField").innerHTML += '<button class="keepLang engButton" num="'+window.keyNum+'" onclick="selectMe(event);" keyValue="' + e.target.getAttribute("keyValue") + '">' + e.target.getAttribute("keyValue") + "</button>";
        }else{
            document.getElementById("textField").innerHTML += '<button class="keepLang" num="'+window.keyNum+'" onclick="selectMe(event);" keyValue="' + e.target.getAttribute("keyValue") + '">' + e.target.getAttribute("keyValue") + "</button>";
        }
        window.keyNum += 1;
    }
    buttonsOn();
    resetButtons();
}
function buttonsOn() {
    document.getElementById("buttonWrapper").getElementsByTagName("button")[0].className = "redBtn";
    document.getElementById("buttonWrapper").getElementsByTagName("button")[1].className = "greenBtn";
}
function validWords(){
    var x = document.getElementById("innerWords").getElementsByTagName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        if(x[i].innerText == ''){
            x[i].outerHTML = '';
        }
    }
    if(document.getElementsByClassName("selectButton").length > 0){
        document.getElementsByClassName("selectButton")[0].classList.remove("selectButton");
    }
}
function approveWord() {
    document.getElementById("innerWords").innerHTML += "<button num='"+window.wordNum+"' onclick='selectMe(event);'>" + document.getElementById("textField").innerText + "</button>";
    document.getElementById("textField").innerHTML = "";
    document.getElementById("buttonWrapper").getElementsByClassName("greenBtn")[0].style.transform = "scale(0.8)";
    validWords();
    setTimeout(function () {
        toggleButtons();
        document.getElementById("buttonWrapper").getElementsByClassName("greenBtn")[0].style.transform = "scale(1)";
        lessButtons();
        window.keyNum = 0;
        window.wordNum += 1;
    }, 100);
}
function cancelWord() {
    document.getElementById("textField").innerHTML = "";
    document.getElementById("buttonWrapper").getElementsByClassName("redBtn")[0].style.transform = "scale(0.8)";
    if(document.getElementsByClassName("selectButton").length > 0){
        document.getElementsByClassName("selectButton")[0].classList.remove("selectButton");
    }
    if(document.getElementById("buttonWrapper").getElementsByTagName("button").length > 2){
        lessButtons();
    }
    setTimeout(function () {
        toggleButtons();
        document.getElementById("buttonWrapper").getElementsByClassName("redBtn")[0].style.transform = "scale(1)";
        lessButtons();
        window.keyNum = 0;
    }, 100);
}
function toggleButtons() {
    if (document.getElementById("buttonWrapper").getElementsByTagName("button")[0].className == "redBtn disabled") {
        document.getElementById("buttonWrapper").getElementsByTagName("button")[0].className = "redBtn";
        document.getElementById("buttonWrapper").getElementsByTagName("button")[1].className = "greenBtn";
    } else {
        document.getElementById("buttonWrapper").getElementsByTagName("button")[0].className = "redBtn disabled";
        document.getElementById("buttonWrapper").getElementsByTagName("button")[1].className = "greenBtn disabled";
    }
}
function toggleLang(e){
    if(e.target.innerText == "a"){
        document.getElementsByClassName("statusBar")[0].getElementsByTagName("button")[1].innerText = "א";
        document.getElementsByClassName("statusBar")[0].getElementsByTagName("button")[1].setAttribute("keyValue","א");
        temp = window.abcEng;
        changeLang();
        document.body.style.direction = "ltr";
    }else{
        document.getElementsByClassName("statusBar")[0].getElementsByTagName("button")[1].innerText = "a";
        document.getElementsByClassName("statusBar")[0].getElementsByTagName("button")[1].setAttribute("keyValue","a");
        temp = window.abcHeb;
        changeLang();
        document.body.style.direction = "rtl";
    }
}
function selectMe(e){
    resetButtons();
    e.target.classList.add("selectButton");
    moreButtons();
}
function resetButtons(){
    var x = document.getElementsByTagName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("selectButton");
    }
}
function moreButtons(){
    if(temp[0] == "a"){
        document.getElementById("buttonWrapper").innerHTML = '<button class="redBtn" onclick="cancelWord();"><i class="material-icons">cancel</i></button><button class="plusAfter"><i class="material-icons">east</i></button><button class="" onclick="moveBackward();"><i class="material-icons">east</i></button><button class="" onclick="moveForward();"><i class="material-icons">west</i></button><button class="plusBefore"><i class="material-icons">west</i></button><button class="greenBtn" onclick="approveWord();"><i class="material-icons">check_circle</i></button>';
    }else{
        document.getElementById("buttonWrapper").innerHTML = '<button class="redBtn" onclick="cancelWord();"><i class="material-icons">cancel</i></button><button class="plusAfter"><i class="material-icons">east</i></button><button class="" onclick="moveBackward();"><i class="material-icons">east</i></button><button class="" onclick="moveForward();"><i class="material-icons">west</i></button><button class="plusBefore"><i class="material-icons">west</i></button><button class="greenBtn" onclick="approveWord();"><i class="material-icons">check_circle</i></button>';
    }
}
function lessButtons(){
    document.getElementById("buttonWrapper").innerHTML = '<button class="redBtn disabled" onclick="cancelWord();"><i class="material-icons">cancel</i></button><button class="greenBtn disabled" onclick="approveWord();"><i class="material-icons">check_circle</i></button>';
}
function moveForward(){
    // alert(e.target)
    if(document.getElementsByClassName("selectButton")[0].parentElement.id == "textField"){
        if(Number(document.getElementsByClassName("selectButton")[0].getAttribute("num")) !== document.getElementById("textField").getElementsByTagName("button").length-1){
            tempNum = Number(document.getElementsByClassName("selectButton")[0].getAttribute("num"));
            tempKey = document.getElementById("textField").getElementsByTagName("button")[tempNum].getAttribute("keyvalue");
            document.getElementById("textField").getElementsByTagName("button")[tempNum].setAttribute("keyvalue", document.getElementById("textField").getElementsByTagName("button")[tempNum+1].getAttribute("keyvalue"));
            document.getElementById("textField").getElementsByTagName("button")[tempNum+1].setAttribute("keyValue", tempKey);
            document.getElementsByClassName("selectButton")[0].classList.remove("selectButton");
            document.getElementById("textField").getElementsByTagName("button")[tempNum+1].classList.add("selectButton");
            flatten();
        }
    }else{
        if(Number(document.getElementsByClassName("selectButton")[0].getAttribute("num")) !== document.getElementById("textField").getElementsByTagName("button").length-1){
            tempNum = Number(document.getElementsByClassName("selectButton")[0].getAttribute("num"));
            tempKey = document.getElementById("innerWords").getElementsByTagName("button")[tempNum].innerText;
            document.getElementById("innerWords").getElementsByTagName("button")[tempNum].innerText = document.getElementById("innerWords").getElementsByTagName("button")[tempNum+1].innerText;
            document.getElementById("innerWords").getElementsByTagName("button")[tempNum+1].innerText = tempKey;
            document.getElementsByClassName("selectButton")[0].classList.remove("selectButton");
            document.getElementById("innerWords").getElementsByTagName("button")[tempNum+1].classList.add("selectButton");
            flattenWords();
        }
    }
}
function moveBackward(){
    // alert(e.target)
    if(document.getElementsByClassName("selectButton")[0].parentElement.id == "textField"){
        if(Number(document.getElementsByClassName("selectButton")[0].getAttribute("num")) !== 0){
            tempNum = Number(document.getElementsByClassName("selectButton")[0].getAttribute("num"));
            tempKey = document.getElementById("textField").getElementsByTagName("button")[tempNum].getAttribute("keyvalue");
            document.getElementById("textField").getElementsByTagName("button")[tempNum].setAttribute("keyvalue", document.getElementById("textField").getElementsByTagName("button")[tempNum-1].getAttribute("keyvalue"));
            document.getElementById("textField").getElementsByTagName("button")[tempNum-1].setAttribute("keyValue", tempKey);
            document.getElementsByClassName("selectButton")[0].classList.remove("selectButton");
            document.getElementById("textField").getElementsByTagName("button")[tempNum-1].classList.add("selectButton");
            flatten();
        }
    }else{
        if(Number(document.getElementsByClassName("selectButton")[0].getAttribute("num")) !== 0){
            tempNum = Number(document.getElementsByClassName("selectButton")[0].getAttribute("num"));
            tempKey = document.getElementById("innerWords").getElementsByTagName("button")[tempNum].innerText;
            document.getElementById("innerWords").getElementsByTagName("button")[tempNum].innerText = document.getElementById("innerWords").getElementsByTagName("button")[tempNum-1].innerText;
            document.getElementById("innerWords").getElementsByTagName("button")[tempNum-1].innerText = tempKey;
            document.getElementsByClassName("selectButton")[0].classList.remove("selectButton");
            document.getElementById("innerWords").getElementsByTagName("button")[tempNum-1].classList.add("selectButton");
            flattenWords();
        }
    }
}
function flatten(){
    var x = document.getElementById("textField").getElementsByTagName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].innerText = x[i].getAttribute("keyvalue")
    }
}
function flattenWords(){
    var x = document.getElementById("innerWords").getElementsByTagName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].setAttribute("num", i);
    }
}