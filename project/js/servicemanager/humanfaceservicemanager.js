function fnShowFace() {
    location.hash = "humanface";
}

function fnGetFace() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/humanface/view/humanface.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('commonID').innerHTML = oEv.currentTarget.responseText;
            }
        }
        fnShowFace();
    };



    oXhr.send();
}
