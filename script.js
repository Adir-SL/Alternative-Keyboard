window.abcEng = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
window.abcHeb = ["א","ב","ג","ד","ה","ו","ז","ח","ט","י","כ","ך","ל","מ","ם","נ","ן","ס","ע","פ","ף","צ","ץ","ק","ר","ש","ת"]
temp = window.abcHeb;
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
            document.getElementById("textField").innerHTML += '<button class="keepLang engButton" onclick="keyFix(event);" keyValue="' + e.target.getAttribute("keyValue") + '">' + e.target.getAttribute("keyValue") + "</button>";
        }else{
            document.getElementById("textField").innerHTML += '<button class="keepLang" onclick="keyFix(event);" keyValue="' + e.target.getAttribute("keyValue") + '">' + e.target.getAttribute("keyValue") + "</button>";
        }
    }
    buttonsOn();
}
function buttonsOn() {
    document.getElementById("buttonWrapper").getElementsByTagName("button")[0].className = "";
    document.getElementById("buttonWrapper").getElementsByTagName("button")[1].className = "greenBtn";
}
function approveWord() {
    document.getElementById("innerWords").innerHTML += "<button onclick='wordSelect(event);'>" + document.getElementById("textField").innerText + "</button>";
    document.getElementById("textField").innerHTML = "";
    document.getElementById("buttonWrapper").getElementsByTagName("button")[1].style.transform = "scale(0.8)";
    setTimeout(function () {
        toggleButtons();
        document.getElementById("buttonWrapper").getElementsByTagName("button")[1].style.transform = "scale(1)";
    }, 100);
}
function cancelWord() {
    document.getElementById("textField").innerHTML = "";

    document.getElementById("buttonWrapper").getElementsByTagName("button")[0].style.transform = "scale(0.8)";
    setTimeout(function () {
        toggleButtons();
        document.getElementById("buttonWrapper").getElementsByTagName("button")[0].style.transform = "scale(1)";
    }, 100);
}
function toggleButtons() {
    if (document.getElementById("buttonWrapper").getElementsByTagName("button")[0].className == "disabled") {
        document.getElementById("buttonWrapper").getElementsByTagName("button")[0].className = "";
        document.getElementById("buttonWrapper").getElementsByTagName("button")[1].className = "greenBtn";
    } else {
        document.getElementById("buttonWrapper").getElementsByTagName("button")[0].className = "disabled";
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
function wordSelect(e){
    resetButtons();
    e.target.className = "selectButton";
}
function keyFix(e){
    resetButtons();
    e.target.className = "keepLang selectButton";
}
function resetButtons(){
    var x = document.getElementsByTagName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("selectButton");
    }
}