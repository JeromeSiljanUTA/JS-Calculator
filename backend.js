var toggleVal = "hide"; total = 0;

function appendOne() {
    total = (total * 10) + 1;
    document.getElementById('view').innerHTML = total;
}

function toggleVisibility() {
    if(toggleVal == "show"){
        document.getElementById('view').style.display = 'block';
        toggleVal = "hide";
    }
    else{
        document.getElementById('view').style.display = 'none';
        toggleVal = "show";
    }
}
