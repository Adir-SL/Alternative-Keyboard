window.abcEng = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",",","."]
window.abcHeb = ["א","ב","ג","ד","ה","ו","ז","ח","ט","י","כ","ך","ל","מ","ם","נ","ן","ס","ע","פ","ף","צ","ץ","ק","ר","ש","ת","."]
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
    // console.log(e.target.getAttribute("keyValue"));
    // alert(e.target.getAttribute("keyValue"));
    document.getElementById("biggerButtons").innerHTML = "";
    document.getElementById("innerKeyboard").classList.remove("disabled");
    if(document.getElementsByClassName("selectButton").length == 0){
        document.getElementById("textField").classList.add("fieldSelected");
    }
    e.target.style.transform = "translateY(-50%)";
    setTimeout(function () {
        setTimeout(function () {
            e.target.style.transform = "translateY(0)";
        }, 100);
    }, 100);
    if(document.getElementsByClassName("selectButton")[0] == undefined || document.getElementsByClassName("selectButton")[0].parentNode.id == "innerWords"){
        if (document.getElementById("textField").getElementsByTagName("button").length < 8) {
            if(temp[0] == "a"){
                document.getElementById("textField").innerHTML += '<button class="keepLang engButton" num="'+window.keyNum+'" draggable="true" onclick="selectMe(event);" ontouchstart="dragElement(event);" ontouchmove="touchHandler(event);" ontouchend="stopDrag(event);" keyValue="' + e.target.getAttribute("keyValue") + '">' + e.target.getAttribute("keyValue") + "</button>";
            }else{
                document.getElementById("textField").innerHTML += '<button class="keepLang" num="'+window.keyNum+'" draggable="true" onclick="selectMe(event);" ontouchstart="dragElement(event);" ontouchmove="touchHandler(event);" ontouchend="stopDrag(event);" keyValue="' + e.target.getAttribute("keyValue") + '">' + e.target.getAttribute("keyValue") + "</button>";
            }
            window.keyNum += 1;
        }
        // buttonsOn();
        // resetButtons();
    }else{
        document.getElementsByClassName("selectButton")[0].setAttribute("keyValue", e.target.getAttribute("keyValue"));
        document.getElementsByClassName("selectButton")[0].innerText = e.target.getAttribute("keyValue");
    }
}
function buttonsOn() {
    // document.getElementById("buttonWrapper").getElementsByTagName("button")[0].className = "redBtn";
    // document.getElementById("buttonWrapper").getElementsByTagName("button")[1].className = "greenBtn";
}
function validWords(){
    var x = document.getElementById("innerWords").getElementsByTagName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        if(x[i].innerText == ''){
            x[i].outerHTML = '';
        }
        x[i].classList.remove("lastWord");
    }
    if(document.getElementsByClassName("selectButton").length > 0){
        document.getElementsByClassName("selectButton")[0].classList.remove("selectButton");
    }
}
function approveWord() {
    if(document.getElementsByClassName("lastWord")[0] !== undefined){animApprove();}
    if(document.getElementsByClassName("selectButton").length > 0 && document.getElementsByClassName("selectButton")[0].parentNode.id == "innerWords"){
        document.getElementsByClassName("selectButton")[0].innerText = document.getElementById("textField").innerText;
        lessButtons();
        document.getElementById("textField").classList.add("innerApprove");
        document.getElementsByClassName("selectButton")[0].classList.remove("selectButton");
        animApprove();
    }else{
        if(document.getElementsByClassName("lastWord").length == 0){
            if(document.getElementById("textField").innerHTML !== ""){
        document.getElementById("innerWords").innerHTML += "<button num='"+window.wordNum+"' onclick='selectMe(event);' ontouchstart='dragElement(event);' ontouchmove='touchHandler(event);' ontouchend='stopDrag(event);'>" + document.getElementById("textField").innerText + "</button>";
        if(document.getElementById("textField").innerText.slice(-1) == "."){
            alert("DOT")
        }
            }
        }else{
            document.getElementsByClassName("lastWord")[0].innerText = document.getElementById("textField").innerText;
            document.getElementsByClassName("selectButton")[0].classList.remove("selectButton");
            document.getElementsByClassName("lastWord")[0].classList.add("selectButton");
            // document.getElementsByClassName("lastWord")[0].classList.remove("lastWord");
        }
    // document.getElementById("textField").innerHTML = "";
    document.getElementById("buttonWrapper").getElementsByClassName("greenBtn")[0].style.transform = "scale(0.8)";
    if(document.getElementById("textField").innerHTML !== ""){
        document.getElementById("textField").classList.add("innerApprove");
        validWords();
    }
    animApprove();
    }
    
}
function animApprove(){
    setTimeout(function () {
        toggleButtons();
        document.getElementById("buttonWrapper").getElementsByClassName("greenBtn")[0].style.transform = "scale(1)";
        lessButtons();
        window.keyNum = 0;
        window.wordNum += 1;
        window.localStorage.setItem('keyboardTyped', document.getElementById("innerWords").innerHTML);
        // location.reload();
    }, 100);
    setTimeout(function () {
        document.getElementById("textField").innerHTML = "";
        reNumWords();
        document.getElementById("textField").classList.remove("fieldSelected");
    }, 200);
    setTimeout(function () {
        document.getElementById("textField").classList.remove("innerApprove");
        window.localStorage.setItem('keyLang', document.getElementsByClassName("statusBar")[0].getElementsByTagName("button")[1].innerText);
        location.reload();
    }, 300);
}
function cancelWord() {
    document.getElementById("textField").classList.remove("fieldSelected");
    if(document.getElementsByClassName("selectButton").length > 0 && document.getElementsByClassName("selectButton")[0].parentNode.id == "innerWords"){
        document.getElementsByClassName("selectButton")[0].remove(this);
        document.getElementById("textField").innerHTML = "";
        lessButtons();
        reNumWords();
    }else{
        if(document.getElementsByClassName("selectButton").length > 0 && document.getElementsByClassName("selectButton")[0].parentNode.id == "textField"){
            document.getElementsByClassName("selectButton")[0].remove(this);
            lessButtons();
            reNumButtons();
        }else{
            document.getElementById("textField").innerHTML = "";
        document.getElementById("buttonWrapper").getElementsByClassName("redBtn")[0].style.transform = "scale(0.8)";
        if(document.getElementsByClassName("selectButton").length > 0){
            document.getElementsByClassName("selectButton")[0].classList.remove("selectButton");
        }
        if(document.getElementById("buttonWrapper").getElementsByTagName("button").length > 2){
            lessButtons();
        }
        setTimeout(function () {
            document.getElementById("textField").classList.add("innerCancel");
        }, 10);
        setTimeout(function () {
            document.getElementById("textField").classList.add("innerCancel");
            toggleButtons();
            document.getElementById("buttonWrapper").getElementsByClassName("redBtn")[0].style.transform = "scale(1)";
            lessButtons();
            window.keyNum = 0;
        }, 100);
        setTimeout(function () {
            document.getElementById("textField").innerHTML = "";
        }, 210);
        setTimeout(function () {
            document.getElementById("textField").classList.remove("innerCancel");
            window.localStorage.setItem('keyLang', document.getElementsByClassName("statusBar")[0].getElementsByTagName("button")[1].innerText);
            location.reload();
        }, 310);
        }
    }
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
        document.getElementsByClassName("statusBar")[0].getElementsByTagName("button")[1].style.backgroundImage = "url(icons/heb.svg)";
        temp = window.abcEng;
        changeLang();
        document.body.style.direction = "ltr";
    }else{
        document.getElementsByClassName("statusBar")[0].getElementsByTagName("button")[1].innerText = "a";
        document.getElementsByClassName("statusBar")[0].getElementsByTagName("button")[1].setAttribute("keyValue","a");
        document.getElementsByClassName("statusBar")[0].getElementsByTagName("button")[1].style.backgroundImage = "url(icons/eng.svg)";
        temp = window.abcHeb;
        changeLang();
        document.body.style.direction = "rtl";
    }
}
function selectMe(e){
    document.getElementById("textField").classList.remove("fieldSelected");
    resetButtons();
    e.target.classList.add("selectButton");
    if(e.target.parentNode.id == "innerWords"){
        var x = document.getElementsByTagName("button");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].classList.remove("lastWord");
        }

        tempY = 0;
        document.getElementById("textField").innerHTML = '';
        getSelectedWord(e.target.innerText);
        e.target.classList.add("lastWord");
    }
    moreButtons();
}
function getSelectedWord(y){
    if(tempY == y.length){
    }else{
        if(temp[0] == "a"){
            document.getElementById("textField").innerHTML += '<button class="keepLang engButton" num="'+tempY+'" draggable="true" onclick="selectMe(event);" ontouchstart="dragElement(event);" ontouchmove="touchHandler(event);" ontouchend="stopDrag(event);" keyvalue="'+y.charAt(tempY)+'">'+y.charAt(tempY)+'</button>';
        }else{
            document.getElementById("textField").innerHTML += '<button class="keepLang" num="'+tempY+'" draggable="true" onclick="selectMe(event);" ontouchstart="dragElement(event);" ontouchmove="touchHandler(event);" ontouchend="stopDrag(event);" keyvalue="'+y.charAt(tempY)+'">'+y.charAt(tempY)+'</button>';
        }
        tempY += 1;
        getSelectedWord(y);
    }
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
        document.getElementById("buttonWrapper").innerHTML = '<button class="redBtn circleBtn" onclick="cancelWord();"><i class="material-icons">cancel</i></button><button class="plusAfter circleBtn" onclick="addForward();"><i class="material-icons">east</i></button><button id="moveBackBtn" class="circleBtn" onclick="moveForward();"><i class="material-icons">east</i></button><button class="muteBtn largerMute circleBtn"><i class="material-icons">volume_up</i></button><button id="moveForBtn" class="circleBtn" onclick="moveBackward();"><i class="material-icons">west</i></button><button class="plusBefore circleBtn" onclick="addBackward();"><i class="material-icons">west</i></button><button class="greenBtn circleBtn" onclick="approveWord();"><i class="material-icons">check_circle</i></button>';
    }else{
        document.getElementById("buttonWrapper").innerHTML = '<button class="redBtn circleBtn" onclick="cancelWord();"><i class="material-icons">cancel</i></button><button class="plusAfter circleBtn" onclick="addBackward();"><i class="material-icons">east</i></button><button id="moveBackBtn" class="circleBtn" onclick="moveBackward();"><i class="material-icons">east</i></button><button class="muteBtn largerMute"><i class="material-icons">volume_up</i></button><button id="moveForBtn" class="circleBtn" onclick="moveForward();"><i class="material-icons">west</i></button><button class="plusBefore circleBtn" onclick="addForward();"><i class="material-icons">west</i></button><button class="greenBtn circleBtn" onclick="approveWord();"><i class="material-icons">check_circle</i></button>';
    }
    document.getElementById("buttonWrapper").classList.add("noGap");
}
function lessButtons(){
    document.getElementById("buttonWrapper").innerHTML = '<button class="redBtn disabled" onclick="cancelWord();"><i class="material-icons">cancel</i></button><button class="muteBtn"><i class="material-icons">volume_up</i></button><button class="greenBtn disabled" onclick="approveWord();"><i class="material-icons">check_circle</i></button>';
    document.getElementById("buttonWrapper").classList.remove("noGap");
}
function moveForward(){
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
function addForward(){
    // alert("FORWARD");
    if(document.getElementsByClassName("selectButton")[0].parentElement.id == "textField"){  
        document.getElementsByClassName("selectButton")[0].outerHTML += "<button class='keepLang selectButton' onclick='selectMe(event);' ontouchstart='dragElement(event);' ontouchmove='touchHandler(event);' ontouchend='stopDrag(event);'></button>";
        document.getElementsByClassName("selectButton")[0].classList.remove("selectButton");
        findEmptyButton();
        reNumButtons();
    }else{
        document.getElementsByClassName("selectButton")[0].outerHTML += "<button class='selectButton' onclick='selectMe(event);' ontouchstart='dragElement(event);' ontouchmove='touchHandler(event);' ontouchend='stopDrag(event);'></button>";
        document.getElementsByClassName("selectButton")[0].classList.remove("selectButton");
        document.getElementById("textField").innerHTML = "";
        findEmptyWord();
        reNumWords();
    }
}
function addBackward(){
    // alert("BACKWARD");
    if(document.getElementsByClassName("selectButton")[0].parentElement.id == "textField"){
        var node = document.createElement("button");   
        document.getElementsByClassName("selectButton")[0].parentElement.insertBefore(node, document.getElementsByClassName("selectButton")[0]);
        selectBeforeButton();
        // findEmptyButton();
        reNumButtons();
    }else{
        var node = document.createElement("button");
        document.getElementsByClassName("selectButton")[0].parentElement.insertBefore(node, document.getElementsByClassName("selectButton")[0]);
        document.getElementById("textField").innerHTML = "";
        selectBeforeWord();
        findEmptyWord();
        reNumWords();
    }
}
function selectBeforeButton(){
    var x = document.getElementById("textField").getElementsByTagName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        if(x[i].className.indexOf("selectButton") > -1){
            x[i].classList.remove("selectButton");
            x[i-1].classList.add("keepLang");
            x[i-1].classList.add("selectButton");
        }
    }
}
function selectBeforeWord(){
    var x = document.getElementById("innerWords").getElementsByTagName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        if(x[i].className.indexOf("selectButton") > -1){
            x[i].classList.remove("selectButton");
            x[i-1].classList.add("selectButton");
        }
    }
}
function findEmptyButton(){
    var x = document.getElementById("textField").getElementsByTagName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        if(x[i].getAttribute("keyvalue") == "" || x[i].getAttribute("keyvalue") == null || x[i].getAttribute("keyvalue") == undefined){
            x[i].classList.add("keepLang");
            if(temp[0] == "a"){x[i].classList.add("engButton");}
            x[i].setAttribute("keyValue", "0");
            x[i].setAttribute("onclick", "selectMe(event)");
            x[i].setAttribute("ontouchstart", "dragElement(event)");
            x[i].setAttribute("ontouchmove", "touchHandler(event)");
            x[i].setAttribute("ontouchend", "stopDrag(event)");
        }
    }
}
function findEmptyWord(){
    var x = document.getElementById("innerWords").getElementsByTagName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        if(x[i].getAttribute("keyvalue") == "" || x[i].getAttribute("keyvalue") == null || x[i].getAttribute("keyvalue") == undefined){
            // x[i].classList.add("keepLang");
            // if(temp[0] == "a"){x[i].classList.add("engButton");}
            // x[i].setAttribute("keyValue", "0");
            x[i].setAttribute("onclick", "selectMe(event)")
            x[i].setAttribute("ontouchstart", "dragElement(event)");
            x[i].setAttribute("ontouchmove", "touchHandler(event)");
            x[i].setAttribute("ontouchend", "stopDrag(event)");
        }
    }
}
function reNumButtons(){
    var x = document.getElementById("textField").getElementsByTagName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].setAttribute("num", i);
    }
}
function reNumWords(){
    var x = document.getElementById("innerWords").getElementsByTagName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].setAttribute("num", i);
        x[i].classList.remove("lastWord");
    }
}

function dragElement(e) {
    window.touchXStart = e.touches[0].clientX;
    window.touchYStart = e.touches[0].clientY;
    e.target.classList.add("selectButton")
  }
  function stopDrag(e){
    if(window.touchYStart - window.touchY > 30 || window.touchX == undefined){
    }else{
        if(window.touchYStart - window.touchY < -30 && e.target.classList[0] == "keepLang"){
            // document.getElementsByClassName("selectButton")[0].outerHTML = "";
            cancelWord();
        }
        if(window.touchXStart - window.touchX > 0 && window.touchX !== undefined){
            selectMe(e);
            resetButtons();
            e.target.classList.add("selectButton")
            document.getElementById("textField").classList.remove("fieldSelected");
            if(temp[0] == "a"){moveBackward(e);}else{moveForward(e);}
            // resetButtons();
            resetTouch();
        }else{
            selectMe(e);
            resetButtons();
            e.target.classList.add("selectButton")
            document.getElementById("textField").classList.remove("fieldSelected");
            if(temp[0] !== "a"){moveBackward(e);}else{moveForward(e);}
            // resetButtons();
            resetTouch();
        }
    }
  }
function touchHandler(touchEvent){
    window.touchX = touchEvent.touches[0].clientX;
    window.touchY = touchEvent.touches[0].clientY;
}

function fieldStop(e){
    if(window.touchYStart - window.touchY > 30 && window.touchY !== undefined){
        approveWord();
        resetTouch();
    }else{
        if(window.touchYStart - window.touchY < -30 && window.touchY !== undefined){
            console.log(e.target.id)
            if(e.target.id == "textField"){
                cancelWord();
            }
            resetTouch();
            
        }
    }
}
function resetTouch(){
    window.touchX = undefined;
    window.touchY = undefined;
}
function biggerKeys(e){
    if(e.target.className == "flexDiv"){
        if(document.getElementById("innerKeyboard").className == "disabled"){
            document.getElementById("innerKeyboard").classList.remove("disabled");
            document.getElementById("biggerButtons").innerHTML = "";
        }else{
            document.getElementById("biggerButtons").innerHTML = "";
        // document.getElementById("biggerButtons").style.left = e.clientX+"px";
        // document.getElementById("biggerButtons").style.top = e.clientY+"px";
        document.getElementById("innerKeyboard").classList.add("disabled");
        console.log(e.clientX)
        // alert(e.target.className);
        winX = document.getElementById("keyboard").clientWidth / 8;
        winY = document.getElementById("keyboard").clientHeight / 6;
        // console.log(e)
        var x = document.getElementsByClassName("keyButton");
        var i;
        for (i = 0; i < x.length; i++) {
            //x[i].offsetLeft - e.clientX < winX && x[i].offsetLeft - e.clientX > winX * -1 &&
            if(x[i].offsetLeft - e.clientX < winX && x[i].offsetLeft - e.clientX > winX * -1 && x[i].getBoundingClientRect().top - e.clientY < winY && x[i].getBoundingClientRect().top - e.clientY > winY * -1){
                // alert(x[i].getAttribute('keyValue'));
                if(x[i].getAttribute('keyValue') !== null && x[i].getAttribute('keyValue') !== undefined){
                    if(temp[0] == "a"){
                        document.getElementById("biggerButtons").innerHTML += "<button class='bigButton engButton' onclick='keyCheck(event);' keyValue="+x[i].getAttribute('keyValue')+">"+x[i].getAttribute('keyValue')+"</button>";
                    }else{
                        document.getElementById("biggerButtons").innerHTML += "<button class='bigButton' onclick='keyCheck(event);' keyValue="+x[i].getAttribute('keyValue')+">"+x[i].getAttribute('keyValue')+"</button>";
                    }
                    
                }
            }
        }
        }
        
    }
}