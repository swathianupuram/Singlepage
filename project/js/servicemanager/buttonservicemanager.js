function fnShowButton() {
    location.hash = "button";
}

function fnGetButton() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/button/view/button.html');

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
