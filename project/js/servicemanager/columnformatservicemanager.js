function fnShowColumnformat() {
    location.hash = "columnformat";
}

function fnGetColumnformat() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/columnformat/view/columnformat.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('commonID').innerHTML = oEv.currentTarget.responseText;
            }
        }
        
    };



    oXhr.send();
}
