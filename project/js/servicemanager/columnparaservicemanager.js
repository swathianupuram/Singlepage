function fnShow() {
    location.hash = "Columnpara";
}

function fnGetColumnpara() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/columnpara/view/columnpara.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('commonID').innerHTML = oEv.currentTarget.responseText;
            }
        }
        fnShow();
    };



    oXhr.send();
}
