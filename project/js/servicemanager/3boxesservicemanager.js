function fnShowBox() {
    location.hash = "3boxes";
}

function fnGet3boxes() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/3boxes/view/3boxes.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('commonID').innerHTML = oEv.currentTarget.responseText;
            }
        }
       fnShowBox();
    };



    oXhr.send();
}
