var toggleVal = "hide", num1 = 0, num2 = 0, operation = "", clearNow = false;

function append(num) {
    if(clearNow == true){
        clearView();
        clearNow = false;
    }
    if(operation == ""){
        num1 = (num1 * 10) + num;
        document.getElementById('view').innerHTML = num1;
    }
    else{
        num2 = (num2 * 10) + num;
        document.getElementById('view').innerHTML = num1 + " " + operation + " " + num2;
    }
}

function toggleVisibility() {
    window.alert('clear');
    if(toggleVal == "show"){
        document.getElementById('view').style.display = 'block';
        toggleVal = "hide";
    }
    else{
        document.getElementById('view').style.display = 'none';
        toggleVal = "show";
    }
}

function clearView() {
    num1 = 0;
    num2 = 0;
    operation = "";
    document.getElementById('view').innerHTML = num1;
}

function operator(input_operator){
    operation = input_operator;
    document.getElementById('view').innerHTML = num1 + " " + input_operator;
}

function calculate(){
    var result;
    if(operation == "+"){
        result = num1 + num2;
    }
    else if(operation == "-"){
        result = num1 - num2;
    }
    else if(operation == "*"){
        result = num1 * num2;
    }
    else if(operation == "/"){
        result = num1 / num2;
    }
    document.getElementById('view').innerHTML = result;
    clearNow = true;
}
