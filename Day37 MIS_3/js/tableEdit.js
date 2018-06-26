// 添加铅笔图标提示可编辑
function pencilTip() {
    let pencil = document.createElement("img");
    pencil.setAttribute("src", "./img/pencil.png");
    pencil.style.position = "relative";
    pencil.style.left = "20px";
    pencil.style.top = "3px";
    if ( this.querySelector("button") == null ) {
        this.appendChild(pencil);
    }
}
function clearPencil() {
    let pencil = document.querySelector("img");
    if ( pencil ) {
        pencil.parentNode.removeChild(pencil);
    }
}
// 添加按钮
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
    ok.style.marginRight = "20px";
    cancel.innerHTML = "取消"
    textarea.style.height = "15px";
    if ( document.querySelectorAll("button").length == 1
        && target.nodeName.toLowerCase() !== "button" ) {
        // console.log(document.querySelectorAll("button").length);
        textarea.innerHTML = this.innerText;
        this.innerHTML = "";
        this.appendChild(textarea);
        this.appendChild(ok);
        this.appendChild(cancel);
        textarea.focus();
        textarea.select();
    }
    // 点击其他单元格相当于点击取消
    else if ( document.querySelectorAll("button").length > 1 ) {
        cancelButtonFun();
    }
}
// “清空本地数据”按钮
function clearButtonFun() {
    localStorage.clear();
    redrawTable(getData());
    redrawChartAll();
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
// 回车等于确定，esc等于取消
function textareaFun() {
    if ( event.keyCode == 13 ) {
        confirmButtonFun();
    }
    if ( event.keyCode == 27 ) {
        cancelButtonFun();
    }
}
