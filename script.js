function keyCheck(e) {
    console.log(e.target.getAttribute("keyValue"));
    e.target.style.transform = "translateY(-50%)";
    setTimeout(function () {
        setTimeout(function () {
            e.target.style.transform = "translateY(0)";
        }, 100);
    }, 100);
    if (document.getElementById("textField").getElementsByTagName("button").length < 9) {
        document.getElementById("textField").innerHTML += '<button class="keyButton" onclick="keyCheck(event);" keyValue="' + e.target.getAttribute("keyValue") + '">' + e.target.getAttribute("keyValue") + "</button>";
    }
    buttonsOn();
}
function buttonsOn() {
    document.getElementById("buttonWrapper").getElementsByTagName("button")[0].className = "";
    document.getElementById("buttonWrapper").getElementsByTagName("button")[1].className = "greenBtn";
}
function approveWord() {
    document.getElementById("innerWords").innerHTML += "<button>" + document.getElementById("textField").innerText + "</button>";
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
    // alert(e.target.innerText)
    if(e.target.innerText == "a"){
        document.getElementsByClassName("statusBar")[0].getElementsByTagName("button")[1].innerText = "א";
        document.getElementsByClassName("statusBar")[0].getElementsByTagName("button")[1].setAttribute("keyValue","א");
    }else{
        document.getElementsByClassName("statusBar")[0].getElementsByTagName("button")[1].innerText = "a";
        document.getElementsByClassName("statusBar")[0].getElementsByTagName("button")[1].setAttribute("keyValue","a");
    }
}