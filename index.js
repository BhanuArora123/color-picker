// create a area on click function to which on click get the position of the click and place your color cursor there 
// let the user choose the mode of selection
// also change the color according to value you got
let col = "";
let myclass = "colorOutChosen";
function clickColor(hex, top, left, event) {
    let copyBut = document.getElementsByClassName("copy")[0];
    copyBut.innerHTML = "Copy";
    let colBox = document.getElementsByClassName("colorBox");
    let xpos = event.clientX;
    let ypos = event.clientY;
    console.log("hello");
    let hexaElement = document.getElementById("selectedhexagon");
    hexaElement.setAttribute("style", `top:${top - 30}px ;left:${left - 109}px;`);
    hexaElement.children[0].setAttribute("style", `background-image:linear-gradient(12deg,${hex},${hex});`);
    // print color to color box
    let colorConsole = document.getElementsByClassName("colorOutChosen")[0];
    colorConsole.innerHTML = hex;
    // change color of chosen color box
    let chosenColorBox = document.getElementsByClassName("chosenColorBox")[0].children[0];
    chosenColorBox.style.backgroundColor = hex;
    col = hex;
    let rgbMode = document.getElementsByClassName("colorOutChosenRGB")[0];
    if (rgbMode.style.display == "flex") {
        let colorConsole1 = document.getElementsByClassName("colorOutChosenRGB")[0];
        colorConsole1.innerHTML = hexToRgb(hex);
    }
}
function copyMe() {
    let copyText = document.getElementsByClassName(myclass)[0];
    var r = document.createRange();
    r.selectNode(copyText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    // change copy to copied
    let copyBut = document.getElementsByClassName("copy")[0];
    copyBut.innerHTML = "Copied";
}
function setColor() {
    let customColorInp = document.getElementById("customColorInput");
    let val = customColorInp.value;
    let len = val.length;
    try {
    } catch (error) {
        console.log("error occured here");
        return -1;
    }
    if (len == 7) {
        let chosenColorBox = document.getElementsByClassName("chosenColorBox")[0].children[0];
        chosenColorBox.style.backgroundColor = val;
    }
}
function getDegree() {
    let deg = document.getElementById("degreeBox");
    let val = deg.value;
    return val;
}
function getColor(id) {
    let val1 = document.getElementById("color1Box").value;
    let val2 = document.getElementById("color2Box").value;
    if (val1.length == 7 && val2.length == 7 && getDegree().length > 0) {
        let lg = document.getElementsByClassName("linearGradientColor")[0];
        lg.style.backgroundImage = `linear-gradient(${getDegree()}deg,${val1},${val2})`;
    }
}
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);
    return `rgb(${r},${g},${b})`;
}
function changeColorModeRGB() {
    let rgbMode = document.getElementsByClassName("colorOutChosenRGB")[0];
    let hexMode = document.getElementsByClassName("colorOutChosen")[0];
    let rgbHead = document.getElementsByClassName("rgbCol")[0];
    let hexHead =document.getElementsByClassName("hexCol")[0];
    rgbMode.style.display = "flex";
    hexMode.style.display = "none";
    rgbHead.style.boxShadow = "inset 2px 2px 2px #afadad,inset -2px -2px 2px #ffffff";
    hexHead.style.boxShadow = "none";
    if (col != "") {
        let rgb = hexToRgb(col);
        rgbMode.innerHTML = rgb;
    }
    myclass = "colorOutChosenRGB";
}
function changeColorModeHex(){
    let rgbMode = document.getElementsByClassName("colorOutChosenRGB")[0];
    let hexMode = document.getElementsByClassName("colorOutChosen")[0];
    let rgbHead = document.getElementsByClassName("rgbCol")[0];
    let hexHead =document.getElementsByClassName("hexCol")[0];
    rgbMode.style.display = "none";
    hexMode.style.display = "flex";
    hexHead.style.boxShadow = "inset 2px 2px 2px #afadad,inset -2px -2px 2px #ffffff";
    rgbHead.style.boxShadow = "none";
    if(col!=""){
        hexMode.innerHTML = col;
    }
    myclass = "colorOutChosen";
}
function mouseOutMap() { }
function mouseOverColor(hex) { }