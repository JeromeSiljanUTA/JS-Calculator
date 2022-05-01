var toggleVal = "hide"; total = 0;

function append(num) {
    total = (total * 10) + num;
    document.getElementById('view').innerHTML = total;
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
    total = 0;
    document.getElementById('view').innerHTML = total;
}

function calculate(){
    window.alert('calculate');
}
