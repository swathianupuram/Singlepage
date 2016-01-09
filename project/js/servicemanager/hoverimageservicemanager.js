function fnShowHoverimage() {
    location.hash = "hoverimage";
}

function fnGetHoverimage() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/hoverimage/view/hoverimage.html');

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
