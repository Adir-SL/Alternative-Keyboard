// Stable Version - 6.7.21
window.abcEng = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",",","."]
window.abcHeb = ["א","ב","ג","ד","ה","ו","ז","ח","ט","י","כ","ך","ל","מ","ם","נ","ן","ס","ע","פ","ף","צ","ץ","ק","ר","ש","ת","."]
temp = window.abcHeb;
window.keyNum = 0;
window.wordNum = 0;
tempY = 0;

setTimeout(function () {
    if(document.getElementById("innerWords").className.slice(-9) !== "MoreWords"){
        document.getElementById("buttonWrapper").style.opacity = "1";
        document.getElementById("moreButtonWrapper").style.opacity = "1";
    }
    window.origKeyboard = document.getElementById("keyboard").innerHTML;
}, 50);

if(window.localStorage.getItem('wordsHeight') == null){
    setTimeout(function () {
        toggleMenu();
    }, 10);
}

function changeLang(){
    var x = document.getElementsByClassName("keyButton");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].setAttribute("keyValue",temp[i-1]);
        if(temp[0] == "a"){
            x[i].className = "keyButton engButton";
        }else{
            x[i].className = "keyButton";
        }
        if(x[i].getAttribute("keyValue") == "undefined"){
            x[i].className += " hideMe";
        }
        document.getElementsByClassName("keyButton")[0].classList.add("absBtn");
        document.getElementsByClassName("keyButton")[0].classList.remove("hideMe");
        document.getElementsByClassName("keyButton")[0].setAttribute("keyValue",temp[0]);
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
function selectField(){
    resetButtons();
    document.getElementById("textField").classList.add('fieldSelected');
}
function keyCheck(e) {
    if(document.getElementsByClassName("muteBtn")[0].className == "muteBtn"){
        testNum = e.target.getAttribute("keyvalue");
        testNum = temp.lastIndexOf(testNum);
        document.getElementsByClassName("letterSound")[testNum].play();
    }

    if(document.getElementsByClassName("selectButton")[0] == undefined && document.getElementById("textField").getElementsByTagName("button").length < 7){
        e.target.style.opacity = 0;
    }
    document.getElementById("biggerButtons").innerHTML = "";
    document.getElementById("innerKeyboard").classList.remove("disabled");
    document.getElementById("keyboard").classList.remove("grayKeys");
    if(document.getElementsByClassName("selectButton").length == 0){
        // document.getElementById("textField").classList.add("fieldSelected");
    }
    document.getElementsByClassName("absBtn")[0].style.transition = "all 1ms ease-in-out 0s";
    document.getElementsByClassName("absBtn")[0].setAttribute("keyValue", e.target.getAttribute("keyValue"));
    document.getElementsByClassName("absBtn")[0].style.left = e.target.offsetLeft+"px";
    document.getElementsByClassName("absBtn")[0].style.top = e.target.offsetTop+"px";
    document.getElementsByClassName("absBtn")[0].style.backgroundColor = "#CCE2FF";
    document.getElementsByClassName("absBtn")[0].style.color = "#001D6C";
    document.getElementsByClassName("absBtn")[0].style.display = "block";
    document.getElementsByClassName("absBtn")[0].style.opacity = "1";

    //New animations - 8.7.21
    
    if(document.getElementsByClassName("selectButton")[0] == undefined || document.getElementsByClassName("selectButton")[0].parentNode.id == "innerWords"){
        if (document.getElementById("textField").getElementsByTagName("button").length < 7) {
            if(temp[0] == "a"){
                document.getElementById("textField").innerHTML += '<button class="keepLang lastAnim engButton" num="'+window.keyNum+'" draggable="true" onclick="selectMe(event);" ontouchstart="dragElement(event);" ontouchmove="touchHandler(event);" ontouchend="stopDrag(event);" keyValue="' + e.target.getAttribute("keyValue") + '">' + e.target.getAttribute("keyValue") + "</button>";
                setTimeout(function () {
                document.getElementsByClassName("absBtn")[0].style.transition = "all 300ms ease-in-out 0s";
                window.btnNum = document.getElementById("textField").getElementsByTagName("button").length-1;
                document.getElementsByClassName("absBtn")[0].style.left = document.getElementById("textField").getElementsByTagName("button")[window.btnNum].offsetLeft+"px";
                document.getElementsByClassName("absBtn")[0].style.top = document.getElementById("textField").getElementsByTagName("button")[window.btnNum].offsetTop+"px";
                document.getElementsByClassName("absBtn")[0].style.backgroundColor = "#3087FF";
                document.getElementsByClassName("absBtn")[0].style.color = "#ffffff";
                setTimeout(function () {
                    document.getElementsByClassName("absBtn")[0].style.display = "none";
                }, 300);
                setTimeout(function () {
                    document.getElementsByClassName("lastAnim")[0].classList.remove("lastAnim");
                }, 600);
                }, 50);
            }else{
                console.log("Key: "+e.target.getAttribute("keyValue"))
                document.getElementById("textField").innerHTML += '<button class="keepLang lastAnim" num="'+window.keyNum+'" draggable="true" onclick="selectMe(event);" ontouchstart="dragElement(event);" ontouchmove="touchHandler(event);" ontouchend="stopDrag(event);" keyValue="' + e.target.getAttribute("keyValue") + '">' + e.target.getAttribute("keyValue") + "</button>";
                setTimeout(function () {
                document.getElementsByClassName("absBtn")[0].style.transition = "all 300ms ease-in-out 0s";
                window.btnNum = document.getElementById("textField").getElementsByTagName("button").length-1;
                document.getElementsByClassName("absBtn")[0].style.left = document.getElementById("textField").getElementsByTagName("button")[window.btnNum].offsetLeft+"px";
                document.getElementsByClassName("absBtn")[0].style.top = document.getElementById("textField").getElementsByTagName("button")[window.btnNum].offsetTop+"px";
                document.getElementsByClassName("absBtn")[0].style.backgroundColor = "#3087FF";
                document.getElementsByClassName("absBtn")[0].style.color = "#ffffff";
                setTimeout(function () {
                    document.getElementsByClassName("absBtn")[0].style.display = "none";
                    e.target.style.opacity = 1;
                }, 300);
                setTimeout(function () {
                    document.getElementsByClassName("lastAnim")[0].classList.remove("lastAnim");
                }, 600);
                }, 50);
            }
            window.keyNum += 1;
        }
    }else{
        document.getElementsByClassName("selectButton")[0].setAttribute("keyValue", e.target.getAttribute("keyValue"));
        document.getElementsByClassName("selectButton")[0].innerText = e.target.getAttribute("keyValue");

        setTimeout(function () {
            document.getElementsByClassName("absBtn")[0].style.transition = "all 300ms ease-in-out 0s";
            document.getElementsByClassName("absBtn")[0].style.opacity = "0";
            setTimeout(function () {
                document.getElementsByClassName("absBtn")[0].style.display = "none";
            }, 400);
        }, 100);
    }
}
function buttonsOn() {
}
function validWords(){
    if(document.getElementById("innerWords").getElementsByTagName("button").length !== 0){
        var x = document.getElementById("innerWords").getElementsByTagName("button");
        var i;
        for (i = 0; i < x.length; i++) {
            if(x[i].innerText == ''){
                x[i].outerHTML = '';
            }
            if(document.getElementsByClassName("lastWord").length > 0){
                // x[i].classList.remove("lastWord");
            }
        }
        if(document.getElementsByClassName("selectButton").length > 0){
            document.getElementsByClassName("selectButton")[0].classList.remove("selectButton");
        }
    }
}
function approveWord() {
    // if(document.getElementsByClassName("lastWord")[0] !== undefined){animApprove();}
    if(document.getElementsByClassName("selectButton").length > 0 && document.getElementsByClassName("selectButton")[0].parentNode.id == "innerWords"){
        document.getElementsByClassName("selectButton")[0].innerText = document.getElementById("textField").innerText;
        lessButtons();
        document.getElementById("textField").classList.add("innerApprove");
        document.getElementsByClassName("selectButton")[0].classList.remove("selectButton");
        animApprove();
    }else{
        if(document.getElementsByClassName("lastWord").length == 0){
            if(document.getElementById("textField").innerHTML !== ""){
        document.getElementById("innerWords").innerHTML += "<button num='"+window.wordNum+"' class='opacMe' onclick='selectMe(event);' ontouchstart='dragElement(event);' ontouchmove='touchHandler(event);' ontouchend='stopDrag(event);'>" + document.getElementById("textField").innerText + "</button>";
        animApprove();
            }
        }else{
            // alert("L")
            document.getElementsByClassName("lastWord")[0].innerText = document.getElementById("textField").innerText;
            document.getElementsByClassName("selectButton")[0].classList.remove("selectButton");
            
            setTimeout(function(){
                // document.getElementsByClassName("lastWord")[0].classList.add("selectButton");
                animApprove();
            }, 100);
        }
    document.getElementById("buttonWrapper").getElementsByClassName("greenBtn")[0].style.transform = "scale(0.8)";
    if(document.getElementById("textField").innerHTML !== ""){
        document.getElementById("textField").classList.add("innerApprove");
        validWords();
    }
    // animApprove();
    }
    if(document.getElementById("textField").innerText.slice(-1) == "."){
        document.getElementById("innerWords").innerHTML += "<br/>";
    }
}

function animApproveT(){
    document.getElementsByClassName("absWord")[0].style.left = document.getElementById("textField").getElementsByTagName("button")[0].offsetLeft+"px";
    document.getElementsByClassName("absWord")[0].style.top = document.getElementById("textField").getElementsByTagName("button")[0].offsetTop+"px";
    setTimeout(function () {
        document.getElementsByClassName("absWord")[0].style.left = document.getElementById("innerWords").getElementsByTagName("button")[window.wordNum].offsetLeft+"px";
        document.getElementsByClassName("absWord")[0].style.top = document.getElementById("innerWords").getElementsByTagName("button")[window.wordNum].offsetTop+"px";
    }, 300);
}
function muteFunc(){
    var x = document.getElementsByClassName("muteBtn");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.toggle('disabled');
    }
}
function animApprove(){
    if(temp[0] == "a"){
        document.getElementsByClassName("absWord")[0].style.left = document.getElementById("textField").getElementsByTagName("button")[0].getBoundingClientRect().left+(document.getElementsByClassName("absWord")[0].offsetWidth)-(document.getElementById("textField").getElementsByTagName("button")[0].offsetWidth*4)+"px";
    }else{
        document.getElementsByClassName("absWord")[0].style.left = document.getElementById("textField").getElementsByTagName("button")[0].getBoundingClientRect().left-document.getElementsByClassName("absWord")[0].offsetWidth+document.getElementById("textField").getElementsByTagName("button")[0].offsetWidth+"px";
    }
    document.getElementById("textField").style.transform = "translateY(-50%)";
    document.getElementById("textField").style.opacity = "0";
    document.getElementsByClassName("absWord")[0].style.top = document.getElementById("textField").getElementsByTagName("button")[0].getBoundingClientRect().top+"px";
    document.getElementsByClassName("absWord")[0].innerText = document.getElementById("textField").innerText;
    document.getElementsByClassName("absWord")[0].style.display = 'block';
    document.getElementsByClassName("absWord")[0].style.opacity = "1";
    tempCount = document.getElementById("innerWords").getElementsByTagName("button").length-1;
    document.getElementById("innerWords").getElementsByTagName("button")[tempCount].style.transform = "translateX(-20vw)";
    document.getElementById("innerWords").getElementsByTagName("button")[tempCount].style.transition = "all 200ms ease-out";
    setTimeout(function () {
        document.getElementsByClassName("absWord")[0].style.fontSize = "5vmin";
        document.getElementsByClassName("absWord")[0].style.letterSpacing = "normal";
        document.getElementsByClassName("absWord")[0].style.left = document.getElementById("innerWords").getElementsByTagName("button")[tempCount].getBoundingClientRect().left+"px";
        document.getElementsByClassName("absWord")[0].style.top = document.getElementById("innerWords").getElementsByTagName("button")[tempCount].getBoundingClientRect().top+"px";
        toggleButtons();
        document.getElementById("buttonWrapper").getElementsByClassName("greenBtn")[0].style.transform = "scale(1)";
        lessButtons();
        window.keyNum = 0;
        window.wordNum += 1;
        document.getElementById("textField").style.transition = "all 0s linear";
        document.getElementById("textField").style.transform = "translateY(50%)";
        document.getElementById("innerWords").getElementsByTagName("button")[tempCount].style.transform = "translateX(0)";
    }, 100);
    setTimeout(function () {
        document.getElementById("innerWords").getElementsByTagName("button")[tempCount].classList.remove("opacMe");
        document.getElementById("textField").innerHTML = "";
        reNumWords();
        document.getElementById("textField").classList.remove("fieldSelected");
        document.getElementsByClassName("absWord")[0].style.opacity = 0;
        window.localStorage.setItem('keyboardTyped', document.getElementById("innerWords").innerHTML);
        document.getElementById("textField").style.transition = "all 100ms ease-in-out, background-color 200ms linear 100ms";
        document.getElementById("textField").style.transform = "translateY(0)";
        document.getElementById("textField").style.opacity = "1";
    }, 200);
    setTimeout(function () {
        document.getElementById("textField").classList.remove("innerApprove");
        window.localStorage.setItem('keyLang', document.getElementById("langButton").innerText);
        window.localStorage.setItem('wordsHeight', document.getElementById("innerWords").className);
        //location.reload();
        window.origKeyboard = document.getElementById("keyboard").innerHTML;
        resetUI();
    }, 400);
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
            window.localStorage.setItem('keyLang', document.getElementById("langButton").innerText);
            window.localStorage.setItem('wordsHeight', document.getElementById("innerWords").className);
            //location.reload();
            resetUI();
        }, 310);
        }
    }
}
function resetUI(){
    document.getElementById("keyboard").innerHTML = window.origKeyboard;
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
        document.getElementById("langButton").innerText = "א";
        document.getElementById("langButton").setAttribute("keyValue","א");
        document.getElementById("langButton").style.backgroundImage = "url(icons/heb.svg)";
        temp = window.abcEng;
        changeLang();
        document.body.style.direction = "ltr";
        document.getElementById("keyboard").classList.add("engKeyboard");
    }else{
        document.getElementById("langButton").innerText = "a";
        document.getElementById("langButton").setAttribute("keyValue","a");
        document.getElementById("langButton").style.backgroundImage = "url(icons/eng.svg)";
        temp = window.abcHeb;
        changeLang();
        document.body.style.direction = "rtl";
        document.getElementById("keyboard").classList.remove("engKeyboard");
    }
}
function selectMe(e){
    // console.log(e.target.classList.length)
    if(e.target.classList.length > 1){
        setTimeout(function(){
            document.getElementById("textField").classList.remove("fieldSelected");
            if(e.target.parentNode.id == "innerWords"){
                // resetButtons();
                var x = document.getElementsByTagName("button");
                var i;
                for (i = 0; i < x.length; i++) {
                    x[i].classList.remove("lastWord");
                }
    
                tempY = 0;
                document.getElementById("textField").innerHTML = '';
                // getSelectedWord(e.target.innerText);
                e.target.classList.remove("lastWord");
                e.target.classList.remove("selectButton");
                lessButtons();
                // e.target.classList.add("selectButton");
            }else{
                document.getElementsByClassName("lastWord")[0].classList.add("selectButton");
                // e.target.classList.add("selectButton");
            }
            // moreButtons();
            document.getElementById("textField").classList.remove("fieldSelected");
            // setTimeout(function(){ document.getElementById("textField").classList.remove("fieldSelected"); }, 10);
        }, 10);
    }else{
        setTimeout(function(){
            document.getElementById("textField").classList.remove("fieldSelected");
            // alert(e.target.classList.length)
            if(e.target.parentNode.id == "innerWords"){
                resetButtons();
                var x = document.getElementsByTagName("button");
                var i;
                for (i = 0; i < x.length; i++) {
                    x[i].classList.remove("lastWord");
                }
                
                tempY = 0;
                document.getElementById("textField").innerHTML = '';
                getSelectedWord(e.target.innerText);
                e.target.classList.add("lastWord");
                e.target.classList.add("selectButton");
            }else{
                e.target.classList.add("selectButton");
            }
            moreButtons();
            document.getElementById("textField").classList.remove("fieldSelected");
            // setTimeout(function(){ document.getElementById("textField").classList.remove("fieldSelected"); }, 10);
        }, 10);
    }   
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
        var x = document.getElementById("moreButtonWrapper").getElementsByClassName("circleBtn");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].classList.remove("skinButton")
        }
        document.getElementById("moreButtonWrapper").getElementsByClassName("redBtn")[0].classList.add("circleBtn");
        document.getElementById("moreButtonWrapper").getElementsByClassName("greenBtn")[0].classList.add("circleBtn");
        document.getElementById("moreButtonWrapper").classList.add("noGap");

    }else{
        var x = document.getElementById("moreButtonWrapper").getElementsByClassName("circleBtn");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].classList.remove("skinButton")
        }
        document.getElementById("moreButtonWrapper").getElementsByClassName("redBtn")[0].classList.add("circleBtn");
        document.getElementById("moreButtonWrapper").getElementsByClassName("greenBtn")[0].classList.add("circleBtn");
        document.getElementById("moreButtonWrapper").classList.add("noGap");

    }
}
function lessButtons(){
    document.getElementById("moreButtonWrapper").classList.remove("noGap");
    var x = document.getElementById("moreButtonWrapper").getElementsByClassName("circleBtn");
        var i;
        for (i = 0; i < x.length; i++) {
            if(x[i].classList[0] !== "redBtn" && x[i].classList[0] !== "greenBtn"){
                x[i].classList.add("skinButton")
            }
        }
        document.getElementById("moreButtonWrapper").getElementsByClassName("redBtn")[0].classList.remove("circleBtn");
        document.getElementById("moreButtonWrapper").getElementsByClassName("greenBtn")[0].classList.remove("circleBtn");

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
        if(Number(document.getElementsByClassName("selectButton")[0].getAttribute("num")) !== document.getElementById("innerWords").getElementsByTagName("button").length-1){
            tempNum = Number(document.getElementsByClassName("selectButton")[0].getAttribute("num"));
            tempKey = document.getElementById("innerWords").getElementsByTagName("button")[tempNum].innerText;
            document.getElementById("innerWords").getElementsByTagName("button")[tempNum].innerText = document.getElementById("innerWords").getElementsByTagName("button")[tempNum+1].innerText;
            document.getElementById("innerWords").getElementsByTagName("button")[tempNum+1].innerText = tempKey;
            document.getElementsByClassName("selectButton")[0].classList.remove("selectButton");
            document.getElementById("innerWords").getElementsByTagName("button")[tempNum+1].classList.add("selectButton");
            flattenWords();
            //removes the lastWord bug
            var x = document.getElementById("innerWords").getElementsByTagName("button");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].classList.remove("lastWord");
            }
        }
    }
    // setTimeout(function(){
    //     if(document.getElementsByClassName("selectButton").length > 0){
    //         document.getElementsByClassName("selectButton")[0].classList.remove("selectButton");
    //     }
    // }, 300);
    // resetButtons();
    // lessButtons();
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
            //removes the lastWord bug
            var x = document.getElementById("innerWords").getElementsByTagName("button");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].classList.remove("lastWord");
            }
        }
    }
    // setTimeout(function(){
    //     if(document.getElementsByClassName("selectButton").length > 0){
    //         document.getElementsByClassName("selectButton")[0].classList.remove("selectButton");
    //     }
    // }, 300);
    // resetButtons();
    // lessButtons();
}
function swipeIt(){
    //Additional functionality that only happpens of swipes.
    setTimeout(function(){
        document.getElementsByClassName("selectButton")[0].classList.remove("selectButton");
        document.getElementById("textField").innerHTML = "";
    }, 300);
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
function toggleMenu(){
    document.getElementById("keyboard").classList.toggle("hiddenButtons");
    document.getElementById("innerWords").classList.toggle("showMoreWords");
    if(document.getElementById("innerWords").className.slice(-9) !== "MoreWords"){
        document.getElementById("buttonWrapper").style.opacity = "1";
        document.getElementById("moreButtonWrapper").style.opacity = "1";
    }else{
        document.getElementById("buttonWrapper").style.opacity = "0";
        document.getElementById("moreButtonWrapper").style.opacity = "0";
    }
}
function toggleKeys(){
    document.getElementById("keyboard").classList.toggle("noKeyboard");
    document.getElementById("innerWords").classList.toggle("showAll");
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
        if(temp[0] == "a"){x[i].classList.add("engButton");}
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
    // e.target.classList.add("selectButton");
    if(e.target.id == "textField"){
        document.getElementById("textField").classList.add('fieldSelected');
    }else{
        document.getElementById("textField").classList.remove('fieldSelected');
    }
  }
  function stopDrag(e){
    if(window.touchYStart - window.touchY > 30 || window.touchX == undefined){
    }else{
        if(window.touchYStart - window.touchY < -30 && e.target.classList[0] == "keepLang"){
            cancelWord();
        }
        if(window.touchXStart - window.touchX > 0 && window.touchX !== undefined){
            // selectMe(e);
            resetButtons();
            e.target.classList.add("selectButton")
            document.getElementById("textField").classList.remove("fieldSelected");
            if(temp[0] == "a"){moveBackward(e);swipeIt();}else{moveForward(e);swipeIt();}
            resetTouch();
        }else{
            // selectMe(e);
            resetButtons();
            e.target.classList.add("selectButton")
            document.getElementById("textField").classList.remove("fieldSelected");
            if(temp[0] !== "a"){moveBackward(e);swipeIt();}else{moveForward(e);swipeIt();}
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
    if(e.target.classList[0] !== "flexDiv" && e.target.tagName == "DIV"){
        document.getElementById("biggerButtons").innerHTML = "";
            document.getElementById("innerKeyboard").classList.add("disabled");
            document.getElementById("keyboard").classList.add("grayKeys");
            winX = document.getElementById("keyboard").clientWidth / 8;
            winY = document.getElementById("keyboard").clientHeight / 6;
            var x = document.getElementsByClassName("keyButton");
            var i;
            for (i = 0; i < x.length; i++) {
                if(x[i].getBoundingClientRect().left - e.clientX < winX && x[i].getBoundingClientRect().left - e.clientX > winX * -1 && x[i].getBoundingClientRect().top - e.clientY < winY && x[i].getBoundingClientRect().top - e.clientY > winY * -1){
                    if(x[i].getAttribute('keyValue') !== null && x[i].getAttribute('keyValue') !== undefined){
                        if(temp[0] == "a"){
                            document.getElementById("biggerButtons").innerHTML += "<button class='bigButton engButton' onclick='keyCheck(event);' keyValue="+x[i].getAttribute('keyValue')+">"+x[i].getAttribute('keyValue')+"</button>";
                        }else{
                            document.getElementById("biggerButtons").innerHTML += "<button class='bigButton' onclick='keyCheck(event);' keyValue="+x[i].getAttribute('keyValue')+">"+x[i].getAttribute('keyValue')+"</button>";
                        }
                        
                    }
                }
            }
            if(document.getElementById("biggerButtons").children.length < 3){
                document.getElementById("biggerButtons").innerHTML = "";
                document.getElementById("innerKeyboard").classList.remove("disabled");
                document.getElementById("keyboard").classList.remove("grayKeys");
            }
    }
}