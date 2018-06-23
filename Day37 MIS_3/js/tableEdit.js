function pencilTip() {
    let pencil = document.createElement("img");
    pencil.setAttribute("src", "./img/pencil.png");
    this.appendChild(pencil);
    pencil.style.position = "relative";
    pencil.style.left = "10px";
    pencil.style.top = "3px";
}

function clearPencil() {
    let pencil = document.querySelector("img");
    if ( pencil ) {
        pencil.parentNode.removeChild(pencil);
    }
}

function addButton(ev) {
    // let ev = ev || window.event;
    let target = ev.target || ev.srcElement;
    let ok = document.createElement("button");
    let cancel = document.createElement("button");
    let textarea = document.createElement("textarea");
    ok.onclick = confirmButtonFun;
    cancel.onclick = cancelButtonFun;
    textarea.onkeydown = textareaFun;

    ok.innerHTML = "确认";
    ok.style.display = "block";
    ok.style.position = "relative";
    ok.style.top = "-10px";
    ok.style.left = "10px";

    cancel.innerHTML = "取消"
    cancel.style.display = "block";
    cancel.style.position = "relative";
    cancel.style.bottom = "-10px";
    cancel.style.left = "10px";

    if ( document.querySelector("button") == null
        && target.nodeName.toLowerCase() !== "button" ) {
        textarea.innerHTML = this.innerText;
        this.innerHTML = "";
        this.insertBefore(ok,this.firstChild)
        this.appendChild(textarea);
        this.appendChild(cancel);
        textarea.focus();
        textarea.select();
    }
}

function clearButton() {
    clearPencil();
    let buttons = document.querySelectorAll("button");
    if ( buttons.length>0 ) {
        for ( let i=0; i<buttons.length; i++ ) {
            buttons[i].parentNode.removeChild(buttons[i]);
        }
    }
}

function confirmButtonFun() {
    let data = document.querySelector("textarea").value;
    if ( isNaN(data) ) {
        alert("只能输入数字")
    }
    else {
        document.querySelector("textarea").parentNode.innerHTML = data;
        saveData();
    }
}

function cancelButtonFun() {
    redrawTable(getData());
}

function textareaFun() {
    if ( event.keyCode == 13 ) {
        confirmButtonFun();
    }
    if ( event.keyCode == 27 ) {
        cancelButtonFun();
    }
}

function saveData() {
    let thList = document.querySelectorAll("tr");
    let product, region
    let sourceData = [];
    for ( let i=1; i<thList.length; i++ ) {
        let sales = [];
        for ( let j=0; j<thList[i].cells.length; j++ ) {
            if ( j == 0 ) {
                if ( thList[i].cells[j].innerText == "手机" ||
                    thList[i].cells[j].innerText == "笔记本" ||
                    thList[i].cells[j].innerText == "智能音箱" ) {
                    product = thList[i].cells[j].innerText;
                }
                else {
                    region = thList[i].cells[j].innerText;
                }
            }
            if ( j == 1 ) {
                if ( thList[i].cells[j].innerText == "手机" ||
                    thList[i].cells[j].innerText == "笔记本" ||
                    thList[i].cells[j].innerText == "智能音箱" ) {
                    product = thList[i].cells[j].innerText;
                }
                else {
                    region = thList[i].cells[j].innerText;
                }
            }
            if ( j>1 ) {
                sales.push(thList[i].cells[j].innerText);
            }
        }
        sourceData.push({"product":product,"region":region,"sales":sales});
        // console.log("product=",product,"region=",region,"sales=",sales);
    }
    console.log(sourceData);
    localStorage.setItem("sourceData",sourceData);
    // console.log(localStorage.sourceData);
}
