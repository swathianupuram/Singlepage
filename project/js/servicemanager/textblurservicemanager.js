function fnShowText() {
    location.hash = "textblur";
}

function fnGetTextblur() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/textblur/view/textblur.html');

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
