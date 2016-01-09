function fnShowTriangle() {
    location.hash = "creatingtriangle";
}

function fnGetCreatingtriangle() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/creatingtriangle/view/creatingtriangle.html');

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
