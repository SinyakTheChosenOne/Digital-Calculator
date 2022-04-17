const input = document.getElementById("input")
let exp = "";

function press(num) {
    exp += num;
    input.value = exp;
}

function equal(){
    input.value = eval(exp);
    exp = ""
}

function erase() {
    exp = ''
    input.value = exp;
}